import React from "react";
import { Link } from "react-router-dom";

const ProfileTopNav = ({ profileTopNavSelect }) => {
  return (
    <div className="flex justify-between py-2 bg-back-grey rounded-md">
      <div className="profileTopNav">
        <Link
          to="/profile/mynfts/"
          className={`text-gray-300 xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline`}
        >
          My&nbsp;NFTS
        </Link>
        <Link
          to="/profile/leased/"
          className={`text-gray-300 xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline`}
        >
          Leased&nbsp;Items
        </Link>
        <Link
          to="/profile/transactionRecords/portal"
          className={`text-gray-300 xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline ${
            profileTopNavSelect === "transactionRecords"
              ? "profile-top-navItem"
              : ""
          }`}
        >
          Transaction&nbsp;Records
        </Link>
        <Link
          to="/profile/wallet/"
          className={`text-gray-300 xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline`}
        >
          Wallet
        </Link>
        <Link
          to="/profile/accountSettings/editProfile"
          className={`text-gray-300 xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline ${
            profileTopNavSelect === "accountSettings"
              ? "profile-top-navItem"
              : ""
          }
          `}
        >
          Account&nbsp;Settings
        </Link>
      </div>
    </div>
  );
};

export default ProfileTopNav;
