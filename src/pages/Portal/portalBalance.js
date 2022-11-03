import { useEffect } from "react";
import PortalDisplayField from "../../common/portalDisplayField";

const PortalBalance = ({ networkData, gameData, state }) => {

  return (
    <div>
      {networkData === 1 && gameData === 1 && (
        <div className="mt-5 xl:flex lg:flex md:flex block portalbalance">
          <div className="xl:w-5/12 lg:w-5/12 md:w-10/12 w-full xl:pr-2 lg:pr-2 md:pr-2">
            <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
              Game Balances
            </h1>
            <h1 className="text-gray-300 text-sm">
              8 Ball ID: {`${state.userInfo.playFabId}`}
            </h1>
            <PortalDisplayField
              image="/assets/images/portal/arcadeToken.svg"
              amountValue={`${state.gameBalanceForArc}`}
              symbol="ARCDN"
            />
            <PortalDisplayField
              image="/assets/images/portal/harmonyLogo.svg"
              amountValue={`${Number(state.gameBalanceForOne).toFixed(4)}`}
              symbol="ONE"
            />
            <PortalDisplayField
              image="/assets/images/portal/sonicToken.svg"
              amountValue={`${state.gameBalanceForSon}`}
              symbol="SONIC"
            />
            <PortalDisplayField
              image="/assets/images/portal/mtoToken.svg"
              amountValue={`${state.gameBalanceForMto}`}
              symbol="MTO"
            />
          </div>
          {Number(state.currentChainId) === 1666600000 && (
            <div className="xl:w-5/12 lg:w-5/12 md:w-10/12 w-full xl:pr-2 lg:pr-2 md:pr-2">
              <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
                Wallet Balances
              </h1>
              <h1 className="text-gray-300 text-sm">
                wallet address:{" "}
                <span className="text-userAddress">
                  {`${state.userInfo.userAddress}`}
                </span>
              </h1>
              <PortalDisplayField
                image="/assets/images/portal/arcadeToken.svg"
                amountValue={`${state.arcBalance}`}
                symbol="ARCDN"
              />
              <PortalDisplayField
                image="/assets/images/portal/harmonyLogo.svg"
                amountValue={`${Number(state.balance).toFixed(4)}`}
                symbol="ONE"
              />
              <PortalDisplayField
                image="/assets/images/portal/sonicToken.svg"
                amountValue={`${state.sonBalance}`}
                symbol="SONIC"
              />
              <PortalDisplayField
                image="/assets/images/portal/mtoToken.svg"
                amountValue={`${state.mtoBalance}`}
                symbol="MTO"
              />
            </div>
          )}
        </div>
      )}
      {networkData === 2 && gameData === 1 && (
        <div className="mt-5 xl:flex lg:flex md:flex block portalbalance">
          <div className="xl:w-5/12 lg:w-5/12 md:w-10/12 w-full xl:pr-2 lg:pr-2 md:pr-2">
            <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
              Game Balances
            </h1>
            <h1 className="text-gray-300 text-sm">
              8 Ball ID: {state.userInfo.playFabId}
            </h1>
            <PortalDisplayField
              image="/assets/images/portal/avalancheLogo.svg"
              amountValue={`${Number(state.gameBalanceForAvax).toFixed(4)}`}
              symbol="AVAX"
            />
          </div>
          {Number(state.currentChainId) === 43114 && (
            <div className="xl:w-5/12 lg:w-5/12 md:w-10/12 w-full xl:pr-2 lg:pr-2 md:pr-2">
              <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
                Wallet Balances
              </h1>
              <h1 className="text-gray-300 text-sm">
                wallet address:{" "}
                <span className="text-userAddress">
                  {`${state.userInfo.userAddress} `}
                </span>
              </h1>
              <PortalDisplayField
                image="/assets/images/portal/avalancheLogo.svg"
                amountValue={`${Number(state.avaxBalance).toFixed(4)}`}
                symbol="AVAX"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PortalBalance;
