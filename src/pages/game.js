import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Game = ({setNavbarSelect,setMenuSelect}) => {
    useEffect(() => {
        setNavbarSelect("");
        setMenuSelect("games");
    },[])

  return (
    <div className="mx-auto mt-10">
      <h1 className="text-white font-orbitron text-4xl text-center">
        Arcadian HUB Games
      </h1>
      <p className="text-center text-xs text-game-grey mt-10">
        Select a game below to view the details.
      </p>
      <div className="h-gameHeight bg-dark relative mx-auto sm:w-sm-gameWidth gameSection">
        <img src="/assets/images/games/Crypto8Ball.svg" alt="crypto8ball"></img>
        <h1 className="text-2xl ml-2 text-white font-orbitron font-[700] font-orbitron mt-5 ">
          Crypto 8 Ball
        </h1>
        <p className="text-base text-white ml-2">
          A 2.5D classid arcade figher game.
          <br />
          Fight you opponenet in a PVP setting and WIN.
        </p>
        <div className="absolute bottom-5 left-2 flex">
          <Link to="/games/crypto8ball" className="no-underline bg-pink py-2 px-4 text-white rounded-xl mr-3">
            Play
          </Link>
          <button className="bg-pink py-2 px-4 text-white rounded-xl">
            Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
