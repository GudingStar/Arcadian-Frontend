import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = ({ menuSelect }) => {

  return (
    <div id="menu" className="xl:block lg:block md:block hidden  ">
      <div className="mt-3">
        <Link to="/games" className="no-underline">
          <img
            src={menuSelect === "games" ? "/assets/images/menu/GamesBright.svg" :  "/assets/images/menu/Games.svg"}
            className="m-auto"
            alt="Game"
          ></img>
          <h1 className="text-dark-grey text-sm text-center font-normal">
            GAMES
          </h1>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/market" className="no-underline">
          <img
            src={menuSelect === "market" ? "/assets/images/menu/MarketBright.svg" : "/assets/images/menu/Market.svg"}
            className="m-auto"
            alt="Market"
          ></img>
          <h1 className="text-dark-grey text-sm text-center font-normal">
            MARKET
          </h1>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/mint" className="no-underline">
          <img
            src="/assets/images/menu/Mint.svg"
            className="m-auto"
            alt="Mint"
          ></img>
          <h1 className="text-dark-grey text-sm text-center font-normal">
            MINT
          </h1>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/portal" className="no-underline">
          <img
            src={menuSelect === "portal" ? "/assets/images/menu/GamesBright.svg" :  "/assets/images/menu/Games.svg"}
            className="m-auto"
            alt="Portal"
          ></img>
          <h1 className="text-dark-grey text-sm text-center font-normal">
            PORTAL
          </h1>
        </Link>
      </div>
      <div className="mt-3">  
        <Link to="/arcade" className="no-underline">
          <img
            src={menuSelect === "arcade" ? "/assets/images/menu/TokenBright.svg" :  "/assets/images/menu/Token.svg"}
            className="m-auto"
            alt="Token"
          ></img>
          <h1 className="text-dark-grey text-sm text-center font-normal">
            ARCADE
          </h1>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/prizes" className="no-underline">
          <img
            src="/assets/images/menu/Prizes.svg"
            className="m-auto"
            alt="Prizes"
          ></img>
          <h1 className="text-dark-grey text-sm text-center font-normal">
            PRIZES
          </h1>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/whitelist" className="no-underline">
          <img
            src={menuSelect === "whitelist" ? "/assets/images/menu/WhitelistBright.svg" :  "/assets/images/menu/Whitelist.svg"}
            className="m-auto"
            alt="Whitelist"
          ></img>
          <h1 className="text-dark-grey text-sm text-center font-normal">
            WHITELIST
          </h1>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/news" className="no-underline">
          <img
            src="/assets/images/menu/News.svg"
            className="m-auto"
            alt="News"
          ></img>
          <h1 className="text-dark-grey text-sm text-center font-normal">
            NEWS
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
