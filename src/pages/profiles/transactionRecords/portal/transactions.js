import { React, useState, useEffect } from "react";
import { useBlockchainContext } from "../../../../context";
import Select from "react-select";
import axios from "axios";
import TokenData from "../../../../common/profileData/tokenData";
import SortData from "../../../../common/profileData/sortData";
import CustomStyles from "../../../../common/profileData/customStyle";

const Transactions = ({ networkType,transferType, selectedGame }) => {
  const [resultDatas, setResultDatas] = useState([]);

  //SelectedToekn
  const [selectedToken, setSelectedToken] = useState("allTokens");
  const [selectharmonytoken,setSelectharmonytoken] = useState("allTokens");
  //SelectedSort
  const [selectedSort, setSelectedSort] = useState("latest");

  const [state, {}] = useBlockchainContext();

  useEffect(() => {
    if(networkType === "avalanche"){
      setSelectedToken("AVAX")
    }
    else if(networkType === "harmony"){
      setSelectedToken(selectharmonytoken);
    }
    if (
      networkType &&
      state.userInfo.userAddress &&
      transferType &&
      selectedGame &&
      selectedToken &&
      selectedSort
    ) {
      findSearchResult();
    }
  }, [
    networkType,
    transferType,
    selectedGame,
    selectedToken,
    selectedSort,
    state.userInfo.userAddress,
    state.transactionCallFlag,
  ]);

  const findSearchResult = async () => {
    await axios
      .post("/api/transaction/findResults", {
        net: networkType,
        userAddress: state.userInfo.userAddress,
        transferType: transferType,
        selectedGame: selectedGame,
        selectedToken: selectedToken,
        selectedSort: selectedSort,
      })
      .then((res) => {
        console.log(res.data);
        setResultDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-base text-dark-grey">
          {transferType === "deposit" ? "Deposit" : "WithDraw"}
          <span className="text-yellow-500">({resultDatas.length})</span>
        </h1>
        <div className="xl:flex lg:flex md:flex sm:flex flex transactionSelect">
          {networkType === "harmony" && <Select
            defaultValue={TokenData.find((op) => {
              return op.value === selectharmonytoken;
            })}
            options={TokenData}
            onChange={(e) => {
              setSelectedToken(e.value);
              setSelectharmonytoken(e.value);
            }}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.icon}
                <span style={{ marginLeft: 5, color: "#ACACAC" }}>
                  {e.text}
                </span>
              </div>
            )}
            styles={CustomStyles}
          />}
          <Select
            defaultValue={SortData.find((op) => {
              return op.value === selectedSort;
            })}
            options={SortData}
            onChange={(e) => {
              setSelectedSort(e.value);
            }}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
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
      <div className="mx-auto mt-5">
        <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-5 grid-cols-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-0">
          <div className="text-gray-300  xl:block lg:block hidden">
            <h1 className="text-base font-normal text-center">Token</h1>
          </div>
          <div className="text-gray-300">
            <h1 className="xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-normal xl:text-left lg:text-left md:text-left sm:text-center transactionTd">
              Game
            </h1>
          </div>
          <div className="text-gray-300 xl:block lg:block md:block hidden">
            <h1 className="text-base font-normal">Date</h1>
          </div>
          <div className="text-gray-300 xl:block lg:block md:block hidden">
            <h1 className="text-base font-normal">Time</h1>
          </div>
          <div className="text-gray-300">
            <h1 className="xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-normal xl:text-left lg:text-left md:text-left sm:text-center transactionTd">
              TransactionID
            </h1>
          </div>
          <div className="text-gray-300">
            <h1 className="xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-normal xl:text-left lg:text-left md:text-left text-center ">
              Amount
            </h1>
          </div>
        </div>
        {resultDatas.map((resultData, index) => (
          <div
            key={index}
            className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-5 grid-cols-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-0 mt-2 pb-2 border-b"
          >
            <div className="text-gray-300  xl:block lg:block hidden">
              <h1 className="text-base font-bold text-center">
                {resultData.symbol === "ARC" && "ARCDN"}
                {resultData.symbol === "SON" && "SONIC"}
                {resultData.symbol === "ONE" && "ONE"}
                {resultData.symbol === "MTO" && "MTO"}
                {resultData.symbol === "AVAX" && "AVAX"}
              </h1>
            </div>
            <div className="text-gray-300">
              <h1 className="xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-normal xl:text-left lg:text-left md:text-left sm:text-center transactionTd">
                {resultData.game === "8Ball" && "Crypto 8Ball"}
              </h1>
            </div>
            <div className="text-gray-300 xl:block lg:block md:block hidden">
              <h1 className="text-base font-normal">
                {String(resultData.date).slice(0, 10)}
              </h1>
            </div>
            <div className="text-gray-300 xl:block lg:block md:block hidden">
              <h1 className="xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-normal">
                {String(resultData.date).slice(11, 19)}
              </h1>
            </div>
            <div className="text-gray-300 xl:block lg:block md:block sm:flex justify-center xl:block lg:block md:block sm:block hidden">
              <a
                href={resultData.symbol === "AVAX" ? `https://testnet.snowtrace.io/tx/${resultData.transactionID}` : `https://explorer.harmony.one/tx/${resultData.transactionID}`}
                target="_blank"
              >
                <button className="viewExplorerButton  xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs font-bold">
                  View&nbsp;on&nbsp;Explorer
                </button>
              </a>
            </div>
            <div className="text-gray-300 flex justify-center xl:hidden lg:hidden md:hidden sm:hidden block">
              <a
                href={resultData.symbol === "AVAX" ? `https://testnet.snowtrace.io/tx/${resultData.transactionID}` : `https://explorer.harmony.one/tx/${resultData.transactionID}`}
                target="_blank"
              >
                <button className="viewExplorerButton  xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs text-center font-bold">
                  View →
                </button>
              </a>
            </div>
            <div className="text-gray-300">
              <h1 className="xl:text-base lg:text-base md:text-base sm:text-sm text-xs xl:text-left lg:text-left md:text-left text-center">
                {resultData.amount +
                  ((resultData.symbol === "ONE" && "ONE") || "") +
                  ((resultData.symbol === "SON" && "SONIC") || "") +
                  ((resultData.symbol === "MTO" && "MTO") || "") +
                  ((resultData.symbol === "ARC" && "ARCADE") || "") + 
                  ((resultData.symbol === "AVAX" && "AVAX") || "")
                  }
                  
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
