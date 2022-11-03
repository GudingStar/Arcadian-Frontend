import React from "react";
import { Link } from "react-router-dom";

const AccountSettingsNav = ({ profileAccountSettingsMainNavSelect }) => {
  return (
    <div className="mt-5">
      <div className="flex justify-between py-2 bg-back-grey">
        <div className="accountSettingsNav">
          <Link
            to="/profile/accountSettings/editProfile"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline border-r-2
            ${
                profileAccountSettingsMainNavSelect === "editProfile"
                  ? "profile-top-navItem"
                  : ""
              }
            `}
          >
            Edit&nbsp;Profile
          </Link>
          <Link
            to="/profile/leased/"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline  border-r-2`}
          >
            Privacy
          </Link>
          <Link
            to="/profile/transactionRecords/purchased"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline  border-r-2`}
          >
            Social&nbsp;links
          </Link>
          <Link
             to="/profile/accountSettings/security"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline
            ${
              profileAccountSettingsMainNavSelect === "security"
                ? "profile-top-navItem"
                : ""
            }
          `}
          >
            Security
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsNav;
