import { useEffect } from "react";
import { Link } from "react-router-dom";

const Whitelist = ({ setNavbarSelect, setMenuSelect }) => {
  useEffect(() => {
    setNavbarSelect("");
    setMenuSelect("portal");
  });

  return (
    <div className="mx-auto mt-10">
      <h1 className="text-3xl text-white text-center font-orbitron">Whitelist</h1>
      <h1 className="text-base text-gray-400 text-center">
        You can Register with your Whitelist NFT for the following games below
        <br />
        Note: If you don’t have an NFT you can mint one{" "}
        <Link to="/mint" className="text-blue-700">
          here..
        </Link>
      </h1>
      <div></div>
    </div>
  );
};

export default Whitelist;
