import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";
import { ethers } from "ethers";
import { useWallet } from "use-wallet";
import axios from "axios";
import { PlayFab, PlayFabClient } from "playfab-sdk";
import { setPlayFabclient } from "./PlayfabClient";
import Web3 from "web3";

import {
  provider,
  signer,
  arcContract,
  sonContract,
  mtoContract,
  portalContract,
} from "../contracts/portalContract";

const BlockchainContext = createContext();

export function useBlockchainContext() {
  return useContext(BlockchainContext);
}

function reducer(state, { type, payload }) {
  return {
    ...state,
    [type]: payload,
  };
}

const INIT_STATE = {
  avaxBalance: "0",
  balance: "0",
  arcBalance: "0",
  sonBalance: "0",
  mtoBalance: "0",
  gameBalanceForOne: "0",
  gameBalanceForArc: "0",
  gameBalanceForSon: "0",
  gameBalanceForMto: "0",
  gameBalanceForAvax: "0",
  approveBalanceForMto: "0",
  approveBalanceForSon: "0",
  approveBalanceForArc: "0",
  signer: {},
  provider: {},
  user: "meta-man",
  walletStatus: "disconnected",
  createQrCodeState: "0",
  userInfo: {},
  withDrawState: "false",
  portalTransferType: "deposit",
  transactionCallFlag: "0",
  currentChainId: "0",
  transactionRecordsNetwork: "harmony",
  depositButtonState: 0,
  withdrawButtonState: 0,
};

export default function Provider({ children }) {
  const wallet = useWallet();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    if (provider !== null) {
      const getSigner = async () => {
        if (wallet.status === "connected") {
          getBalance();
          dispatch({
            type: "signer",
            payload: signer,
          });

          dispatch({
            type: "provider",
            payload: provider,
          });

          dispatch({
            type: "user",
            payload: wallet.account,
          });
        }
      };
      getSigner();
      getUserProfile();
    }
  }, [wallet.status]);

  //setTransactionRecordNetwork for the clear
  const setTransactionRecordsNetwork = (value) => {
    dispatch({
      type: "transactionRecordsNetwork",
      payload: value
    })
  }

  const setWithDrawState = (value) => {
    dispatch({
      type: "withDrawState",
      payload: value,
    });
  };

  //setTransactionCallFalg
  const setTransactionCallFlag = (value) => {
    dispatch({
      type: "transactionCallFlag",
      payload: value,
    });
  };

  //setPortalTransferType
  const setPortalTransferType = (value) => {
    dispatch({
      type: "portalTransferType",
      payload: value,
    });
  };

  //getApproveBalanceForOne
  const getApproveBalanceForArc = async () => {
    try {
      if (wallet.status === "connected") {
        const accounts = await provider.listAccounts();
        const arcBalance_ = await arcContract.allowance(
          accounts[0],
          portalContract.address
        );
        dispatch({
          type: "approveBalanceForArc",
          payload: ethers.utils.formatEther(arcBalance_),
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  //setCurrentChainID
  const setCurrentChainId = (chainId) => {
    dispatch({
      type: "currentChainId",
      payload: chainId,
    });
  };

  //getApproveBalanceForOne
  const getApproveBalanceForMto = async () => {
    try {
      if (wallet.status === "connected") {
        const accounts = await provider.listAccounts();
        const arcBalance_ = await mtoContract.allowance(
          accounts[0],
          portalContract.address
        );
        dispatch({
          type: "approveBalanceForMto",
          payload: ethers.utils.formatEther(arcBalance_),
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  //getApproveBalanceForOne
  const getApproveBalanceForSon = async () => {
    try {
      if (wallet.status === "connected") {
        const accounts = await provider.listAccounts();
        const arcBalance_ = await sonContract.allowance(
          accounts[0],
          portalContract.address
        );
        dispatch({
          type: "approveBalanceForSon",
          payload: ethers.utils.formatEther(arcBalance_),
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  //getWalletBalance
  const getBalance = async () => {
    const web3 = new Web3(window.ethereum);
    
    try {
      const currentChainId = await web3.eth.net.getId();
      if (wallet.status === "connected") {
        const accounts = await provider.listAccounts();
        dispatch({
          type: "userAddress",
          payload: accounts[0],
        });
        if (Number(currentChainId) === 1666600000) {
          const balance_ = await provider.getBalance(accounts[0]);
          const arcBalance_ = await arcContract.balanceOf(accounts[0]);
          const sonBalance_ = await sonContract.balanceOf(accounts[0]);
          const mtoBalance_ = await mtoContract.balanceOf(accounts[0]);
          dispatch({
            type: "balance",
            payload: ethers.utils.formatEther(balance_),
          });
          dispatch({
            type: "arcBalance",
            payload: ethers.utils.formatEther(arcBalance_),
          });
          dispatch({
            type: "sonBalance",
            payload: ethers.utils.formatEther(sonBalance_),
          });
          dispatch({
            type: "mtoBalance",
            payload: ethers.utils.formatEther(mtoBalance_),
          });
          dispatch({
            type: "avaxBalance",
            payload: "0",
          });
        } else if (Number(currentChainId) === 43114) {
          const balance_ = await provider.getBalance(accounts[0]);
          dispatch({
            type: "avaxBalance",
            payload: ethers.utils.formatEther(balance_),
          });
          dispatch({
            type: "balance",
            payload: "0",
          });
          dispatch({
            type: "arcBalance",
            payload: "0",
          });
          dispatch({
            type: "sonBalance",
            payload: "0",
          });
          dispatch({
            type: "mtoBalance",
            payload: "0",
          });
          dispatch({
            type: "approveBalanceForMto",
            payload: "0",
          });
          dispatch({
            type: "approveBalanceForArc",
            payload: "0",
          });
          dispatch({
            type: "approveBalanceForSon",
            payload: "0",
          });
        }
      }
    } catch (err) {
      return 0;
    }
  };

  //getGameBalanceForOne
  const getGameBalance = async () => {
    try {
      if (wallet.status === "connected") {
        PlayFabClient.ExecuteCloudScript(
          { FunctionName: "GetVC" },
          async (err, result) => {
            if (result !== "") {
              var tokens = result.data.FunctionResult;
              tokens = JSON.parse(tokens);
              var oneToken = JSON.parse(tokens.ON);
              var arcToken = JSON.parse(tokens.AR);
              var sonToken = JSON.parse(tokens.SO);
              var mtoToken = JSON.parse(tokens.MT);
              var avaxToken = JSON.parse(tokens.AV);
              dispatch({
                type: "gameBalanceForOne",
                payload: oneToken,
              });
              dispatch({
                type: "gameBalanceForArc",
                payload: arcToken,
              });
              dispatch({
                type: "gameBalanceForSon",
                payload: sonToken,
              });
              dispatch({
                type: "gameBalanceForMto",
                payload: mtoToken,
              });
              dispatch({
                type: "gameBalanceForAvax",
                payload: avaxToken,
              });
            } else if (err !== "") {
              console.log(err);
            }
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getUserProfile = async () => {
    try {
      if (wallet.status === "connected") {
        const accounts = await provider.listAccounts();
        axios
          .post("/api/users/", {
            userAddress: accounts[0],
          })
          .then((res) => {
            dispatch({
              type: "userInfo",
              payload: res.data,
            });
            if (
              res.data.playFabId !== undefined &&
              res.data.playFabId !== null &&
              res.data.playFabId !== ""
            ) {
              LoginPlayFabId();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      return 0;
    }
  };

  const LoginPlayFabId = () => {
    PlayFab.settings.titleId = "1C79C";
    const loginRequest = {
      TitleId: PlayFab.settings.titleId,
      CustomId: wallet.account,
      CreateAccount: true,
    };
    PlayFabClient.LoginWithCustomID(loginRequest, async (err, result) => {
      if (result !== {}) {
        await setPlayFabclient(result);
        await addPlayFabId(result.data.PlayFabId);
      } else if (err !== {}) {
        console.log(err);
      }
    });
  };

  const addPlayFabId = (playFabId) => {
    try {
      if (wallet.status === "connected") {
        axios
          .post("/api/users/addPlayFabId", {
            userAddress: wallet.account,
            playFabId: playFabId,
          })
          .then((res) => {
            dispatch({
              type: "userInfo",
              payload: res.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      return 0;
    }
  };

  const getUserInfo = async () => {
    try {
      if (wallet.status === "connected") {
        if (wallet.account !== undefined) {
          axios
            .post("/api/users/", {
              userAddress: wallet.account,
            })
            .then((res) => {
              dispatch({
                type: "userInfo",
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else return;
      }
    } catch (err) {
      dispatch({
        type: "userInfo",
        payload: {},
      });
      return 0;
    }
  };

  const setCreateQrCodeState = (value) => {
    dispatch({
      type: "createQrCodeState",
      payload: value,
    });
  };

  const setDepositButtonState = (value) => {
    dispatch({
      type: "depositButtonState",
      payload: value,
    })
  }

  const setWithdrawButtonState = (value) => {
    dispatch({
      type: "withdrawButtonState",
      payload: value,
    })
  }

  const setWalletStatus = (value) => {
    dispatch({
      type: "walletStatus",
      payload: value
    })
  }

  return (
    <BlockchainContext.Provider
      value={useMemo(
        () => [
          state,
          {
            getBalance,
            getUserProfile,
            addPlayFabId,
            getUserInfo,
            getGameBalance,
            LoginPlayFabId,
            getApproveBalanceForArc,
            getApproveBalanceForMto,
            getApproveBalanceForSon,
            setCreateQrCodeState,
            setWithDrawState,
            setPortalTransferType,
            setTransactionCallFlag,
            setCurrentChainId,
            setTransactionRecordsNetwork,
            setDepositButtonState,
            setWithdrawButtonState,
            setWalletStatus
          },
        ],
        [state]
      )}
    >
      {children}
    </BlockchainContext.Provider>
  );
}
