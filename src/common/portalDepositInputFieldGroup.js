import React from "react";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { useBlockchainContext } from "../context";
import { useWallet } from "use-wallet";
import { Contracts } from "../contracts";
import { ethers } from "ethers";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";

import {
  portalContract,
  arcContract,
  sonContract,
  mtoContract,
  avalanchePortalContract,
} from "../contracts/portalContract";

const PortalDepositInputFieldGroup = ({
  image,
  gameValue,
  walletValue,
  approveValue,
  symbol,
  description,
  maxTransaction,
  buttonProgress,
  readOnly,
}) => {
  const [
    state,
    {
      getApproveBalanceForArc,
      getApproveBalanceForMto,
      getApproveBalanceForSon,
      setDepositButtonState
    },
  ] = useBlockchainContext();

  const [inputValue, setInputValue] = useState("");
  const [overflow, setOverflow] = useState(0);

  const onApproveClick = async () => {
    try {
      if (state.walletStatus === "connected") {
        if (
          state.userInfo.playFabId !== null ||
          state.userInfo.playFabId !== undefined
        ) {
          if (symbol === "MTO") {
            const mtotransaction = await mtoContract.approve(
              Contracts.portalcontract.address,
              ethers.utils.parseEther("10000")
            );
            const tx = await mtotransaction.wait();

            if (tx !== null) {
              getApproveBalanceForMto();
            }
          }
          if (symbol === "SONIC") {
            const sontransaction = await sonContract.approve(
              Contracts.portalcontract.address,
              ethers.utils.parseEther("250000")
            );
            const tx = await sontransaction.wait();

            if (tx !== null) {
              getApproveBalanceForSon();
            }
          }
          if (symbol === "ARCDN") {
            const arctransaction = await arcContract.approve(
              Contracts.portalcontract.address,
              ethers.utils.parseEther("10000")
            );
            const tx = await arctransaction.wait();

            if (tx !== null) {
              getApproveBalanceForArc();
            }
          }
        }
      } else {
        NotificationManager.error(
          "Please connect metamask",
          ""
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onRemovePermissionClick = async () => {
    try {
      if (state.walletStatus === "connected") {
        if (
          state.userInfo.playFabId !== null ||
          state.userInfo.playFabId !== undefined
        ) {
          if (symbol === "MTO") {
            const mtotransaction = await mtoContract.approve(
              Contracts.portalcontract.address,
              ethers.utils.parseEther("0")
            );
            const tx = await mtotransaction.wait();

            if (tx !== null) {
              getApproveBalanceForMto();
            }
          }
          if (symbol === "SONIC") {
            const sontransaction = await sonContract.approve(
              Contracts.portalcontract.address,
              ethers.utils.parseEther("0")
            );
            const tx = await sontransaction.wait();

            if (tx !== null) {
              getApproveBalanceForSon();
            }
          }
          if (symbol === "ARCDN") {
            const arctransaction = await arcContract.approve(
              Contracts.portalcontract.address,
              ethers.utils.parseEther("0")
            );
            const tx = await arctransaction.wait();

            if (tx !== null) {
              getApproveBalanceForArc();
            }
          }
        }
      } else {
        NotificationManager.error(
          "Please connect metamask",
          ""
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onDepositClick = async () => {
    setDepositButtonState(1);
    const depositVaule = inputValue;
    try {
      if (state.walletStatus === "connected") {
        if (
          state.userInfo.playFabId !== null ||
          state.userInfo.playFabId !== undefined
        ) {
          if (Number(depositVaule) !== NaN && Number(depositVaule) !== 0 && Number(depositVaule) <= walletValue) {
            //console.log(symbol);
            if (symbol === "ONE") {
              console.log("ONE");
              const transaction = await portalContract.depositForOne({
                  value: ethers.utils.parseEther(depositVaule),
              });
              console.log(transaction);
              const DepositVCRequest = {
                currencycode: "ON",
                inputValue: depositVaule,
                WalletAddress: state.user,
              };
              await axios.post('/api/contract/deposit',{
                transaction: transaction,
                DepositVCRequest: DepositVCRequest,
                tokenName: "ONE"
              }).then((res) => {
                console.log(res.data);
              }).catch((err) => {
              })
            }
            if (symbol === "ARCDN") {
              const transaction = await portalContract.depositForOther(
                Contracts.arccontract.address,
                ethers.utils.parseEther(depositVaule)
              );
              const DepositVCRequest = {
                currencycode: "AR",
                inputValue: depositVaule,
                WalletAddress: state.user,
              };
              await axios.post('/api/contract/deposit',{
                transaction: transaction,
                DepositVCRequest: DepositVCRequest,
                tokenName: "ARC"
              }).then((res) => {
                console.log(res.data);
              }).catch((err) => {
              })
            }
            if (symbol === "SONIC") {
              const transaction = await portalContract.depositForOther(
                Contracts.soncontract.address,
                ethers.utils.parseEther(depositVaule)
              );
              const DepositVCRequest = {
                currencycode: "SO",
                inputValue: depositVaule,
                WalletAddress: state.user,
              };
              await axios.post('/api/contract/deposit',{
                transaction: transaction,
                DepositVCRequest: DepositVCRequest,
                tokenName: "SON"
              }).then((res) => {
                console.log(res.data);
              }).catch((err) => {
              })
            }
            if (symbol === "MTO") {
              const transaction = await portalContract.depositForOther(
                Contracts.mtocontract.address,
                ethers.utils.parseEther(depositVaule)
              );
              const DepositVCRequest = {
                currencycode: "MT",
                inputValue: depositVaule,
                WalletAddress: state.user,
              };
              await axios.post('/api/contract/deposit',{
                transaction: transaction,
                DepositVCRequest: DepositVCRequest,
                tokenName: "MTO"
              }).then((res) => {
                console.log(res.data);
              }).catch((err) => {
              })
            }
            if (symbol === "AVAX") {
              const transaction = await avalanchePortalContract.deposit({
                value: ethers.utils.parseEther(depositVaule),
              })
              const DepositVCRequest = {
                currencycode: "AV",
                inputValue: depositVaule,
                WalletAddress: state.user,
              };
              await axios.post('/api/contract/deposit',{
                transaction: transaction,
                DepositVCRequest: DepositVCRequest,
                tokenName: "AVAX"
              }).then((res) => {
                console.log(res.data);
              }).catch((err) => {
              })
            }
          } else if (Number(depositVaule) > walletValue) {
            setOverflow(1);
          }
        }
        setDepositButtonState(0);
      } else{
        NotificationManager.error(
          "Please connect metamask",
          ""
        );
      }
    } catch (err) {
      
    }
  };

  return (
    <div className="xl:flex lg:flex block block portalInputFiled mt-2">
      <div className="xl:w-5/12 lg:w-5/12 md:w-10/12 w-full xl:pr-2 lg:pr-2 md:pr-2">
        <div className="relative">
          <p className="text-base text-gray-300">
            {`Wallet Balances: ${walletValue}`}
          </p>
          {approveValue !== "0" &&
            approveValue !== "0.0" &&
            symbol !== "ONE" &&
            symbol !== "AVAX" && (
              <a
                className="xl:absolute lg:absolute md:absolute sm:absolute right-0 top-0 cursor-pointer no-underline font-bold text-blue-700"
                onClick={onRemovePermissionClick}
              >
                Remove Permission
              </a>
            )}
        </div>
        <div className="flex justify-between bg-back-grey mt-2 py-1 px-2 rounded-md">
          <div className="flex">
            <img src={image} alt={symbol}></img>
            <input
              className={`bg-transparent border-none text-base text-white ${
                overflow === 1 ? "portal-color-red" : ""
              }`}
              pattern="[0-9]*"
              onInput={(evt) => {
                const inputValue_ = evt.target.value;
                if (!inputValue_ || inputValue_.match(/^\d{1,}(\.\d{0,4})?$/)) {
                  setInputValue(inputValue_);
                }                
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
          {`Game Balances: ${gameValue}`}
        </p>
        <div className="flex justify-between bg-back-grey mt-2 py-1 px-2 rounded-md">
          <div className="flex">
            <img src={image} alt={symbol}></img>
            <p
              className={`text-base text-gray-300 my-auto ${
                symbol === "ONE" && "ml-3"
              } ml-2 text-dark-grey text-base `}
            >
              {`Game Balances: ${gameValue}`}
            </p>
          </div>
          <p className="text-base text-dark-grey my-auto">{symbol}</p>
        </div>
      </div>
      <div className="xl:w-2/12 lg:w-2/12 md:w-6/12 pl-2 flex xl:mt-0 lg:mt-0 mt-3">
        <div className="my-4 w-full">
          {((approveValue !== "0" && approveValue !== "0.0") ||
            symbol === "ONE" ||
            symbol === "AVAX") &&
            buttonProgress === 0 && (
              <button
                onClick={onDepositClick}
                className="w-full font-bold bg-black-600 duration-300 hover:bg-purple-500 py-2 active:bg-purple-900 border-2 
          rounded-full border-purple-900 text-base text-gray-300"
                disabled={state.depositButtonState}
              >
                Deposit
              </button>
            )}
          {((approveValue !== "0" && approveValue !== "0.0") ||
            symbol === "ONE" ||
            symbol === "AVAX") &&
            buttonProgress === 1 && (
              <button
                className="w-full font-bold bg-black-600 py-2 border-2 
        rounded-full border-blue-700 text-base text-gray-300"
              >
                PROCESSING...
              </button>
            )}
          {((approveValue !== "0" && approveValue !== "0.0") ||
            symbol === "ONE" ||
            symbol === "AVAX") &&
            buttonProgress === 2 && (
              <div>
                <button
                  className="w-full font-bold bg-black-600 py-2  border-2 
        rounded-full text-base text-gray-300 completedButton"
                >
                  COMPLETED...
                </button>
                <Link to="/profile/transactionRecords/portal">
                  <h1 className="text-sm text-gray-300 font-normal text-center">
                    Transaction Record{" "}
                    <span className="text-primary-pink font-bold">→</span>
                  </h1>
                </Link>
              </div>
            )}
          {((approveValue !== "0" && approveValue !== "0.0") ||
            symbol === "ONE" ||
            symbol === "AVAX") &&
            buttonProgress === 3 && (
              <div>
                <button
                  className="w-full font-bold bg-black-600 py-2  border-2 
        rounded-full text-base text-gray-300 border-red-800"
                >
                  FAILED
                </button>
              </div>
            )}
          {(approveValue === "0" || approveValue === "0.0") &&
            symbol !== "ONE" &&
            symbol !== "AVAX" && (
              <button
                onClick={onApproveClick}
                className="w-full font-bold bg-black-600 duration-300 hover:bg-purple-500 py-2 active:bg-purple-900 border-2 
          rounded-full border-purple-900 text-base text-gray-300"
              >
                Approve
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

PortalDepositInputFieldGroup.propTypes = {
  image: PropTypes.string.isRequired,
  gameValue: PropTypes.string,
  walletValue: PropTypes.string,
  approveValue: PropTypes.string,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string,
  maxTransaction: PropTypes.string,
  readOnly: PropTypes.bool,
};

PortalDepositInputFieldGroup.defaultProps = {
  gameValue: "0",
  walletValue: "0",
  approveValue: "0",
};

export default PortalDepositInputFieldGroup;
