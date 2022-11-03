import React from "react";
import { useState, useEffect } from "react";
import PortalWithdrawInputFieldGroup from "../../common/portalWithdrawInputFieldGroup";
import { IMaskInput } from 'react-imask';
import { useBlockchainContext } from "../../context";
import { useWallet } from "use-wallet";
import "../../css/portal.scss";
import axios from "axios";
import InputMask from "react-input-mask";

const PortalWithdraw = ({ networkData, gameData, buttonProgress }) => {
  const wallet = useWallet();
  const [state, {}] = useBlockchainContext();
  const [verifyCodeState, setVerifyCodeState] = useState(0);
  const [inputValue, setInputValue] = useState(); //verifycode
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    if (
      localStorage.getItem("remain_time") === null ||
      localStorage.getItem("remain_time") === undefined
    ) {
      setSecond(0);
      setMinute(0);
    } else {
      getRemainTime();
    }
  }, [localStorage.getItem("remain_time")]);

  const trackTimer = (time) => {
    let minute_ = Math.floor(time / 1000 / 60);
    let second_ = Math.floor((time / 1000) % 60);

    const interval = setInterval(() => {
      if (minute_ == 0 && second_ == 0) {
        localStorage.removeItem("remain_time");
        clearInterval(interval);
        return;
      }

      second_--;

      if (second_ < 0) {
        second_ = 59;
        minute_--;
      }

      setSecond(second_);
      setMinute(minute_);
    }, 1000);
  };

  const getRemainTime = () => {
    const time = localStorage.getItem("remain_time");
    if (time !== null) {
      const nowTime = new Date();

      const t = 10 * 60 * 1000 - (Number(nowTime.getTime()) - Number(time));
      if (t <= 0) {
        localStorage.removeItem("remain_time");
        setSecond(0);
        setMinute(0);
        return;
      }
      trackTimer(t);
    } else {
      return;
    }
  };

  const verifyCode = () => {
    let str = "";
    for(let i=0;i<inputValue.length;i++){
      if(inputValue[i] !== '-'){
        str += inputValue[i];
      }
    }
    const value = Number(str);
    axios
      .post("/api/users/verifyCode", {
        userAddress: wallet.account,
        checkCode: value,
      })
      .then((res) => {
        if (res.data == true) {
          setVerifyCodeState(0);

          const nowTime = new Date();
          localStorage.setItem("remain_time", nowTime.getTime());
          trackTimer(10 * 60 * 1000);
        } else {
          document.getElementById("verifyCode").style.color = "red";
        }
      })
      .catch((err) => {
      });
  };

  return (
    <div>
      {verifyCodeState === 1 && (
        <div id="verifyCode" className="text-center ">
          {/* <input
            autoComplete="off"
            onChange={(e) => {
               setInputValue(e.target.value);
            }}
            className="verifyInput"
            id="verifyInput"
            maxLength={6}
          /> */}
          
          <InputMask 
          mask='9-9-9-9-9-9' 
          maskplaceholder="0-0-0-0-0-0" 
          className="w-44 text-3xl text-white text-center border rounded-md bg-back-grey"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id="verifyInput"
          alwaysShowMask/>

          <div>
            <button
              className="font-bold bg-black-600 duration-300 py-2 hover:bg-purple-500 px-4 active:bg-purple-900 border-2 
          rounded-full border-purple-900 text-base text-gray-300 mt-2"
              onClick={verifyCode}
            >
              Verify
            </button>
          </div>
        </div>
      )}
      {networkData === 1 && Number(state.currentChainId) === 1666600000 && gameData === 1 && (
        <div>
          <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-2xl ">
            Withdraw
            <span className="font-orbitron text-base font-bold text-red-500">
            {(second !== 0 || minute !== 0) && (
              <span className="px-3">
                <span>{minute < 10 ? "0" + minute : minute}</span> :{" "}
                <span>{second < 10 ? "0" + second : second}</span>
              </span>
            )}
            </span>
          </h1>
          <h1 className="text-white text-sm font-bold">Service Fee</h1>
          <h1 className="text-blue-400 text-sm font-bold">Withdrawal service Fee: 0.5 ONE</h1>
          <PortalWithdrawInputFieldGroup
            image="/assets/images/portal/mtoToken.svg"
            symbol="MTO"
            description={"Max Withdraw amount per transaction"}
            maxTransaction="10,000"
            gameBalance={`${Number(state.gameBalanceForMto).toFixed(4)}`}
            walletBalance={`${Number(state.mtoBalance).toFixed(4)}`}
            setVerifyCodeState={setVerifyCodeState}
            second={second}
            minute={minute}
            userAddress={state.userAddress}
            buttonProgress={buttonProgress[0]}
            withdrawDisable = {
              (buttonProgress[0] === 1 || buttonProgress[1] === 1 ||buttonProgress[2] === 1 || buttonProgress[3] === 1)
            }
          />
          <PortalWithdrawInputFieldGroup
            image="/assets/images/portal/sonicToken.svg"
            symbol="SONIC"
            description={"Max Withdraw amount per transaction"}
            maxTransaction="250,000"
            gameBalance={`${Number(state.gameBalanceForSon).toFixed(4)}`}
            walletBalance={`${Number(state.sonBalance).toFixed(4)}`}
            setVerifyCodeState={setVerifyCodeState}
            second={second}
            minute={minute}
            userAddress={state.userAddress}
            buttonProgress={buttonProgress[1]}
            withdrawDisable = {
              (buttonProgress[0] === 1 || buttonProgress[1] === 1 ||buttonProgress[2] === 1 || buttonProgress[3] === 1)
            }
          />
          <PortalWithdrawInputFieldGroup
            image="/assets/images/portal/arcadeToken.svg"
            symbol="ARCDN"
            description={"Max Withdraw amount per transaction"}
            maxTransaction="10,000"
            gameBalance={`${Number(state.gameBalanceForArc).toFixed(4)}`}
            walletBalance={`${Number(state.arcBalance).toFixed(4)}`}
            setVerifyCodeState={setVerifyCodeState}
            second={second}
            minute={minute}
            buttonProgress={buttonProgress[2]}
            withdrawDisable = {
              (buttonProgress[0] === 1 || buttonProgress[1] === 1 ||buttonProgress[2] === 1 || buttonProgress[3] === 1)
            }
          />
          <PortalWithdrawInputFieldGroup
            image="/assets/images/portal/harmonyLogo.svg"
            symbol="ONE"
            description={"Max Withdraw amount per transaction"}
            maxTransaction="25,000"
            gameBalance={`${Number(state.gameBalanceForOne).toFixed(4)}`}
            walletBalance={`${Number(state.balance).toFixed(4)}`}
            setVerifyCodeState={setVerifyCodeState}
            second={second}
            minute={minute}
            buttonProgress={buttonProgress[3]}
            withdrawDisable = {
              (buttonProgress[0] === 1 || buttonProgress[1] === 1 ||buttonProgress[2] === 1 || buttonProgress[3] === 1)
            }
          />
        </div>
      )}
      {networkData === 2 && Number(state.currentChainId) === 43114 && gameData === 1 && (
        <div>
          <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
            Withdraw
            <span className="font-orbitron text-base font-bold text-red-500">
            {(second !== 0 || minute !== 0) && (
              <span className="px-3">
                <span>{minute < 10 ? "0" + minute : minute}</span> :{" "}
                <span>{second < 10 ? "0" + second : second}</span>
              </span>
            )}
            </span>
          </h1>
          <h1 className="text-white text-sm font-bold">Service Fee</h1>
          <h1 className="text-blue-400 text-sm font-bold">Withdrawal service Fee: 0.002 AVAX</h1>
          <PortalWithdrawInputFieldGroup
            image="/assets/images/portal/avalancheLogo.svg"
            symbol="AVAX"
            description={"Max Withdraw amount per transaction"}
            maxTransaction="10,000"
            gameBalance={`${Number(state.gameBalanceForAvax).toFixed(4)}`}
            walletBalance={`${Number(state.avaxBalance).toFixed(4)}`}
            setVerifyCodeState={setVerifyCodeState}
            second={second}
            minute={minute}
            buttonProgress={buttonProgress[4]}
            withdrawDisable = {
              (buttonProgress[0] === 1 || buttonProgress[1] === 1 ||buttonProgress[2] === 1 || buttonProgress[3] === 1 || buttonProgress[4] === 1)
            }
          />
        </div>
      )}
    </div>
  );
};

export default PortalWithdraw;
