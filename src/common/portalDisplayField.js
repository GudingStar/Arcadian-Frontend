import React from "react";
import { PropTypes } from "prop-types";

const PortalDisplayField = ({
  image,
  amountValue,
  symbol
}) => {
  return (
      <div className="flex justify-between bg-back-grey mt-2 py-1 px-2 rounded-md">
        <div className="flex">
            <img src={image} alt={symbol}></img>
            <p className={`text-base text-gray-300 my-auto ${symbol === "ONE" && "ml-3"} ml-2 text-dark-grey text-base `}>
            {amountValue}
            </p>
        </div>
        <p className="text-dark-grey my-auto text-base mr-2">
            {symbol}
        </p>
      </div>
  );
};

PortalDisplayField.propTypes = {
  image: PropTypes.string.isRequired,
  amountValue: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
};

export default PortalDisplayField;
