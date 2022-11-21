import { React, useEffect } from "react";
import Hamburger from "hamburger-react";
import { useWallet } from "use-wallet";
import { Link } from "react-router-dom";
import { useBlockchainContext } from "../context";
import { ethers } from "ethers";
import { NotificationManager } from "react-notifications";
import Web3 from "web3";
import { useState } from "react";

const Navbar = ({ navbarSelect,menuSelect }) => {
  const wallet = useWallet();
  const [
    state,
    { getBalance, getUserInfo, setCurrentChainId, setWalletStatus },
  ] = useBlockchainContext();
  const web3 = new Web3(window.ethereum);
  const [networkState, setNetworkState] = useState("harmony");
  const [onToggle,setOnToggle] = useState(false);

  useEffect(() => {
    if(onToggle){
      document.getElementById("popMenu").style.display = "block";
    } else {
      document.getElementById("popMenu").style.display = "none";
    }
  },[onToggle])

  useEffect(() => {
    if(document.getElementById("navbottom").style.display === "none")
      document.getElementById("popMenu").style.display = "none";

  },[])

  const getNetworkId = async () => {
    try{
      const currentChainId = await web3.eth.net.getId();
      return currentChainId;
    } catch(err){
      NotificationManager.error("please install metamask!");
    }
  };

  useEffect(() => {
    checkConnection();
    getUserInfo();
  }, [networkState]);

  useEffect(() => {
    getBalance();
    if (Number(state.currentChainId) === 1666600000) {
      setNetworkState("harmony");
    } else if (Number(state.currentChainId) === 43114) {
      setNetworkState("avalanche");
    }
  }, [state.currentChainId]);

  useEffect(() => {
    // localStorage.setItem("walletStatus","connected");
    setWalletStatus(localStorage.getItem("walletStatus"));
  }, [localStorage.getItem("walletStatus")]);

  useEffect(() => {}, [state.userInfo]);

  const checkConnection = async () => {
    let { ethereum } = window;
    if (ethereum !== undefined) {
      const chainId = await ethereum.request({ method: "eth_chainId" });
      setCurrentChainId(chainId);
      if (Number(chainId) !== 1666600000 && Number(chainId) !== 43114) {
        NotificationManager.error("Incorrect chainID", "", 2000);
      } 
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (
        accounts.length !== 0 &&
        (Number(chainId) === 1666600000 || Number(chainId) === 43114)
      ) {
        if (Number(chainId) === 1666600000) {
          setNetworkState("harmony");
        } else if (Number(chainId) === 43114) {
          setNetworkState("avalanche");
        }
        if (localStorage.getItem("walletStatus") === "connected") onConnect();
      } 
    }
  };

  const onConnect = async () => {
    let { ethereum } = window;
    if (ethereum !== undefined) {
      if (wallet.status !== "connected") {
        wallet.connect().catch((err) => {
          NotificationManager.error("please check metamask!");
        });
        localStorage.setItem("walletStatus", "connected");
      }
    } else {
      NotificationManager.error("please install metamask!");
    }
  };

  const disconnect = () => {
    if (wallet.status === "connected") {
      wallet.reset();
      document.getElementById("netWorkSelect").style.display = "none";
      localStorage.setItem("walletStatus", "disconnected");
    }
  };

  const switchNetwork = async (chainId) => {
    let currentChainId;
    let { ethereum } = window;
    document.getElementById("netWorkSelect").style.display = "none";
    if (wallet.status === "connected") {
      currentChainId = await getNetworkId();
      setCurrentChainId(chainId);
      if (currentChainId !== chainId) {
        try {
          await web3.currentProvider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: Web3.utils.toHex(chainId) }],
          });
          getBalance();
          localStorage.setItem("walletStatus", "connected");
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            console.error("add this chain id");
            if (chainId === 43114) {
              await web3.currentProvider
                .request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: `${Web3.utils.toHex(43114)}`,
                      chainName: "Avalanche Mainnet C-Chain",
                      nativeCurrency: {
                        name: "Avalanche Coin",
                        symbol: "AVAX",
                        decimals: 18,
                      },
                      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                      blockExplorerUrls: ["https://snowtrace.io/"],
                    },
                  ],
                })
                .catch((error) => {
                  console.log(error);
                });
              getBalance();
              localStorage.setItem("walletStatus", "connected");
            } else if (chainId === 1666600000) {
              await web3.currentProvider
                .request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: `${Web3.utils.toHex(1666600000)}`,
                      chainName: "Harmony Mainnet",
                      nativeCurrency: {
                        name: "Harmony Coin",
                        symbol: "ONE",
                        decimals: 18,
                      },
                      rpcUrls: ["https://api.harmony.one"],
                      blockExplorerUrls: ["https://explorer.harmony.one"],
                    },
                  ],
                })
                .catch((error) => {
                  console.log(error);
                });
              getBalance();
              localStorage.setItem("walletStatus", "connected");
            }
          }
        }
      }
    } else {
      console.log("disconnected");
      try {
        currentChainId = await getNetworkId();
        console.log(currentChainId);
        if (ethereum !== undefined) {
          try {
            await web3.currentProvider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: Web3.utils.toHex(chainId) }],
            });
            getBalance();
            setCurrentChainId(chainId);
            wallet.connect().catch((err) => {
              NotificationManager.error("please check metamask!");
            });
            localStorage.setItem("walletStatus", "connected");
          } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
              console.error("add this chain id");
              if (chainId === 43114) {
                await web3.currentProvider
                  .request({
                    method: "wallet_addEthereumChain",
                    params: [
                      {
                        chainId: `${Web3.utils.toHex(43114)}`,
                        chainName: "Avalanche Mainnet C-Chain",
                        nativeCurrency: {
                          name: "Avalanche Coin",
                          symbol: "AVAX",
                          decimals: 18,
                        },
                        rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                        blockExplorerUrls: ["https://snowtrace.io/"],
                      },
                    ],
                  })
                  .catch((error) => {
                    NotificationManager.error("please check metamask!");
                    return;
                  });
                getBalance();
                setCurrentChainId(chainId);
                localStorage.setItem("walletStatus", "connected");
              } else if (chainId === 1666600000) {
                await web3.currentProvider
                  .request({
                    method: "wallet_addEthereumChain",
                    params: [
                      {
                        chainId: `${Web3.utils.toHex(1666600000)}`,
                        chainName: "Harmony Mainnet",
                        nativeCurrency: {
                          name: "Harmony Coin",
                          symbol: "ONE",
                          decimals: 18,
                        },
                        rpcUrls: ["https://api.harmony.one"],
                        blockExplorerUrls: ["https://explorer.harmony.one"],
                      },
                    ],
                  })
                  .catch((error) => {
                    console.log(error);
                    NotificationManager.error("please check metamask!");
                    return;
                  });
                getBalance();
                setCurrentChainId(chainId);
                localStorage.setItem("walletStatus", "connected");
              }
            }
          }
        } else {
          NotificationManager.error("please install metamask!");
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (chainId === 1666600000) {
      setNetworkState("harmony");
    } else if (chainId === 43114) {
      console.log("Avalanche");
      setNetworkState("avalanche");
    }
  };

  return (
    <div className="border-b-2 border-light-gray top-0 left-0 right-0 relative">
      <div className="flex justify-between px-2 py-1">
        <div>
          <img
            src="/assets/images/navbar/logo.png"
            className="w-16 xl:min-w-[4rem] xl:min-w-[4rem] lg:min-w-[4rem] md:min-w-[4rem] sm:min-w-[2rem]"
            alt="logo"
          />
        </div>
        <div className="xl:block lg:block hidden py-auto">
          <div className="mx-auto my-3 flex justify-center items-center text-white text-sm xl:pr-14 lg:pr-8 md:pr-4 pr-2  xl:flex lg:flex md:flex hidden navbar">
            <Link
              to="/"
              className={`xl:px-8 lg:px-6 md:px-2 sm:px-2 xl:px-1  ${
                navbarSelect === "home" ? "text-primary-pink" : "text-white"
              } no-underline`}
            >
              Home
            </Link>
            <Link
              to="/"
              className={`xl:px-8 lg:px-6 md:px-2 sm:px-2 xl:px-1 no-underline ${
                navbarSelect === "about" ? "text-primary-pink" : "text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/affiliates"
              className={`xl:px-8 lg:px-6 md:px-2 sm:px-2 xl:px-1 no-underline ${
                navbarSelect === "affiliates"
                  ? "text-primary-pink"
                  : "text-white"
              }`}
            >
              Affiliates
            </Link>
            <Link
              to="/"
              className={`xl:px-8 lg:px-6 md:px-2 sm:px-2 xl:px-1 no-underline ${
                navbarSelect === "documentations"
                  ? "text-primary-pink"
                  : "text-white"
              }`}
            >
              Documentations
            </Link>
            <Link
              to="/contact"
              className={`xl:px-8 lg:px-6 md:px-2 sm:px-8 px-2 no-underline ${
                navbarSelect === "contact" ? "text-primary-pink" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="xl:hidden lg:hidden">
            <div className="flex justify-center items-center text-white text-sm xl:pr-14 lg:pr-8 md:pr-4 pr-2  xl:flex lg:flex md:flex hidden navbar">
              <Link
                to="/"
                className={`xl:px-8 lg:px-6 md:px-2 sm:px-2 xl:px-1  ${
                  navbarSelect === "home" ? "text-primary-pink" : "text-white"
                } no-underline`}
              >
                Home
              </Link>
              <Link
                to="/"
                className={`xl:px-8 lg:px-6 md:px-2 sm:px-2 xl:px-1 no-underline ${
                  navbarSelect === "about" ? "text-primary-pink" : "text-white"
                }`}
              >
                About
              </Link>
              <Link
                to="/affiliates"
                className={`xl:px-8 lg:px-6 md:px-2 sm:px-2 xl:px-1 no-underline ${
                  navbarSelect === "affiliates"
                    ? "text-primary-pink"
                    : "text-white"
                }`}
              >
                Affiliates
              </Link>
              <Link
                to="/"
                className={`xl:px-8 lg:px-6 md:px-2 sm:px-2 xl:px-1 no-underline ${
                  navbarSelect === "documentations"
                    ? "text-primary-pink"
                    : "text-white"
                }`}
              >
                Documentations
              </Link>
              <Link
                to="/contact"
                className={`xl:px-8 lg:px-6 md:px-2 sm:px-8 px-2 no-underline ${
                  navbarSelect === "contact"
                    ? "text-primary-pink"
                    : "text-white"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex">
            {state.walletStatus === "connected" && wallet.status === "connected" && (
              <Link
                to="/profile/accountSettings/editProfile"
                className="cursor-pointer"
              >
                <div className="flex">
                  <img
                    src={
                      state.userInfo.avatar === undefined
                        ? "/assets/images/navbar/user.svg"
                        : state.userInfo.avatar
                    }
                    className="w-9 xl:min-w-[2.25rem] lg:min-w-[2.25rem] md:min-w-[2.25rem] min-w-[1.5rem] xl:mx-2 lg:mx-2 md:mx-2 sm:mx-2 mx-1 rounded-full"
                    alt="user"
                  />
                  <p className="flex my-auto text-pure-blue xl:px-2 lg:px-2 md:px-2 sm:px-1 px-0 text-sm userEditText">
                    {state.userInfo.name === undefined
                      ? "Edit Profile"
                      : state.userInfo.name}
                  </p>
                </div>
              </Link>
            )}
            <div className="flex items-center">
              <div className="relative xl:mx-8 lg:mx-4 md:mx-4 sm:mx-4 mx-2 xl:block lg:block md:block sm:block hidden ">
                <img
                  src="/assets/images/navbar/notification.svg"
                  className="w-6 min-w-[1.5rem]"
                  alt="notification"
                />
                <span className="absolute -top-2 -right-1 bg-green rounded-full w-3 h-3"></span>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (
                      document.getElementById("netWorkSelect").style.display ===
                      "block"
                    ) {
                      document.getElementById("netWorkSelect").style.display =
                        "none";
                    } else {
                      document.getElementById("netWorkSelect").style.display =
                        "block";
                    }
                  }}
                  className="connectWallet text-light-blue border-primary-pink border-solid border-2 rounded-xl py-1 px-3 xl:min-w-[12rem] lg:min-w-[12rem] md:min-w-[10rem] sm:min-w-[9rem] text-sm"
                >
                  {state.walletStatus === "connected" && wallet.status === "connected" &&
                    networkState === "harmony" && (
                      <div className="flex">
                        <img
                          src="/assets/images/navbar/harmony-one-logo.svg"
                          className="w-3"
                          alt="harmonyLogo"
                        />
                        &nbsp;
                        {Number(state.balance).toFixed(1)} ONE
                      </div>
                    )}
                  {state.walletStatus === "connected" && wallet.status === "connected" &&
                    networkState === "avalanche" && (
                      <div className="flex">
                        <img
                          src="/assets/images/portal/avalancheLogo.svg"
                          className="w-3"
                          alt="avalancheLogo"
                        />
                        &nbsp;
                        {Number(state.avaxBalance).toFixed(1)} AVAX
                      </div>
                    )}
                  {(state.walletStatus !== "connected" || wallet.status !== "connected" || localStorage.getItem("walletStatus") === "disconnected") && "Connect Wallet"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="navbottom" className="flex justify-between xl:hidden lg:hidden md:hidden">
        <div className="flex items-center pb-2 pl-4 ">
          {/* <GiHamburgerMenu onClick={onHamburgerMenuClick} className="xl:hidden lg:hidden md:hidden text-white " /> */}
          {/* <GiHamburgerMenu onClick={onHamburgerMenuClick} className="cursor-pointer text-white " /> */}
          <Hamburger onToggle={(toggled) => {
            setOnToggle(toggled);
          }} color={"white"} size={20}
          />
        </div>
        <div
          className="xl:hidden lg:hidden md:hidden xl:justify-center lg:justify-center md:justify-center sm:justify-center justify-end 
                    items-center text-white text-sm xl:pr-14 lg:pr-8 md:pr-4 pr-2 py-3 navLists"
        >
          <Link
            to="/"
            className={`xl:px-8 lg:px-6 md:px-2 sm:px-8 px-2 no-underline ${
              navbarSelect === "home" ? "text-primary-pink" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/"
            className="xl:px-8 lg:px-6 md:px-2 sm:px-8 px-2 text-white no-underline"
          >
            About
          </Link>
          <Link
            to="/affiliates"
            className={`xl:px-8 lg:px-6 md:px-2 sm:px-8 px-2 text-white no-underline ${
              navbarSelect === "affiliates" ? "text-primary-pink" : "text-white"
            }`}
          >
            Affiliates
          </Link>
          <Link
            to="/"
            className="xl:px-8 lg:px-6 md:px-2 sm:px-8 px-2 text-white no-underline"
          >
            Documentations
          </Link>
          <Link
            to="/contact"
            className={`xl:px-8 lg:px-6 md:px-2 sm:px-8 px-2 no-underline ${
              navbarSelect === "contact" ? "text-primary-pink" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
      <div
        id="netWorkSelect"
        className="z-10 connectWalletDropdownContent bg-black text-light-blue border-primary-pink border-solid border-2 rounded-xl py-1 px-3 xl:min-w-[10rem] lg:min-w-[10rem] md:min-w-[9rem] sm:min-w-[8rem] text-sm"
      >
        <h1 className="text-center text-white text-bold  text-sm">
          Select&nbsp;Network
        </h1>
        <div
          onClick={() => {
            switchNetwork(43114);
          }}
          className="cursor-pointer flex justify-center"
        >
          <img src="/assets/images/portal/avalancheLogo.svg" alt="avalanche" />
        </div>
        <h1 className="text-center text-gray-300 text-normal text-sm border-b">
          Avalanche
          <br />
          {Number(state.currentChainId) === 43114 &&
            state.walletStatus === "connected" && wallet.status === "connected" && (
              <span className="text-xs text-blue-600">Connected</span>
            )}
        </h1>
        <div
          onClick={() => {
            switchNetwork(1666600000);
          }}
          className="cursor-pointer flex justify-center"
        >
          <img src="/assets/images/portal/harmonyLogo.svg" alt="harmony" />
        </div>
        <h1 className="text-center text-gray-300 text-normal text-sm">
          Harmony
          <br />
          {Number(state.currentChainId) === 1666600000 &&
            state.walletStatus === "connected" && wallet.status === "connected" && (
              <span className="text-xs text-blue-600">Connected</span>
            )}
        </h1>
        {state.walletStatus === "connected" && wallet.status === "connected" && (
          <div
            onClick={disconnect}
            className="cursor-pointer xl:min-w-[10rem] lg:min-w-[10rem] md:min-w-[9rem] sm:min-w-[8rem] flex justify-center"
          >
            <img src="/assets/images/navbar/logout.svg"></img>
          </div>
        )}
      </div>
      <div id="popMenu" className="absolute -b-6 ml-2 z-50 block bg-black">
          <div className="mt-3">
            <Link to="/games" className="no-underline">
              <img
                src={menuSelect === "games" ? "/assets/images/menu/GamesBright.svg" :  "/assets/images/menu/Games.svg"}
                className="m-auto"
                alt="Game"
              ></img>
              <h1 className="text-dark-grey text-sm text-center font-normal">
                GAMES
              </h1>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/market" className="no-underline">
              <img
                src="/assets/images/menu/Market.svg"
                className="m-auto"
                alt="Market"
              ></img>
              <h1 className="text-dark-grey text-sm text-center font-normal">
                MARKET
              </h1>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/mint" className="no-underline">
              <img
                src="/assets/images/menu/Mint.svg"
                className="m-auto"
                alt="Mint"
              ></img>
              <h1 className="text-dark-grey text-sm text-center font-normal">
                MINT
              </h1>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/portal" className="no-underline">
              <img
                src={menuSelect === "portal" ? "/assets/images/menu/GamesBright.svg" :  "/assets/images/menu/Games.svg"}
                className="m-auto"
                alt="Portal"
              ></img>
              <h1 className="text-dark-grey text-sm text-center font-normal">
                PORTAL
              </h1>
            </Link>
          </div>
          <div className="mt-3">  
            <Link to="/arcade" className="no-underline">
              <img
                src={menuSelect === "arcade" ? "/assets/images/menu/TokenBright.svg" :  "/assets/images/menu/Token.svg"}
                className="m-auto"
                alt="Token"
              ></img>
              <h1 className="text-dark-grey text-sm text-center font-normal">
                ARCADE
              </h1>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/prizes" className="no-underline">
              <img
                src="/assets/images/menu/Prizes.svg"
                className="m-auto"
                alt="Prizes"
              ></img>
              <h1 className="text-dark-grey text-sm text-center font-normal">
                PRIZES
              </h1>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/whitelist" className="no-underline">
              <img
                src={menuSelect === "whitelist" ? "/assets/images/menu/WhitelistBright.svg" :  "/assets/images/menu/Whitelist.svg"}
                className="m-auto"
                alt="Whitelist"
              ></img>
              <h1 className="text-dark-grey text-sm text-center font-normal">
                WHITELIST
              </h1>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/news" className="no-underline">
              <img
                src="/assets/images/menu/News.svg"
                className="m-auto"
                alt="News"
              ></img>
              <h1 className="text-dark-grey text-sm text-center font-normal">
                NEWS
              </h1>
            </Link>
          </div>
      </div>
    </div>
  );
};
export default Navbar;
