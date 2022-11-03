import React from "react";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { useBlockchainContext } from "../context";
import { NotificationManager } from "react-notifications";
import { useWallet } from "use-wallet";
import { Contracts } from "../contracts";
import { ethers } from "ethers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  harmonyServiceContract,
  avalancheServiceContract,
} from "../contracts/portalContract";

const PortalWithdrawInputFieldGroup = ({
  image,
  gameBalance,
  walletBalance,
  symbol,
  description,
  maxTransaction,
  readOnly,
  setVerifyCodeState,
  second,
  minute,
  buttonProgress,
  withdrawDisable
}) => {
  const wallet = useWallet();
  let navigate = useNavigate();
  const [
    state,
    {
      setCreateQrCodeState,
      setWithdrawButtonState,
    },
  ] = useBlockchainContext();

  const [inputValue, setInputValue] = useState("");
  const [overflow, setOverflow] = useState(0);
  const [withDrawProcessState, setWithDrawProcessState] = useState(0);

  const onWithdrawClick = async () => {
    setWithDrawProcessState(1);
    const gameValue = inputValue;
    try {
      if (state.walletStatus === "connected") {
        if (
          state.userInfo.playFabId !== null ||
          state.userInfo.playFabId !== undefined
        ) {
          if (
            Number(gameValue) !== NaN &&
            Number(gameValue) !== 0 &&
            Number(gameValue) <= gameBalance
          ) {
            setWithDrawProcessState(0);
            if (symbol === "AVAX") {
              // const transaction = await avalancheServiceContract.deposit({
              //   value: ethers.utils.parseEther("0.002"),
              // });
              // const tx = await transaction.wait();
              // if (tx !== null) 
              {
                NotificationManager.info("Please Wait for withdraw timing", "");
                let WithdrawVCRequest = {};
                let withdrawParameter = {};
                WithdrawVCRequest = {
                  currencycode: "AV",
                  inputValue: gameValue,
                  walletaddress: state.user,
                };
                withdrawParameter = {
                  withdrawAddress: state.userInfo.userAddress,
                  tokenAddress: "",
                  withdrawAmount: gameValue,
                  gameBalance: gameBalance,
                  tokenName: "AVAX",
                  WithdrawVCRequest: WithdrawVCRequest,
                }
                await axios
                  .post("/api/contract/withdraw", withdrawParameter)
                  .then((res) => {
                    console.log(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            } else {
              const transaction = await harmonyServiceContract.deposit({
                value: ethers.utils.parseEther('0.5'),
              });
              const tx = await transaction.wait();
              if (tx !== null)
              {
                NotificationManager.info("Please Wait for withdraw timing", "");
                let WithdrawVCRequest = {};
                let withdrawParameter = {};
                if (symbol === "ONE") {
                  WithdrawVCRequest = {
                    currencycode: "ON",
                    inputValue: gameValue,
                    walletaddress: state.user,
                  };
                  withdrawParameter = {
                    withdrawAddress: state.userInfo.userAddress,
                    tokenAddress: "",
                    withdrawAmount: gameValue,
                    gameBalance: state.gameBalanceForOne,
                    tokenName: "ONE",
                    WithdrawVCRequest: WithdrawVCRequest,
                  };
                }
                if (symbol === "MTO") {
                  WithdrawVCRequest = {
                    currencycode: "MT",
                    inputValue: gameValue,
                    walletaddress: state.user,
                  };
                  withdrawParameter = {
                    withdrawAddress: state.userInfo.userAddress,
                    tokenAddress: Contracts.mtocontract.address,
                    withdrawAmount: gameValue,
                    gameBalance: state.gameBalanceForMto,
                    tokenName: "MTO",
                    WithdrawVCRequest: WithdrawVCRequest,
                  };
                }
                if (symbol === "ARCDN") {
                  WithdrawVCRequest = {
                    currencycode: "AR",
                    inputValue: gameValue,
                    walletaddress: state.user,
                    gameBalance: state.gameBalanceForArc,
                  };
                  withdrawParameter = {
                    withdrawAddress: state.userInfo.userAddress,
                    tokenAddress: Contracts.arccontract.address,
                    withdrawAmount: gameValue,
                    gameBalance: state.gameBalanceForArc,
                    tokenName: "ARC",
                    WithdrawVCRequest: WithdrawVCRequest,
                  };
                }
                if (symbol === "SONIC") {
                  WithdrawVCRequest = {
                    currencycode: "SO",
                    inputValue: gameValue,
                    walletaddress: state.user,
                  };
                  withdrawParameter = {
                    withdrawAddress: state.userInfo.userAddress,
                    tokenAddress: Contracts.soncontract.address,
                    withdrawAmount: gameValue,
                    gameBalance: state.gameBalanceForSon,
                    tokenName: "SON",
                    WithdrawVCRequest: WithdrawVCRequest,
                  };
                }
                console.log("symbol----------",withdrawParameter);
                setWithDrawProcessState(0);
                await axios
                  .post("/api/contract/withdraw", withdrawParameter)
                  .then((res) => {
                    console.log(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }
          } else if (Number(gameValue) > gameBalance) {
            setOverflow(1);
          }
          setWithdrawButtonState(0);
        } else {
          NotificationManager.error("You must create playID", "");
          setWithDrawProcessState(0);
          setWithdrawButtonState(0);
        }
      } else {
        setWithDrawProcessState(0);
        setWithdrawButtonState(0);
      }
    } catch (err) {
      setWithDrawProcessState(3);
      setTimeout(() => {
        setWithDrawProcessState(0);
      }, 10000);
      setWithdrawButtonState(0);
    }
  };

  const onEnterCodeClick = async () => {
    try {
      if (wallet.status === "connected") {
        if (
          state.userInfo.playFabId !== null ||
          state.userInfo.playFabId !== undefined
        ) {
          await axios
            .post("/api/users/checkQrCode", {
              userAddress: wallet.account,
            })
            .then((res) => {
              if (res.data == 0) {
                setCreateQrCodeState(1);
                navigate("/profile/accountSettings/security");
              } else {
                setVerifyCodeState(1);
              }
            })
            .catch((err) => {
              console.error("qrcode = ", err);
            });
        } else {
          NotificationManager.error("You must create playID", "");
        }
      } else {
        NotificationManager.error("You must connect wallet", "");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="xl:flex lg:flex block block portalInputFiled mt-2">
        <div className="xl:w-5/12 lg:w-5/12 md:w-10/12 w-full xl:pr-2 lg:pr-2 md:pr-2">
          <div className="relative">
            <p className="text-base text-gray-300">
              {`Game Balances: ${gameBalance}`}
            </p>
          </div>
          <div className="flex justify-between bg-back-grey mt-2 py-1 px-2 rounded-md">
            <div className="flex">
              <img src={image} alt={symbol}></img>
              <input
                className={`bg-transparent border-none text-base  ${
                  overflow === 1 ? "text-red-800" : "text-white"
                }`}
                pattern="[0-9]*"
                onInput={(evt) => {
                  const inputValue_ = evt.target.value;
                  if (
                    !inputValue_ ||
                    inputValue_.match(/^\d{1,}(\.\d{0,4})?$/)
                  ) {
                    setInputValue(inputValue_);
                  }
                  setOverflow(0);
                }}
                value={inputValue}
                type="text"
                placeholder="Enter amount..."
                readOnly={readOnly}
              />
            </div>
            <p className="text-base text-dark-grey my-auto">{symbol}</p>
          </div>
          <div>
            {overflow === 1 ? (
              <p className="text-red-800 text-xs">Insufficient Balance</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="text-red-800 text-xs">
              {description} :{" "}
              <span className="text-gray-300">
                {maxTransaction} {symbol}
              </span>
            </p>
          </div>
        </div>
        <div className="xl:w-5/12 lg:w-5/12 md:w-10/12 w-full xl:pr-2 lg:pr-2 md:pr-2">
          <p className="text-base text-gray-300">
            {`Wallet Balances: ${walletBalance}`}
          </p>
          <div className="flex justify-between bg-back-grey mt-2 py-1 px-2 rounded-md">
            <div className="flex">
              <img src={image} alt={symbol}></img>
              <p
                className={`text-base text-gray-300 my-auto ${
                  symbol === "ONE" && "ml-3"
                } ml-2 text-dark-grey text-base `}
              >
                {`Wallet Balances: ${walletBalance}`}
              </p>
            </div>
            <p className="text-base text-dark-grey my-auto">{symbol}</p>
          </div>
        </div>
        <div className="xl:w-2/12 lg:w-2/12 md:w-10/12 pl-2 flex xl:mt-0 lg:mt-0 mt-3">
          <div className="my-4 w-full">
            {(second !== 0 || minute !== 0) && buttonProgress === 0 && (
              <button
                onClick={onWithdrawClick}
                className="w-full font-bold bg-black-600 duration-300 hover:bg-purple-500 py-2 active:bg-purple-900 border-2 
          rounded-full border-purple-900 text-base text-gray-300"
                disabled={state.setWithdrawButtonState || withdrawDisable || withDrawProcessState}
              >
                Withdraw
              </button>
            )}
            {(second !== 0 || minute !== 0) && buttonProgress === 1 && (
              <button
                className="w-full font-bold bg-black-600 py-2 border-2 
          rounded-full border-blue-700 text-base text-gray-300"
              >
                PROCESSING...
              </button>
            )}
            {(second !== 0 || minute !== 0) && buttonProgress === 2 && (
              <div>
                <button
                  className="w-full font-bold bg-black-600 py-2  border-2 
          rounded-full text-base text-gray-300 completedButton"
                >
                  COMPLETED...
                </button>
                <Link to="/profile/transactionRecords/portal">
                  <h1 className="text-sm text-center text-gray-300 font-normal">
                    Transaction Record{" "}
                    <span className="text-primary-pink font-bold">→</span>
                  </h1>
                </Link>
              </div>
            )}
            {(second !== 0 || minute !== 0) && buttonProgress === 3 && (
              <div>
                <button
                  className="w-full font-bold bg-black-600 py-2  border-2 
          rounded-full text-base text-gray-300 border-red-800"
                >
                  FAILED...
                </button>
              </div>
            )}
            {second === 0 && minute === 0 && (
              <button
                onClick={onEnterCodeClick}
                className="w-full font-bold bg-black-600 duration-300 hover:bg-purple-500 py-2 active:bg-purple-900 border-2 
          rounded-full border-purple-900 text-base text-gray-300"
              >
                Enter Code
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PortalWithdrawInputFieldGroup.propTypes = {
  image: PropTypes.string.isRequired,
  gameBalance: PropTypes.string,
  walletBalance: PropTypes.string,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string,
  maxTransaction: PropTypes.string,
  readOnly: PropTypes.bool,
  buttonProgress: PropTypes.number,
};

PortalWithdrawInputFieldGroup.defaultProps = {
  gameBalance: "0",
  walletBalance: "0",
};

export default PortalWithdrawInputFieldGroup;
