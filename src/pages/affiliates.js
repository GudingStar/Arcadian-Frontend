import { useEffect } from "react";
import Fade from 'react-reveal/Fade';

const Affiliates = ({ setNavbarSelect, setMenuSelect }) => {
  useEffect(() => {
    setNavbarSelect("affiliates");
    setMenuSelect("");
  }, []);

  return (
    <div className="pt-10 xl:w-contentWidth lg:w-contentWidth  mx-auto pb-10">
      <h1 className="text-4xl text-white font-orbitron text-center">
        Affiliates
      </h1>
      <h1 className="text-base text-white font-orbitron text-center">
        Interested in Collaborating with us?
      </h1>
      <h1 className="text-xs text-gray-300 text-center">
        If you are an independent game developer or a music artist and would
        like to feature your game or music on the Arcade please contact us
        here..
      </h1>
      <h1 className="text-base text-white font-orbitron mt-3">Affiliates</h1>
      <div className="xl:grid lg:grid md:grid grid-cols-2 gap-3 mt-2">
        <div className="relative xl:px-3 lg:px-3 md:px-3 sm:px-3 py-3 bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
            <Fade left delay={1000}>
            <img
              src="/assets/images/affiliates/harmony-one-logo-large.svg"
              className="h-36"
            ></img>
            </Fade>
          </div>
          <h1 className="text-base text-white font-orbitron mt-2 font-bold">
            Harmony Blockchain
          </h1>
          <h1 className="text-xs text-gray-300">
            Harmony is an open and fast blockchain. Our mainnet runs Ethereum
            applications with 2-second transaction finality and 100 times lower
            fees.
          </h1>
          <div className="absolute left-3 bottom-3 xl:block lg:block md:block sm:block hidden">
            <h1 className="text-xs font-bold text-white">
              Website: Harmony.one
            </h1>
            <div className="flex">
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2 xl:block lg:block md:block sm:block hidden"
              ></img>
            </div>
          </div>
          <img
            className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
            src="/assets/images/affiliates/harmony-one-logo-small.svg"
          ></img>
        </div>
        <div className="relative xl:px-3 lg:px-3 md:px-3 sm:px-3 py-3 bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
            <Fade right delay={1000}>
            <img
              src="/assets/images/affiliates/avalanche-avax-logo-large.svg"
              className="h-36"
            ></img>
            </Fade>
          </div>
          <h1 className="text-base text-white font-orbitron mt-2 font-bold">
            Avalanche Network
          </h1>
          <h1 className="text-xs text-gray-300">
            Launched in 2020 by Ava Labs, Avalanche is a blockchain platform
            that is smart contract-capable. Avalanche aims to deliver a scalable
            blockchain solution while maintaining decentralization and security,
            focusing on lower costs, fast transaction speeds, and
            eco-friendliness.
          </h1>
          <div className="absolute xl:block lg:block md:block sm:block hidden left-3 bottom-3">
            <h1 className="text-xs font-bold text-white">
              Website: Harmony.one
            </h1>
            <div className="flex">
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2 xl:block lg:block md:block sm:block hidden"
              ></img>
            </div>
          </div>
          <img
            className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
            src="/assets/images/affiliates/harmony-one-logo-small.svg"
          ></img>
        </div>
      </div>
      <div className="xl:grid lg:grid md:grid grid-cols-2 gap-3 mt-2">
        <div className="relative xl:px-3 lg:px-3 md:px-3 sm:px-3 py-3 bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
            <Fade left delay={1000}>
            <img
              src="/assets/images/affiliates/Standalone_Circle.svg"
              className="h-36"
            ></img>
            </Fade>
          </div>
          <h1 className="text-base text-white font-orbitron mt-2 font-bold">
            MtopSwap
          </h1>
          <h1 className="text-xs text-gray-300">
            MtopSwap is a Software Development project and DeFi Platform
            developing a suite of tools while emphasizing user experience via a
            focus on clean, simple, and user-friendly interfaces.
          </h1>
          <h1 className="text-xs text-gray-300">
            We will build our initial products on Harmony $ONE with the goal of
            aggregating all EVM compatible chains in the future, all powered by
            our utility token, $MTOP.
          </h1>
          <div className="absolute left-3 bottom-3 xl:block lg:block md:block sm:block hidden">
            <h1 className="text-xs font-bold text-white">
              Website: Harmony.one
            </h1>
            <div className="flex">
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2 xl:block lg:block md:block sm:block hidden"
              ></img>
            </div>
          </div>
          <img
            className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
            src="/assets/images/affiliates/harmony-one-logo-small.svg"
          ></img>
        </div>
        <div className="relative xl:px-3 lg:px-3 md:px-3 sm:px-3 py-3 bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
            <Fade right delay={1000}>
            <img
              src="/assets/images/affiliates/SonicSwapTranspLogo.svg"
              className="h-36"
            ></img>
            </Fade>
          </div>
          <h1 className="text-base text-white font-orbitron mt-2 font-bold">
            SonicSwap
          </h1>
          <h1 className="text-xs text-gray-300">
            SonicSwap was an idea — an idea created to simply build on and
            support both the Harmony network and the surrounding community. The
            next priority was tokenomics, creating a sustainable environment for
            both liquidity providers and users alike.
          </h1>
          <h1 className="text-xs text-gray-300">
            With the focus on tokenomics and community involvement, we hope to
            build something that all can participate in and contribute to, while
            catering to the needs of users and providing a more stable portfolio
            growth to liquidity providers.
          </h1>
          <div className="absolute left-3 bottom-3 xl:block lg:block md:block sm:block hidden">
            <h1 className="text-xs font-bold text-white">
              Website: Harmony.one
            </h1>
            <div className="flex">
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2"
              ></img>
              <img
                src="/assets/images/footer/Twitter.svg"
                className="mr-2 xl:block lg:block md:block sm:block hidden"
              ></img>
            </div>
          </div>
          <img
            className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
            src="/assets/images/affiliates/harmony-one-logo-small.svg"
          ></img>
        </div>
      </div>
      <h1 className="text-base text-white font-orbitron mt-5">Arcade Music</h1>
      <div className="xl:grid lg:grid md:grid grid-cols-2 gap-3 mt-2">
        <div className="relative bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
          <Fade down>
            <img
              src="/assets/images/affiliates/Music1.svg"
              className="h-36"
            ></img>
            </Fade>
          </div>
          <div className="xl:px-3 lg:px-3 md:px-3 sm:px-3 xl:py-3 lg:py-3 md:py-3 sm:py-3 py-1">
            <h1 className="text-base text-white font-orbitron mt-2 font-bold">
              Rameses B
            </h1>
            <h1 className="text-xs text-gray-300">
              Independent music creator of melodic and diverse electronic music.
              From Leeds, UK
            </h1>
            <h1 className="text-xs text-gray-300">
              Best known for the melodic textures and ambient soundscapes that
              evoke different emotions within his music, Rameses has built up
              the knowledge about sound & music over many years. With a huge
              catalogue of sounds you’ll be sure to find something that suits
              your needs, ranging in genre, emotions and style there is
              something for everybody.
            </h1>
            <div className="absolute left-3 bottom-3 xl:block lg:block md:block sm:block hidden">
              <h1 className="text-xs font-bold text-white">
                Website: Harmony.one
              </h1>
              <div className="flex">
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2 xl:block lg:block md:block sm:block hidden"
                ></img>
              </div>
            </div>
            <img
              className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
              src="/assets/images/affiliates/harmony-one-logo-small.svg"
            ></img>
          </div>
        </div>
        <div className="relative bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
            <Fade down >
            <img
              src="/assets/images/affiliates/Music2.svg"
              className="h-36"
            ></img>
            </Fade>
          </div>
          <div className="xl:px-3 lg:px-3 md:px-3 sm:px-3 xl:py-3 lg:py-3 md:py-3 sm:py-3 py-1">
            <h1 className="text-base text-white font-orbitron mt-2 font-bold">
              VHS Dreams
            </h1>
            <h1 className="text-xs text-gray-300">
              VHS Dreams is the electronic music alias of George Dervenagas.
              Based in England, his musical and visual style merges 80's/90's
              sensibilities with modern elements and is described as an
              examination and reimagining of current and past cultures. In 2014,
              under the "VHS Dreams" moniker, his debut EP established him as a
              household name within the Synthwave underground scene. Since then
              he's been involved in a variety of works including remixes, music
              videos, compilations, indie films, video games, art exhibitions
              and released his full albums “Trans Am” (2015) and “Lost
              World”(2018).
            </h1>
            <div className="absolute left-3 bottom-3 xl:block lg:block md:block sm:block hidden">
              <h1 className="text-xs font-bold text-white">
                Website: Harmony.one
              </h1>
              <div className="flex">
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2 xl:block lg:block md:block sm:block hidden"
                ></img>
              </div>
            </div>
            <img
              className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
              src="/assets/images/affiliates/harmony-one-logo-small.svg"
            ></img>
          </div>
        </div>
      </div>
      <div className="xl:grid lg:grid md:grid grid-cols-2 gap-3 mt-2">
        <div className="relative bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
          <Fade down >
            <img
              src="/assets/images/affiliates/Music3.svg"
              className="h-36"
            ></img>
          </Fade>
          </div>
          <div className="xl:px-3 lg:px-3 md:px-3 sm:px-3 xl:py-3 lg:py-3 md:py-3 sm:py-3 py-1">
            <h1 className="text-base text-white font-orbitron mt-2 font-bold">
              Sebastian Gampl
            </h1>
            <h1 className="text-xs text-gray-300">
              Keys | Production | Sound Design Musician/Composer and Producer
              based in Munich/Germany. Master Switch, released 05 December 2020.
            </h1>
            <div className="absolute left-3 bottom-3 xl:block lg:block md:block sm:block hidden">
              <h1 className="text-xs font-bold text-white">
                Website: Harmony.one
              </h1>
              <div className="flex">
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2 xl:block lg:block md:block sm:block hidden"
                ></img>
              </div>
            </div>
            <img
              className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
              src="/assets/images/affiliates/harmony-one-logo-small.svg"
            ></img>
          </div>
        </div>
        <div className="relative bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
            <Fade down >
            <img
              src="/assets/images/affiliates/Music4.svg"
              className="h-36"
            ></img>
            </Fade>
          </div>
          <div className="xl:px-3 lg:px-3 md:px-3 sm:px-3 xl:py-3 lg:py-3 md:py-3 sm:py-3 py-1">
            <h1 className="text-base text-white font-orbitron mt-2 font-bold">
              Droid Bishop
            </h1>
            <h1 className="text-xs text-gray-300">
              James Bowen, known professionally as Droid Bishop, is an
              Australian synthwave artist, guitarist, keyboardist and
              songwriter. Bowen is the brother of musician Sam Sparro
            </h1>
            <div className="absolute left-3 bottom-3 xl:block lg:block md:block sm:block hidden">
              <h1 className="text-xs font-bold text-white">
                Website: Harmony.one
              </h1>
              <div className="flex">
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2 xl:block lg:block md:block sm:block hidden"
                ></img>
              </div>
            </div>
            <img
              className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
              src="/assets/images/affiliates/harmony-one-logo-small.svg"
            ></img>
          </div>
        </div>
      </div>
      <div className="xl:grid lg:grid md:grid grid-cols-2 gap-3 mt-2">
        <div className="relative bg-back-grey h-affiliatesHeight mt-2 border rounded-md">
          <div className="flex justify-center">
            <Fade down >
            <img
              src="/assets/images/affiliates/Music5.svg"
              className="h-36"
            ></img>
            </Fade>
          </div>
          <div className="xl:px-3 lg:px-3 md:px-3 sm:px-3 xl:py-3 lg:py-3 md:py-3 sm:py-3 py-1">
            <h1 className="text-base text-white font-orbitron mt-2 font-bold">
              Kalax
            </h1>
            <h1 className="text-xs text-gray-300">
              Liverpool based producer and synthwave artist, Lee Blanshard, aka
              Kalax, has a background as a vocalist and bass player in several
              metal/alternative bands, but since 2006, he’s produced electronic
              music inspired by his mother’s 80s cassette and vinyl collection
              which he grew up listening to, and also by 80s movies. Since his
              debut EP, Journey (2013), he has released two EPs and three
              full-length albums, and has performed a whole host of live shows.
              Several of his tracks will also be featured in the 2021
              Documentary ROBODOC. A Robocop Documentary. He’s also done work
              for clients such as BBC, Snapchat, Funkotronics Labs and Digixart.
            </h1>
            <div className="absolute left-3 bottom-3 xl:block lg:block md:block sm:block hidden">
              <h1 className="text-xs font-bold text-white">
                Website: Harmony.one
              </h1>
              <div className="flex">
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2"
                ></img>
                <img
                  src="/assets/images/footer/Twitter.svg"
                  className="mr-2 xl:block lg:block md:block sm:block hidden"
                ></img>
              </div>
            </div>
            <img
              className="absolute right-3 bottom-3 xl:block lg:block md:block sm:block hidden"
              src="/assets/images/affiliates/harmony-one-logo-small.svg"
            ></img>
          </div>
        </div>
      </div>

      <div className="bg-back-grey mt-3 py-3 rounded-md">
        <div className="mx-auto xl:w-xl-affiliateBottomWidth lg:w-lg-affiliateBottomWidth md:w-md-affiliateBottomWidth w-60">
            <h1 className="text-base text-white font-orbitron text-center">
            Interested in Collaborating with us?
            </h1>
            <h1 className="text-xs text-gray-300 text-center">
            If you are an independent game developer or a music artist and would
            like to feature your game or music on the Arcade please contact us
            here..
            </h1>
            <div className="flex">
                <input
                placeholder="Your Email Address"
                className="text-gray-300  w-full bg-transparent border-light-gray border-2 pl-2 rounded-r-none rounded-md"
                />
                <button className="bg-pink py-2 xl:px-10 lg:px-5 md:px-4 sm:px-4 xs:px-2 text-white rounded-l-none rounded-md">
                Sign&nbsp;Up
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;
