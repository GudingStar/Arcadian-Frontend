import { React, useEffect, useState } from "react";
import Select from "react-select";
import Gamedata from "../../common/portalData/gameData";
import Networkdata from "../../common/portalData/networkData";
import CustomStyles from "../../common/portalData/customStyle";
import PortalBalance from "./portalBalance";
import PortalDeposit from "./portalDeposit";
import PortalWithdraw from "./portalWithdraw";
import { useBlockchainContext } from "../../context";
import { useWallet } from "use-wallet";
import { NotificationManager } from "react-notifications";
import axios from "axios";

const Portal = ({ setNavbarSelect, setMenuSelect }) => {
  const wallet = useWallet();
  const [
    state,
    {
      getGameBalance,
      getBalance,
      getApproveBalanceForArc,
      getApproveBalanceForMto,
      getApproveBalanceForSon,
      getUserInfo,
      LoginPlayFabId,
    },
  ] = useBlockchainContext();

  useEffect(() => {
    //checkPlayFab();
    const delayDebounceFn = setTimeout(() => {
      checkPlayFab();
    }, 3000);
    return () => clearTimeout(delayDebounceFn);
  }, [state.userInfo.playFabId, state.currentChainId]);

  //PlayFabID check
  const checkPlayFab = async () => {
    if (wallet.status === "connected") {
      await getUserInfo();
      if (
        state.userInfo.playFabId === null ||
        state.userInfo.playFabId === undefined ||
        state.userInfo.playFabId === ""
      ) {
      } else {
        if (Number(state.currentChainId) === 1666600000) {
          getApproveBalanceForArc();
          getApproveBalanceForMto();
          getApproveBalanceForSon();
        }
        getGameBalance();
      }
    }
  };

  const [create8BallIdState, setCreate8BallIdState] = useState(0);

  const [buttonProgress, setButtonProgress] = useState([0, 0, 0, 0, 0]);

  const [depositButtonProgress, setDepositButtonProgress] = useState([0, 0, 0, 0, 0]);

  const create8BallId = async () => {
    if (wallet.status === "connected") {
      if (
        state.userInfo.playFabId === undefined ||
        state.userInfo.playFabId === "" ||
        state.userInfo.playFabId === null
      ) {
        await LoginPlayFabId();
        //checkPlayFab();
        const delayDebounceFn = setTimeout(() => {
          getUserInfo();
          setCreate8BallIdState(1);
        }, 1000);
        return () => clearTimeout(delayDebounceFn);
      }
    } else NotificationManager.warning("Please connect wallet", "", 3000);
  };

  useEffect(() => {
    getUserInfo();
  }, [create8BallIdState]);

  const getProgess = async () => {
    if(state.userAddress !== undefined){
      getBalance();
      getGameBalance();
      let _buttonProgress = [0, 0, 0, 0, 0];
      await axios
        .post("/api/transaction/getProgress", { userAddress: state.userAddress })
        .then(async (res) => {
          if(res.data.length > 0)
          {
            let symbol = res.data[res.data.length - 1].symbol;
            if(res.data[res.data.length - 1].net === "harmony"){
              if (
                res.data[res.data.length - 1].progress === "success" &&
                res.data[res.data.length - 1].display === 0
              ) {
                _buttonProgress = [
                  symbol === "MTO" ? 2 : 0,
                  symbol === "SON" ? 2 : 0,
                  symbol === "ARC" ? 2 : 0,
                  symbol === "ONE" ? 2 : 0,
                  symbol === "AVAX" ? 2 : 0,
                ];  
                NotificationManager.success("Withdrawing success", "");
                setButtonProgress(_buttonProgress);
                setTimeout(() => {
                  _buttonProgress = [0, 0, 0, 0, 0];
                  setButtonProgress(_buttonProgress);
                }, 10000);
                //set progress display
                await axios
                  .post("/api/transaction/setProgress", {
                    userAddress: state.userAddress,
                  })
                  .then((res) => {
                  })
                  .catch((err) => {
                  });
              } else if (res.data[res.data.length - 1].progress === "progress") {
                _buttonProgress = [
                  symbol === "MTO" ? 1 : 0,
                  symbol === "SON" ? 1 : 0,
                  symbol === "ARC" ? 1 : 0,
                  symbol === "ONE" ? 1 : 0,
                  symbol === "AVAX" ? 1 : 0,
                ];
                setButtonProgress(_buttonProgress);
              } else if (
                res.data[res.data.length - 1].progress === "fail" &&
                res.data[res.data.length - 1].display === 0
              ) {
                _buttonProgress = [
                  symbol === "MTO" ? 3 : 0,
                  symbol === "SON" ? 3 : 0,
                  symbol === "ARC" ? 3 : 0,
                  symbol === "ONE" ? 3 : 0,
                  symbol === "AVAX" ? 3 : 0,
                ];
                setButtonProgress(_buttonProgress);
                NotificationManager.success("Withdrawing fail", "");
                setTimeout(() => {
                  _buttonProgress = [0, 0, 0, 0, 0];
                  setButtonProgress(_buttonProgress);
                }, 10000);
                await axios
                  .post("/api/transaction/setProgress", {
                    userAddress: state.userAddress,
                  })
                  .then((res) => {
                  })
                  .catch((err) => {
                    setTimeout(getProgess, 5000);
                  });
              }
            } else if(res.data[res.data.length - 1].net === "avalanche"){
              if (
                res.data[res.data.length - 1].progress === "success" &&
                res.data[res.data.length - 1].display === 0
              ) {
                _buttonProgress = [
                  symbol === "MTO" ? 2 : 0,
                  symbol === "SON" ? 2 : 0,
                  symbol === "ARC" ? 2 : 0,
                  symbol === "ONE" ? 2 : 0,
                  symbol === "AVAX" ? 2 : 0,
                ];  
                NotificationManager.success("Withdrawing success", "");
                setButtonProgress(_buttonProgress);
                setTimeout(() => {
                  _buttonProgress = [0, 0, 0, 0, 0];
                  setButtonProgress(_buttonProgress);
                }, 10000);
                //set progress display
                await axios
                  .post("/api/transaction/setProgress", {
                    userAddress: state.userAddress,
                  })
                  .then((res) => {
                  })
                  .catch((err) => {
                  });
              } else if (res.data[res.data.length - 1].progress === "progress") {
                _buttonProgress = [
                  symbol === "MTO" ? 1 : 0,
                  symbol === "SON" ? 1 : 0,
                  symbol === "ARC" ? 1 : 0,
                  symbol === "ONE" ? 1 : 0,
                  symbol === "AVAX" ? 1 : 0,
                ];
                setButtonProgress(_buttonProgress);
              } else if (
                res.data[res.data.length - 1].progress === "fail" &&
                res.data[res.data.length - 1].display === 0
              ) {
                _buttonProgress = [
                  symbol === "MTO" ? 3 : 0,
                  symbol === "SON" ? 3 : 0,
                  symbol === "ARC" ? 3 : 0,
                  symbol === "ONE" ? 3 : 0,
                  symbol === "AVAX" ? 3 : 0,
                ];
                setButtonProgress(_buttonProgress);
                NotificationManager.success("Withdrawing fail", "");
                setTimeout(() => {
                  _buttonProgress = [0, 0, 0, 0, 0];
                  setButtonProgress(_buttonProgress);
                }, 10000);
                await axios
                  .post("/api/transaction/setProgress", {
                    userAddress: state.userAddress,
                  })
                  .then((res) => {
                  })
                  .catch((err) => {
                    setTimeout(getProgess, 5000);
                  });
              }
            }
          } 
        })
        .catch((err) => {
        });
      }
      setTimeout(getProgess, 5000);
  };

  const getDepositProgress = async () => {
    if(state.userAddress !== undefined){
      getBalance();
      getGameBalance();
      let _buttonProgress = [0, 0, 0, 0, 0];
      await axios
        .post("/api/transaction/getDepositProgress",{ userAddress: state.userAddress })
        .then(async (res) => {
          if(res.data.length > 0){
            let symbol = res.data[res.data.length - 1].symbol;
            if(res.data[res.data.length - 1].net === "harmony"){
              if (
                res.data[res.data.length - 1].progress === "success" &&
                res.data[res.data.length - 1].display === 0
              ) {
                _buttonProgress = [
                  symbol === "MTO" ? 2 : 0,
                  symbol === "SON" ? 2 : 0,
                  symbol === "ARC" ? 2 : 0,
                  symbol === "ONE" ? 2 : 0,
                  symbol === "AVAX" ? 2 : 0,
                ];  
                NotificationManager.success("Deposit success", "");
                setDepositButtonProgress(_buttonProgress);
                setTimeout(() => {
                  _buttonProgress = [0, 0, 0, 0, 0];
                  setDepositButtonProgress(_buttonProgress);
                }, 10000);
                //set progress display
                await axios
                  .post("/api/transaction/setDepositProgress", {
                    userAddress: state.userAddress,
                  })
                  .then((res) => {
                  })
                  .catch((err) => {
                  });
              } else if (res.data[res.data.length - 1].progress === "progress") {
                _buttonProgress = [
                  symbol === "MTO" ? 1 : 0,
                  symbol === "SON" ? 1 : 0,
                  symbol === "ARC" ? 1 : 0,
                  symbol === "ONE" ? 1 : 0,
                  symbol === "AVAX" ? 1 : 0,
                ];
                setDepositButtonProgress(_buttonProgress);
              } else if (
                res.data[res.data.length - 1].progress === "fail" &&
                res.data[res.data.length - 1].display === 0
              ) {
                _buttonProgress = [
                  symbol === "MTO" ? 3 : 0,
                  symbol === "SON" ? 3 : 0,
                  symbol === "ARC" ? 3 : 0,
                  symbol === "ONE" ? 3 : 0,
                  symbol === "AVAX" ? 3 : 0,
                ];
                setDepositButtonProgress(_buttonProgress);
                NotificationManager.success("Withdrawing fail", "");
                setTimeout(() => {
                  _buttonProgress = [0, 0, 0, 0, 0];
                  setDepositButtonProgress(_buttonProgress);
                }, 10000);
                await axios
                  .post("/api/transaction/setDepositProgress", {
                    userAddress: state.userAddress,
                  })
                  .then((res) => {
                  })
                  .catch((err) => {
                    setTimeout(getProgess, 5000);
                  });
              }
            } else if(res.data[res.data.length - 1].net === "avalanche"){
              if (
                res.data[res.data.length - 1].progress === "success" &&
                res.data[res.data.length - 1].display === 0
              ) {
                _buttonProgress = [
                  symbol === "MTO" ? 2 : 0,
                  symbol === "SON" ? 2 : 0,
                  symbol === "ARC" ? 2 : 0,
                  symbol === "ONE" ? 2 : 0,
                  symbol === "AVAX" ? 2 : 0,
                ];  
                NotificationManager.success("Withdrawing success", "");
                setDepositButtonProgress(_buttonProgress);
                setTimeout(() => {
                  _buttonProgress = [0, 0, 0, 0, 0];
                  setButtonProgress(_buttonProgress);
                }, 10000);
                //set progress display
                await axios
                  .post("/api/transaction/setDepositProgress", {
                    userAddress: state.userAddress,
                  })
                  .then((res) => {
                  })
                  .catch((err) => {
                  });
              } else if (res.data[res.data.length - 1].progress === "progress") {
                _buttonProgress = [
                  symbol === "MTO" ? 1 : 0,
                  symbol === "SON" ? 1 : 0,
                  symbol === "ARC" ? 1 : 0,
                  symbol === "ONE" ? 1 : 0,
                  symbol === "AVAX" ? 1 : 0,
                ];
                setDepositButtonProgress(_buttonProgress);
              } else if (
                res.data[res.data.length - 1].progress === "fail" &&
                res.data[res.data.length - 1].display === 0
              ) {
                _buttonProgress = [
                  symbol === "MTO" ? 3 : 0,
                  symbol === "SON" ? 3 : 0,
                  symbol === "ARC" ? 3 : 0,
                  symbol === "ONE" ? 3 : 0,
                  symbol === "AVAX" ? 3 : 0,
                ];
                setDepositButtonProgress(_buttonProgress);
                NotificationManager.success("Withdrawing fail", "");
                setTimeout(() => {
                  _buttonProgress = [0, 0, 0, 0, 0];
                  setDepositButtonProgress(_buttonProgress);
                }, 10000);
                await axios
                  .post("/api/transaction/setDepositProgress", {
                    userAddress: state.userAddress,
                  })
                  .then((res) => {
                  })
                  .catch((err) => {
                    setTimeout(getDepositProgress, 5000);
                  });
              }
            }
          }
        })
        .catch(err => {
        })
    }
    setTimeout(getDepositProgress, 5000);
  }

  useEffect(() => {
    setNavbarSelect("");
    setMenuSelect("portal");
  }, []);

  //SelectedGameOption
  const [selectedGameOption, setSelectedGameOption] = useState(1);

  //select Network option
  const [selectedNetworkOption, setSelectedNetworkOption] = useState(1);

  useEffect(() => {
    if (Number(state.currentChainId) === 1666600000) {
      setSelectedNetworkOption(1);
    } else if (Number(state.currentChainId) === 43114) {
      setSelectedNetworkOption(2);
    }
  }, [state.currentChainId]);

  //set NetworkType
  const handleNetworkChange = (e) => {
    setSelectedNetworkOption(e.value);
  };

  //set GameType
  const handleGameChange = (e) => {
    setSelectedGameOption(e.value);
  };

  //agreeClick
  const agreeClick = () => {
    document.getElementById("agree2FA").style.display = "none";
    setAgreeState(1);
  };

  //transferType
  const [transferType, setTransferType] = useState("deposit");

  //agreeState
  const [agreeState, setAgreeState] = useState(0);

  const onSwitchNetwork = () => {};

  useEffect(() => {
    getProgess();
    getDepositProgress();
  }, [transferType, state.userAddress]);

  const toggleClass = " transform translate-x-5";

  return (
    <div className="mx-auto mt-10 pb-10">
      <h1 className="font-orbitron text-center text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
        Arcadian Portal
      </h1>
      <img
        src="/assets/images/portal/arcadian.svg"
        className="m-auto"
        alt="arcadian"
      ></img>
      {state.walletStatus === "connected" && (
        <div>
          {state.userInfo.qrCheck === 0 && (
            <div className="mt-5" id="agree2FA">
              <div className="flex justify-center">
                <img
                  src="/assets/images/portal/warning.svg"
                  className="xl:w-80 lg:w-80 md:w-80 w-52"
                  alt="warning"
                ></img>
              </div>
              <div className="flex justify-center mt-5">
                <h1 className="flex font-normal text-sm text-gray-300 w-80">
                  This Portal is not intended to be used as a wallet to store
                  your assets long term.
                </h1>
              </div>
              <div className="flex justify-center">
                <h1 className="flex font-normal text-sm text-gray-300 w-80">
                  Please withdraw your tokens on a regular basis
                </h1>
              </div>
              <div className="flex justify-center">
                <h1 className="flex font-normal text-sm text-gray-300 w-80">
                  Game accounts that are inactive for more than 6 months will be
                  removed.
                </h1>
              </div>
              <div className="flex justify-center">
                <h1 className="flex font-normal text-sm text-gray-300 w-80">
                  If you lose access to your wallet we cannot recover your
                  tokens.
                </h1>
              </div>
              <div className="flex justify-center">
                <h1 className="flex font-normal text-sm text-red-900 w-80">
                  DO NOT lose your 2FA Setup KEY
                </h1>
              </div>
              <div className="flex justify-center">
                <h1 className="flex font-normal text-sm text-gray-300 w-80">
                  We cannot reset or recover your 2FA KEY.
                  <br />
                  If you lose your 2FA KEY you will have to make a new account.
                </h1>
              </div>
              <div className="flex justify-center">
                <h1 className="flex font-normal text-sm text-gray-300 w-80">
                  We do not facilitate the direct transfer of funds between
                  users.
                </h1>
              </div>

              <div className="flex justify-center mt-5">
                <button
                  onClick={agreeClick}
                  className="xl:w-80 lg:w-80 md:w-80 w-52 bg-purple-900 hover:bg-purple-600 text-white font-bold text-sm py-2 rounded-xl"
                >
                  I AGREE,CONTINUE
                </button>
              </div>
            </div>
          )}

          {(state.userInfo.qrCheck === 1 || agreeState === 1) && (
            <div id="portalMain">
              {/* selectNetwork and selectGame */}
              <div>
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mt-5">
                  <div>
                    <div className="relative">
                      <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
                        Select Network
                      </h1>
                      <Select
                        value={Networkdata.find((op) => {
                          return op.value === selectedNetworkOption;
                        })}
                        options={Networkdata}
                        onChange={handleNetworkChange}
                        getOptionLabel={(e) => (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {e.icon}
                            <span style={{ marginLeft: 5, color: "#ACACAC" }}>
                              {e.text}
                            </span>
                          </div>
                        )}
                        styles={CustomStyles}
                      />
                      <a
                        className="absolute right-0 -bottom-7 cursor-pointer no-underline font-bold text-blue-700"
                        onClick={onSwitchNetwork}
                      >
                        Switch Network
                      </a>
                    </div>
                    {selectedGameOption === 1 &&
                      state.userInfo.playFabId === undefined && (
                        <h1 className="text-red-900 text-sm mt-5">
                          You must create a game account before you can deposit
                          and withdraw tokens.
                          <br />
                          Select a game below.
                        </h1>
                      )}
                    <div className="mt-5">
                      <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
                        Select Game
                      </h1>
                      <Select
                        defaultValue={Gamedata.find((op) => {
                          return op.value === 1;
                        })}
                        options={Gamedata}
                        onChange={handleGameChange}
                        getOptionLabel={(e) => (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {e.icon}
                            <span style={{ marginLeft: 5, color: "#ACACAC" }}>
                              {e.text}
                            </span>
                          </div>
                        )}
                        styles={CustomStyles}
                      />
                    </div>
                  </div>
                  <div className="xl:text-left lg:text-left md:text-left sm:text-center text-center">
                    <h1 className="text-sm text-gray-200 mt-10">
                      Use this portal to Deposit and Withdraw game coins.
                      <br />
                      There is a maximum withdraw limit of 5000 Tokens per day.
                      <br />
                      Game coins will automatically appear in your Game Wallet
                      once deposited.
                      <br />
                      The Ratio is set at 1:1
                      <br />
                    </h1>
                  </div>
                </div>
              </div>
              {selectedGameOption === 1 &&
              state.userInfo.playFabId === undefined &&
              create8BallIdState === 0 ? (
                <div className="flex justify-center mt-5">
                  <button
                    onClick={create8BallId}
                    className="bg-purple-900 delay-750 hover:bg-purple-600 text-white text-sm font-bold xl:w-80 lg:w-80 md:w-80 w-52 p-3 border-purple-900 rounded-xl"
                  >
                    CREATE 8BALL ID
                  </button>
                </div>
              ) : (
                <div>
                  {/*end selectNetwork and selectGame */}
                  <PortalBalance
                    networkData={selectedNetworkOption}
                    gameData={selectedGameOption}
                    state={state}
                  />
                  {/* toggleButton */}
                  {((selectedNetworkOption === 1 &&
                    Number(state.currentChainId) === 1666600000 &&
                    selectedGameOption === 1) ||
                    (selectedNetworkOption === 2 &&
                      Number(state.currentChainId) === 43114 &&
                      selectedGameOption === 1)) && (
                    <div className="relative">
                      <div className="xl:absolute lg:absolute  top-0 right-0">
                        <div className="flex mt-5">
                          <h1 className="text-gray-300 text-sm my-0">
                            Deposit
                          </h1>
                          <div
                            className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
                              transferType === "deposit"
                                ? "bg-blue-600"
                                : "bg-purple-700"
                            } rounded-full p-1 cursor-pointer `}
                            onClick={() => {
                              if (transferType === "deposit")
                                setTransferType("withdraw");
                              else setTransferType("deposit");
                            }}
                          >
                            {/* Switch */}
                            <div
                              className={
                                "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                                (transferType === "deposit"
                                  ? null
                                  : toggleClass)
                              }
                            ></div>
                          </div>
                          <h1 className="text-gray-300 text-sm my-0">
                            Withdraw
                          </h1>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* end toggleButton */}
                  <div className="mt-5">
                    {transferType === "deposit" && (
                      <PortalDeposit
                        networkData={selectedNetworkOption}
                        gameData={selectedGameOption}
                        buttonProgress={depositButtonProgress}
                      />
                    )}
                    {transferType === "withdraw" && (
                      <PortalWithdraw
                        networkData={selectedNetworkOption}
                        gameData={selectedGameOption}
                        buttonProgress={buttonProgress}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Portal;
