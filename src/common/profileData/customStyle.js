//Select Component Style
const CustomStyles = {
    dropdownIndicator: (base) => ({
      ...base,
      color: "#6608C1", // Custom colour
    }),
    control: (styles, state) => ({
      // should be option, not control
      ...styles,
      backgroundColor: "#1E1E1E",
      height: "60px",
      border: "1px solid #5B5B5B",
      
      color: "white",
      fontSize:'10px',
    }),
    option: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "#1E1E1E",
    }),
    typography: {
      color: "white",
    },
  };

export default CustomStyles;