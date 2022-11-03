import React from "react";
import { useState, useEffect } from "react";
import PortalNav from "./portalNav";
import SelectGameList from "./selectGameList";
import Transactions from "./transactions";
import { useBlockchainContext } from "../../../../context";

const Portal = () => {
  const [transferType, setTransferType] = useState("deposit");
  const [selectedGame, setSelectedGame] = useState("8Ball");
  const [networkType, setNetworkType] = useState("harmony")
  const [state, { setPortalTransferType }] = useBlockchainContext();

  useEffect(() => {
    setPortalTransferType(transferType);
  },[transferType])
  return (
    <div>
      <PortalNav
        setTransferType={setTransferType}
        setNetworkType={setNetworkType}
        transferType={transferType}
      />
      <SelectGameList setSelectedGame={setSelectedGame} />
      <div className="bg-back-grey border border-gray-300 mt-3 xl:p-4 lg:p-4 md:p-4 sm:p-1 p-1 mb-5 transactionDiv scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <Transactions networkType={networkType} transferType={transferType} selectedGame={selectedGame} />
      </div>
    </div>
  );
};

export default Portal;
