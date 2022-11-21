import MultiProgress from "react-multi-progress";
import { useState } from "react";
import "@fontsource/space-grotesk";
import "@fontsource/poppins";
import NftModal from '../../common/marketPlace/nftModal';

const Product = () => {
  const [detailType, setDetailType] = useState("about");

  const onClickAbout = () => {
    setDetailType("about");
  };

  const onClickSpecification = () => {
    setDetailType("specification");
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="xl:w-contentWidth lg:w-contentWidth mx-auto py-4">
      <div className="flex">
        <div className="w-5/12 p-2">
          <span className="text-gray-400 font-orbitron text-2xl font-bold border-b-4 border-purple-700 ">
            ETERNAL
          </span>
        </div>
        <div className="w-7/12 p-2">
          <span
            onClick={onClickAbout}
            className={`cursor-pointer font-orbitron px-3 py-2  text-sm bg-gray-700 rounded-md mr-3  ${detailType === "about" ?  "text-blue-600 border-1 border-white" : 'text-white'} `}
          >
            About
          </span>
          <span
            onClick={onClickSpecification}
            className={`cursor-pointer px-3 py-2 font-orbitron text-sm bg-gray-700 rounded-md ${detailType === "specification" ?  "text-blue-600 border-1 border-white" : 'text-white'} `}
          >
            Specification
          </span>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="w-5/12 p-2">
          <div className="p-3 rounded-md bg-card-back mt-2">
            <div className="flex justify-between">
              <span className="text-gray-300 px-4 py-2 bg-gray-700 rounded-md text-xs">
                Limited Edition
              </span>
              <span className="text-primary-pink bg-black px-2 py-2 border-1 border-primary-pink rounded-md text-xs">
                Lvl 1
              </span>
              <span className="text-gray-300  px-4 py-2 bg-gray-700 rounded-md text-xs">
                22/100
              </span>
            </div>
            <div className="mt-20">
              <div className="shadow-nft h-2 bg-nft-shadow"></div>
              <img
                src="/assets/images/market/Cue.svg"
                className="-mt-8 w-full cursor-pointer"
                onClick={() => {setModalShow(true)
                }}
              />
            </div>
            <div className="flex justify-center">
              <span className="text-xs text-gray-400 mx-auto border-b-1 border-purple-700">
                UPGRADEABLE
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-sm font-orbitron font-bold text-gray-300 mx-auto mt-3">
                ETERNAL
              </span>
            </div>

            <div className="flex justify-center mt-5">
              <div className="w-72 flex justify-between px-3">
                <h1 className="text-sm font-orbitron text-gray-300">POWER</h1>
                <h1 className="text-sm font-orbitron text-gray-300">
                  LVL1 + <span className="text-yellow-300">LVL3</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-72 border-1 border-gray-300 transform skew-x-minus-45 p-1">
                <MultiProgress
                  height="12"
                  round={false}
                  roundLastElement={false}
                  backgroundColor="none"
                  elements={[
                    {
                      value: 35,
                      color: "#6608C1",
                    },
                    {
                      value: 35,
                      color: "#F7C032",
                    },
                  ]}
                />
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <div className="w-72 flex justify-between px-3">
                <h1 className="text-sm font-orbitron text-gray-300">POWER</h1>
                <h1 className="text-sm font-orbitron text-gray-300">
                  LVL1 + <span className="text-yellow-300">LVL3</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-72 border-1 border-gray-300 transform skew-x-minus-45 p-1">
                <MultiProgress
                  height="12"
                  round={false}
                  roundLastElement={false}
                  backgroundColor="none"
                  elements={[
                    {
                      value: 35,
                      color: "#6608C1",
                    },
                    {
                      value: 35,
                      color: "#F7C032",
                    },
                  ]}
                />
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <div className="w-72 flex justify-between px-3">
                <h1 className="text-sm font-orbitron text-gray-300">SPIN</h1>
                <h1 className="text-sm font-orbitron text-gray-300">
                  LVL1 + <span className="text-yellow-300">LVL3</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-72 border-1 border-gray-300 transform skew-x-minus-45 p-1">
                <MultiProgress
                  height="12"
                  round={false}
                  roundLastElement={false}
                  backgroundColor="none"
                  elements={[
                    {
                      value: 35,
                      color: "#6608C1",
                    },
                    {
                      value: 35,
                      color: "#F7C032",
                    },
                  ]}
                />
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <div className="w-72 flex justify-between px-3">
                <h1 className="text-sm font-orbitron text-gray-300">TIME</h1>
                <h1 className="text-sm font-orbitron text-gray-300">
                  LVL1 + <span className="text-yellow-300">LVL3</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="w-72 border-1 border-gray-300 transform skew-x-minus-45 p-1">
                <MultiProgress
                  height="12"
                  round={false}
                  roundLastElement={false}
                  backgroundColor="none"
                  elements={[
                    {
                      value: 65,
                      color: "#6608C1",
                    },
                    {
                      value: 25,
                      color: "#F7C032",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-7/12 p-2">
          {/* About */}
          {detailType === "about" && (
            <div className="p-4 rounded-md bg-black-dark mt-2">
              <h1 className="text-white font-orbitron text-xl">About</h1>
              <h1 className="text-xs text-gray-500">Owner</h1>
              <div className="flex">
                <img
                  src="/assets/images/navbar/user.svg"
                  className="w-9 mr-2"
                ></img>
                <h1 className="text-xs text-gray-500 my-auto">Mando</h1>
              </div>
              <h1 className="text-xs text-gray-500 mt-3">Collection</h1>
              <div className="flex">
                <img
                  src="/assets/images/portal/8BallIcon.svg"
                  className="w-9 mr-2"
                ></img>
                <h1 className="text-xs text-gray-300 my-auto">Crypto 8 Ball</h1>
              </div>
              <h1 className="text-xs font-Space-Grotesk text-gray-500 mt-3">
                Description
              </h1>
              <h1 className="text-sm font-poppins text-gray-500">
                Crypto 8 Ball Is an interactive NFT game on the Avalanche and
                Harmony Blockchains.{" "}
              </h1>
              <h1 className="text-sm font-poppins text-gray-500 mt-3">
                Play with friends, form teams and earn rewards through
                contributions.
              </h1>
              <h1 className="text-sm font-poppins text-gray-500 mt-3">
                PVP , P2E, Mini-Games & More.
              </h1>
            </div>
          )}

          {/* Specification */}
          {detailType === "specification" && (
            <>
            <div className="relative mt-2 border-1 border-1 border-pure-ping rounded-md">
              <img className="absolute top-3" src="/assets/images/market/BorderLeft.svg"></img>
              <img className="absolute top-3 right-0" src="/assets/images/market/BorderRight.svg"></img>
              <div className="flex justify-between mx-5 my-3">
                <div>
                  <h1 className="font-poppins text-gray-500 text-xl">Buy Now</h1>
                  <div className="flex">
                    <img src="/assets/images/portal/avalancheLogo.svg" className="mr-2"></img>
                    <h1 className="font-poppins text-white text-xl my-auto">2.0 AVAX</h1>
                  </div>
                </div>
                <img src="/assets/images/market/BuyNow.svg" className="cursor-pointer"></img>
              </div>
            </div>
            <div className="p-4 rounded-md bg-black-dark mt-3">
              <h1 className="text-xl text-gray-400 font-orbitron font-bold">
                Specification
              </h1>
              <div className="flex">
                <div className=" w-6/12">
                  <img src="/assets/images/market/LimitedEdition.svg"></img>
                  <h1 className="text-gray-300 text-xs mt-2">
                    Attributes and Current level
                  </h1>
                </div>
                <div className="w-6/12">
                  <div className="flex justify-between border-b-1 border-gray-500">
                    <span className="text-gray-300 text-xs">Name</span>
                    <span className="text-white font-bold text-sm">
                      ETERNAL CUE
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Description</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      Game NFT Crypto 8Ball CUE
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Collection</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      Crypto 8Ball - Avalanche
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Rarity</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      Rare LTD ED
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Category</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      Limited Edition
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Current Level</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      LVL 1/6
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Additional</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      VFX
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Power</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      LVL 1
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Accuracy</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      LVL 1
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Spin</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      LVL 1
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Time</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      LVL 1
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-transparent to-pink mt-5"></div>
              <div className="flex justify-between mt-2">
                <div></div>
                <h1 className="text-red-500 text-xs">
                  You must Mint the cue before you can upgrade
                </h1>
              </div>
              <img src="/assets/images/market/Upgrade.svg" />
              <div className="flex mt-3">
                <div className="w-6/12">
                  <h1 className="text-sm text-gray-300">
                    Maimum upgrade limit
                  </h1>
                </div>
                <div className="w-6/12">
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Accuracy</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      MAX LVL 4
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Spin</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      MAX LVL 6
                    </span>
                  </div>
                  <div className="flex justify-between border-b-1 border-gray-500 mt-4">
                    <span className="text-gray-300 text-xs">Time</span>
                    <span className="text-yellow-300 font-bold text-sm">
                      GMAX LVL 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
      <NftModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Product;
