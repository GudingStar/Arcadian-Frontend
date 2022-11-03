import React from "react";
import { useEffect } from "react";
import PortalDepositInputFieldGroup from "../../common/portalDepositInputFieldGroup";
import { useBlockchainContext } from "../../context";

const PortalDeposit = ({ networkData, gameData, buttonProgress }) => {
  const [state, {}] = useBlockchainContext();

  return (
    <div>
      {networkData === 1 &&
        Number(state.currentChainId) === 1666600000 &&
        gameData === 1 && (
          <div>
            <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
              Deposit
            </h1>
            <PortalDepositInputFieldGroup
              image="/assets/images/portal/mtoToken.svg"
              symbol="MTO"
              description={"Max Deposit amount per transaction"}
              maxTransaction="10,000"
              approveValue={`${state.approveBalanceForMto}`}
              gameValue={`${Number(state.gameBalanceForMto).toFixed(4)}`}
              walletValue={`${Number(state.mtoBalance).toFixed(4)}`}
              buttonProgress={buttonProgress[0]}
            />
            <PortalDepositInputFieldGroup
              image="/assets/images/portal/sonicToken.svg"
              symbol="SONIC"
              description={"Max Deposit amount per transaction"}
              maxTransaction="250,000"
              approveValue={`${state.approveBalanceForSon}`}
              gameValue={`${Number(state.gameBalanceForSon).toFixed(4)}`}
              walletValue={`${Number(state.sonBalance).toFixed(4)}`}
              buttonProgress={buttonProgress[1]}
            />
            <PortalDepositInputFieldGroup
              image="/assets/images/portal/arcadeToken.svg"
              symbol="ARCDN"
              description={"Max Deposit amount per transaction"}
              maxTransaction="10,000"
              approveValue={`${state.approveBalanceForArc}`}
              gameValue={`${Number(state.gameBalanceForArc).toFixed(4)}`}
              walletValue={`${Number(state.arcBalance).toFixed(4)}`}
              buttonProgress={buttonProgress[2]}
            />
            <PortalDepositInputFieldGroup
              image="/assets/images/portal/harmonyLogo.svg"
              symbol="ONE"
              description={"Max Deposit amount per transaction"}
              maxTransaction="25,000"
              gameValue={`${Number(state.gameBalanceForOne).toFixed(4)}`}
              walletValue={`${Number(state.balance).toFixed(4)}`}
              buttonProgress={buttonProgress[3]}
            />
          </div>
        )}
      {networkData === 2 &&
        Number(state.currentChainId) === 43114 &&
        gameData === 1 && (
          <div>
            <h1 className="font-orbitron text-gray-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl ">
              Deposit
            </h1>
            <PortalDepositInputFieldGroup
              image="/assets/images/portal/avalancheLogo.svg"
              symbol="AVAX"
              description={"Max Deposit amount per transaction"}
              maxTransaction="10,000"
              gameValue={`${Number(state.gameBalanceForAvax).toFixed(4)}`}
              walletValue={`${Number(state.avaxBalance).toFixed(4)}`}
              buttonProgress={buttonProgress[4]}
            />
          </div>
        )}
    </div>
  );
};

export default PortalDeposit;
