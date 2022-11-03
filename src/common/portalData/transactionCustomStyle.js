//Select Component Style
const TransactionCustomStyles = {
    dropdownIndicator: (base) => ({
      ...base,
      color: "#6608C1", // Custom colour
    }),
    control: (styles, state) => ({
      // should be option, not control
      ...styles,
      backgroundColor: "#1E1E1E",
      fontSize:"13px",
      border: "none",
    }),
    option: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "#1E1E1E",
    }),
  };

export default TransactionCustomStyles;