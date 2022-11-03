import {React , useState} from "react";
import Select from "react-select";

const SelectGameList = ({setSelectedGame}) => {
  //Select Component Option
  const Gamedata = [
    {
      value: "8Ball",
      text: "Crypto 8 Ball",
      icon: (
        <img
          src="/assets/images/portal/8BallIcon.svg"
          width={"40px"}
          height={"40px"}
        ></img>
      ),
    },
    {
      value: "FightClub",
      text: "Fight Club",
      icon: (
        <img
          src="/assets/images/portal/8BallIcon.svg"
          width={"40px"}
          height={"40px"}
        ></img>
      ),
    },
    {
      value: "MercuryOne",
      text: "MercuryONE",
      icon: (
        <img
          src="/assets/images/portal/8BallIcon.svg"
          width={"40px"}
          height={"40px"}
        ></img>
      ),
    },
    {
      value: "HouseOfHel",
      text: "House of HEL",
      icon: (
        <img
          src="/assets/images/portal/8BallIcon.svg"
          width={"40px"}
          height={"40px"}
        ></img>
      ),
    },
  ];

  //Select Component Style
  const customStyles = {
    dropdownIndicator: (base) => ({
      ...base,
      color: "#6608C1", // Custom colour
    }),
    control: (styles, state) => ({
      // should be option, not control
      ...styles,
      backgroundColor: "#1E1E1E",
      height: "60px",
      border: "none",
    }),
    option: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "#1E1E1E",
    }),
  };

  return (
    <div>
      <h1 className="font-weight-700 text-gray-300  mt-5 font-orbitron">
        Select Game
      </h1>
      <div className="row mt-2 mx-0">
        <div className="col-md-4 relative">
          <Select
            defaultValue={Gamedata.find((op) => {
              return op.value === "8Ball";
            })}
            options={Gamedata}
            onChange={(e) => {
              setSelectedGame(e.value)
            }}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.icon}
                <span style={{ marginLeft: 5, color: "#ACACAC" }}>
                  {e.text}
                </span>
              </div>
            )}
            styles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectGameList;
