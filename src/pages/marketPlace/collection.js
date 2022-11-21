import React from "react";
import RecentMintItem from "../../common/marketPlace/recentMintItem";
import MintCard from "../../common/marketPlace/mintCard";
import { useEffect } from "react";
import { Checkbox } from "react-input-checkbox";
import IdData from '../../common/marketPlace/filterData/idFilterData'
import RarityData from '../../common/marketPlace/filterData/rarityFilterData'
import CustomStyles from '../../common/marketPlace/filterData/customStyle'
import Select from "react-select";

const Collection = ({ setNavbarSelect, setMenuSelect }) => {
  useEffect(() => {
    setNavbarSelect();
    setMenuSelect("market");
  }, []);

  return (
    <div className="pt-10 xl:w-contentWidth lg:w-contentWidth pb-10 mx-auto">
      <div className="flex">
        <div>
          <img src="assets/images/market/Arcadian.svg"></img>
        </div>
        <div>
          <img
            src="assets/images/market/NFTs.svg"
            className="-ml-5 mt-3 "
          ></img>
        </div>
      </div>
      <div className="-mt-36">
        <img src="/assets/images/market/Crypto8Ball.svg" className="mx-auto" />
        <h1 className="text-xl text-gray-300 font-orbitron text-center -mt-36">
          Collection
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5 ">
        <div className="bg-gray-700 flex justify-center rounded-md py-3">
          <img src="/assets/images/market/NftSold.svg" className="mr-2 w-16" />
          <div>
            <h1 className="text-sm text-gray-400">NFTs Sold</h1>
            <h1 className="text-white font-orbitron text-2xl">45,820</h1>
          </div>
        </div>
        <div className="bg-gray-700 flex justify-center rounded-md py-3">
          <img
            src="/assets/images/portal/avalancheLogo.svg"
            className="mr-2 w-16"
          />
          <div>
            <h1 className="text-sm text-gray-400">NFTs Sold</h1>
            <h1 className="text-white font-orbitron text-2xl">1,769.8 AVAX </h1>
          </div>
        </div>
        <div className="bg-gray-700 flex justify-center rounded-md py-3">
          <img src="/assets/images/market/NftSold.svg" className="mr-2 w-16" />
          <div>
            <h1 className="text-sm text-gray-400">Cues Leased</h1>
            <h1 className="text-white font-orbitron text-2xl">43,700</h1>
          </div>
        </div>
      </div>
      <div className="mt-2 ">
        <div className="flex justify-between  bg-gray-700 rounded-md h-10 px-2">
          <div className="flex">
            <div className=" flex justify-center items-center px-2 mx-2 border-b-1 border-pure-ping">
              <h1 className="text-sm text-center mb-0 text-gray-400 font-orbitron">
                All
              </h1>
            </div>
            <div className="border-r-1 border-gray-500"></div>
            <div className=" flex justify-center items-center px-2 mx-2 border-b-1 border-pure-ping">
              <h1 className="text-sm text-center mb-0 text-gray-400 font-orbitron">
                For Sale
              </h1>
            </div>
            <div className="border-r-1 border-gray-500"></div>
            <div className=" flex justify-center items-center px-2 mx-2 border-b-1 border-pure-ping">
              <h1 className="text-sm text-center mb-0 text-gray-400 font-orbitron">
                For Lease
              </h1>
            </div>
            <div className="border-r-1 border-gray-500"></div>
            <div className=" flex justify-center items-center px-2 mx-2 border-b-1 border-pure-ping">
              <h1 className="text-sm text-center mb-0 text-gray-400 font-orbitron">
                Auction
              </h1>
            </div>
            <div className="border-r-1 border-gray-500"></div>
            <div className=" flex justify-center items-center px-2 mx-2 border-b-1 border-pure-ping">
              <h1 className="text-sm text-center mb-0 text-gray-400 font-orbitron">
                Sold
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="flex text-sm text-gray-400 font-orbitron">
              <img src="/assets/images/market/CollectionSearch.svg"></img>
              <input
                className="bg-card-back rounded-md px-2 border-1 border-gray-500"
                placeholder="Search Token ID.."
              />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div></div>
        <div className="flex items-center">
          <div className="flex mr-2">
            <h1 className="font-orbitron text-gray-300 text-base my-auto mr-2">
              Show my NFTs
            </h1>
            <Checkbox onChange={() => {}} value={true} />
          </div>
          <div className="px-2 bg-filter-back rounded-md border-1 border-gray-300 flex justify-center items-center mr-2">
            <h1 className="font-orbitron text-base text-gray-300 mr-7 my-auto">
              Filter
            </h1>
            <img
              src="/assets/images/market/Filter.svg"
              className="w-8 text-white"
            ></img>
          </div>
          <Select
            defaultValue={IdData.find((op) => {
              return op.value === 1;
            })}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.icon}
                <span style={{ marginLeft: 5, color: "#ACACAC" }}>
                  {e.text}
                </span>
              </div>
            )}
            styles={CustomStyles}
            className="font-orbitron"
          />
          <Select
            defaultValue={RarityData.find((op) => {
              return op.value === 1;
            })}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.icon}
                <span style={{ marginLeft: 5, color: "#ACACAC" }}>
                  {e.text}
                </span>
              </div>
            )}
            styles={CustomStyles}
            className="font-orbitron"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
