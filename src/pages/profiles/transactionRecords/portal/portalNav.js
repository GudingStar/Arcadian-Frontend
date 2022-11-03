import {React,useState} from "react";
import Networkdata from "../../../../common/portalData/networkData";
import TransactionCustomStyles from "../../../../common/portalData/transactionCustomStyle";
import Select from "react-select";
import { useBlockchainContext } from "../../../../context";

const PortalNav = ({setNetworkType, setTransferType, transferType }) => {

  const [state ,{setTransactionRecordsNetwork}] = useBlockchainContext();

  //set NetworkType
  const handleNetworkChange = (e) => {
    if(e.value === 1)
      setNetworkType("harmony");
      setTransactionRecordsNetwork("harmony");
    if(e.value === 2){
      setNetworkType("avalanche");
      setTransactionRecordsNetwork("avalanche");
    }
  };
  return (
    <div className="mt-5">
      <div className="flex justify-between py-2 bg-back-grey rounded-md">
        <div className="flex justify-center items-center">
          <a
            onClick={() => {
              setTransferType("deposit");
            }}
            className={`cursor-pointer text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline border-r-2 ${
              transferType === "deposit" && "profile-top-navItem"
            }`}
          >
            Deposits
          </a>
          <a
            onClick={() => {
              setTransferType("withdraw");
            }}
            className={`cursor-pointer text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline  ${
              transferType === "withdraw" && "profile-top-navItem"
            }`}
          >
            Withdrawls
          </a>
        </div>
        <div>
          <Select
            defaultValue={Networkdata.find((op) => {
              return op.value === 1;
            })}
            options={Networkdata}
            onChange={handleNetworkChange}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.icon}
                <span style={{ marginLeft: 5, color: "#ACACAC" }}>
                  {e.text}
                </span>
              </div>
            )}
            styles={TransactionCustomStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default PortalNav;
