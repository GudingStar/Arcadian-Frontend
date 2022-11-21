import React from "react";
import RecentMintItem from "../../common/marketPlace/recentMintItem";
import MintCard from "../../common/marketPlace/mintCard";
import { useEffect } from "react";

const Market = ({ setNavbarSelect, setMenuSelect }) => {
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
      </div>
      <div className="-mt-36">
        <img src="/assets/images/market/MintingNow.svg" className="mx-auto" />
      </div>
      <div className="grid grid-cols-5 justify-center mt-5">
        <div>
          <img
            src="/assets/images/market/MintPic1.svg"
            className="transform -rotate-45 mt-36 ml-10 w-40"
          />
        </div>
        <div>
          <img
            src="/assets/images/market/MintArrowLeft.svg"
            className="mx-auto mt-20 transform -rotate-45 w-12 cursor-pointer"
          />
        </div>
        <div>
          <img
            src="/assets/images/market/MintPic2.svg"
            className="mint_scale cursor-pointer w-40 mx-auto rounded-xl"
          />
        </div>
        <div>
          <img
            src="/assets/images/market/MintArrowRight.svg"
            className="mx-auto mt-20 transform rotate-45 w-12 cursor-pointer"
          />
        </div>
        <div>
          <img
            src="/assets/images/market/MintPic3.svg"
            className="transform rotate-45  mt-40 w-40"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <span className="mint_button bg-gradient-to-r from-indigo-700 to-pink text-white text-center text-2xl font-orbitron py-4 px-16 rounded-2xl cursor-pointer">
          Mint
        </span>
      </div>
      <h1 className="text-2xl text-gray-300 font-orbitron text-center mt-5">
        Recently Minted
      </h1>
      <div className="flex justify-center">
        <div className="px-2">
          <RecentMintItem />
        </div>
        <div className="px-2">
          <RecentMintItem />
        </div>
        <div className="px-2">
          <RecentMintItem />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Link>
        <span className="mint_button bg-gradient-to-r from-indigo-700 to-pink text-white text-center text-2xl font-orbitron py-4 px-16 rounded-2xl cursor-pointer">
          ViewCollection
        </span>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5 px-2">
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
      <h1 className="text-white text-2xl font-orbitron mt-5">
        Recently Listed
      </h1>
      <div className="grid grid-cols-4 gap-3">
        <MintCard />
        <MintCard />
        <MintCard />
        <MintCard />
      </div>
      <img
        src="/assets/images/market/ViewAll.svg"
        className="mt-2 cursor-pointer"
      />
      <h1 className="text-white text-2xl font-orbitron mt-5">
        Recently Listed
      </h1>
      <div className="grid grid-cols-4 gap-3">
        <MintCard />
        <MintCard />
        <MintCard />
        <MintCard />
      </div>
      <img
        src="/assets/images/market/ViewAll.svg"
        className="mt-2 cursor-pointer"
      />
      <h1 className="text-white text-2xl font-orbitron mt-5">
        Recently Listed
      </h1>
      <div className="grid grid-cols-4 gap-3">
        <MintCard />
        <MintCard />
        <MintCard />
        <MintCard />
      </div>
      <img
        src="/assets/images/market/ViewAll.svg"
        className="mt-2 cursor-pointer"
      />
    </div>
  );
};

export default Market;
