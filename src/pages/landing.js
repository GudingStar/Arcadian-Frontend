import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Fade from 'react-reveal/Fade';

const Landing = ({ setNavbarSelect, setMenuSelect }) => {
  useEffect(() => {
    setNavbarSelect("home");
    setMenuSelect("");
  }, []);

  return (
    <div className="pt-10 xl:w-contentWidth lg:w-contentWidth  m-auto pb-10">
      <div className="flex justify-center">
        <div className="relative">
          <Fade left delay={2000}>
          <div className="absolute left-4">
            <h1 className="text-white font-orbitron xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-3xl font-[700]">
              WE DEVELOP
            </h1>
            <h1 className="font-orbitron xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-2xl text-primary-pink font-[700]">
              FUN
            </h1>
            <h1 className="font-orbitron xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-2xl text-light-gray font-[700]">
              INTERACTIVE
            </h1>
            <h1 className="font-orbitron xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-2xl text-light-gray font-[700]">
              GAMES
            </h1>
          </div>
          </Fade>
          <img
            src="assets/images/home/ArcadeMachine.svg"
            className="xl:min-w-[4rem] lg:min-w-[4rem] md:min-w-[2rem] sm:min-w-[2rem] min-w-[1rem]  position-right xl:ml-20 lg:ml-20 "
            alt="arcadeMachine"
          />
        </div>
      </div>
      <Fade left  delay={2000}>
      <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-2xl text-center text-white font-orbitron font-[700]">
        MULTI-PLATFORM
      </h1>
      </Fade>
      <Fade left  delay={2000}>
      <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-1xl text-center text-light-gray font-orbitron font-[700]">
        SUPPORT
      </h1>
      </Fade>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 gap-4">
        <Fade left  delay={2000}>
        <div className="xl:px-2 lg:px-2 md:px-20 sm:px-10 px-10">
          <button className="text-white text-sm bg-dark border-solid rounded-xl m-1 w-full text-center h-20">
            BROWSER
          </button>
        </div>
        </Fade>
        <Fade down  delay={2000}>
        <div className="xl:px-2 lg:px-2 md:px-20 sm:px-10 px-10">
          <button className="text-white text-sm bg-dark rounded-xl m-1 w-full text-center h-20">
            PC & MAC
          </button>
        </div>
        </Fade>
        <Fade right  delay={2000}>
        <div className="xl:px-2 lg:px-2 md:px-20 sm:px-10 px-10">
          <button className="text-white text-sm bg-dark rounded-xl m-1 w-full text-center h-20">
            MOBILE
          </button>
        </div>
        </Fade>
      </div>
      <Fade left delay={2000}>
      <div className="xl:ml-0 lg:ml-0 md:ml-10 sm:ml-4 ml-4">
        <h1 className="text-white font-orbitron xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl text-2xl font-[700] mt-10 ">
          COMMUNITY ARCADE
        </h1>
        <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-1xl text-light-gray font-orbitron font-[700]">
          Find games & play with
        </h1>
        <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-1xl text-light-gray font-orbitron font-[700]">
          your Friends
        </h1>
        <Fade left delay={2000}>
        <div className="flex justify-end">
          <img src="assets/images/home/Community.svg" alt="community" />
        </div>
        </Fade>
      </div>
      </Fade>
      <Fade down delay={2000}>
      <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-2xl text-center text-white font-orbitron font-[700] mt-10">
        NFT
      </h1>
      </Fade>
      <Fade left delay={2000}>
      <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-1xl text-center text-light-gray font-orbitron font-[700]">
        On-Chain & Off-Chain NFT Gaming
      </h1>
      </Fade>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="flex justify-center">
          <div className="h-gameHeight bg-dark relative md:w-md-gameWidth sm:w-sm-gameWidth w-xs-gameWidth">
            <Fade left delay={3000}>
            <img src="/assets/images/home/Crypto8Ball.svg" alt="crypto8ball"></img>
            </Fade>
            <h1 className="text-2xl ml-2 text-white font-orbitron font-[700] font-orbitron mt-5 ">
              Crypto 8 Ball
            </h1>
            <p className="text-base text-white ml-2">
              Play a classic 8 ball billiards game with friends Familiar
              interface with crypto PVP style battles and P2E functions,
              reflections and more.
            </p>
            <div className="absolute bottom-5 left-2 ">
              <button className="bg-pink py-2 px-4 text-white rounded-xl">
                View Game
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-gameHeight bg-dark relative md:w-md-gameWidth sm:w-sm-gameWidth w-xs-gameWidth">
            <Fade left delay={3000}>
            <img src="/assets/images/home/vitualArcade.svg" alt="virtualArcade"></img>
            </Fade>
            <h1 className="text-2xl ml-2 text-white font-orbitron font-[700] font-orbitron mt-5 ">
              Crypto 8 Ball
            </h1>
            <p className="text-base text-white ml-2">
              Play a classic 8 ball billiards game with friends Familiar
              interface with crypto PVP style battles and P2E functions,
              reflections and more.
            </p>
            <div className="absolute bottom-5 left-2 ">
              <button className="bg-pink py-2 px-4 text-white rounded-xl">
                View Game
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-gameHeight bg-dark relative md:w-md-gameWidth sm:w-sm-gameWidth w-xs-gameWidth">
            <Fade left delay={3000}>
            <img src="/assets/images/home/streetFighter.svg" alt="streetFighter"></img>
            </Fade>
            <h1 className="text-2xl ml-2 text-white font-orbitron font-[700] font-orbitron mt-5 ">
              Crypto 8 Ball
            </h1>
            <p className="text-base text-white ml-2">
              Play a classic 8 ball billiards game with friends Familiar
              interface with crypto PVP style battles and P2E functions,
              reflections and more.
            </p>
            <div className="absolute bottom-5 left-2 ">
              <button className="bg-pink py-2 px-4 text-white rounded-xl">
                View Game
              </button>
            </div>
          </div>
        </div>
      </div>
      <Fade down>
      <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-2xl text-center text-white font-orbitron font-[700] mt-10">
        USE OUR PORTAL TO DEPOSIT{" "}
      </h1>
      </Fade>
      <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-1xl text-center text-light-gray font-orbitron font-[700]">
        Tokens From <span className="text-pink">ANY</span>Blockchain
      </h1>
      <Fade left>
      <div className="flex justify-center">
        <img src="/assets/images/home/tokens.png" alt="tokens" />
      </div>
      </Fade>
      <div className="xl:ml-0 lg:ml-0 md:ml-10 sm:ml-4 ml-4">
        <Fade left>
        <h1 className="text-white font-orbitron xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl text-2xl font-[700] mt-10 ">
          ADVERTISE YOUR GAME
        </h1>
        </Fade>
        <Fade left>
        <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-1xl text-light-gray font-orbitron font-[700]">
          In our Arcade
        </h1>
        </Fade>
        <Fade left>
        <p className="xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xs  text-white">
          Are you an Independent game developer?
          <br />
          Building a DeFi or Game-Fi project?
        </p>
        </Fade>
      </div>
      <Fade right>
      <p className="text-center font-orbitron xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xs text-white mt-5">
        Join our Newsletter
      </p>
      </Fade>
      <div className="flex justify-center px-2">
        <Fade left>
        <input
          placeholder="Your Email Address"
          className="w-emailSignUp-width bg-transparent border-light-gray border-2 pl-2 rounded-r-none rounded-md"
        />
        </Fade>
        <Fade right>
        <button className="bg-pink py-2 xl:px-10 lg:px-5 md:px-4 sm:px-4 xs:px-2 text-white rounded-l-none rounded-md">
          Sign&nbsp;Up
        </button>
        </Fade>
      </div>
    </div>
  );
};

export default Landing;
