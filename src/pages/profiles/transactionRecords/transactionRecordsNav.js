import { Link } from "react-router-dom";
import { useBlockchainContext } from "../../../context";
import axios from "axios";

const TransactionRecordsNav = ({ profileTransactionRecordsMainNavSelect }) => {
  const [
    state,
    {
      setTransactionCallFlag
    },
  ] = useBlockchainContext();

  const onClearClick = () => {
    try{
      axios.post('/api/transaction/deletePortal',{
        net: state.transactionRecordsNetwork,
        userAddress: state.userInfo.userAddress,
        transferType: state.portalTransferType
      }).then(res => {
        if(res.data === "success"){
          setTransactionCallFlag(!state.transactionCallFlag);
        }
      }).catch(err => {
        console.error(err);
      })
    } catch(err) {
      console.err(err);
    }
  }
  return (
    <div className="mt-5">
      <div className="flex justify-between py-2 bg-back-grey rounded-md">
        <div className="portalNav">
          <Link
            to="/profile/mynfts/"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline border-r-2`}
          >
            Purcheased
          </Link>
          <Link
            to="/profile/leased/"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline  border-r-2`}
          >
            Sales
          </Link>
          <Link
            to="/profile/transactionRecords/purchased"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline  border-r-2`}
          >
            Leased
          </Link>
          <Link
            to="/profile/wallet/"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline  border-r-2`}
          >
            Rented
          </Link>
          <Link
            to="/profile/transactionRecords/portal"
            className={`text-gray-300 font-orbitron xl:text-sm lg:text-sm md:text-sm text-xs xl:px-6 lg:px-6 md:px-6 sm:px-4 px-2 no-underline ${
              profileTransactionRecordsMainNavSelect === "portal" &&
              "profile-top-navItem"
            }`}
          >
            Portal
          </Link>
        </div>
        <div>
            <a className="text-white my-auto mr-2 text-sm cursor-pointer" onClick={onClearClick}>Clear&nbsp;history</a>
        </div>
      </div>
    </div>
  );
};

export default TransactionRecordsNav;
