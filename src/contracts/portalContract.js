import { Contracts } from "./index";
import { ethers } from "ethers";

let { ethereum } = window;

let provider,
  signer,
  portalContract,
  arcContract,
  sonContract,
  mtoContract,
  harmonyServiceContract,
  avalanchePortalContract,
  avalancheServiceContract = null;

if (ethereum !== undefined) {
  provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  signer = provider.getSigner();

  portalContract = new ethers.Contract(
    Contracts.portalcontract.address,
    Contracts.portalcontract.abi,
    signer
  );

  arcContract = new ethers.Contract(
    Contracts.arccontract.address,
    Contracts.arccontract.abi,
    signer
  );

  sonContract = new ethers.Contract(
    Contracts.soncontract.address,
    Contracts.soncontract.abi,
    signer
  );

  mtoContract = new ethers.Contract(
    Contracts.mtocontract.address,
    Contracts.mtocontract.abi,
    signer
  );
  harmonyServiceContract = new ethers.Contract(
    Contracts.harmonyServiceContract.address,
    Contracts.harmonyServiceContract.abi,
    signer
  );
  avalanchePortalContract = new ethers.Contract(
    Contracts.avalancheportalcontract.address,
    Contracts.avalancheportalcontract.abi,
    signer
  );
  avalancheServiceContract = new ethers.Contract(
    Contracts.avalancheServiceContract.address,
    Contracts.avalancheServiceContract.abi,
    signer
  );
} else {
}

export {
  provider,
  signer,
  portalContract,
  arcContract,
  sonContract,
  mtoContract,
  avalanchePortalContract,
  harmonyServiceContract,
  avalancheServiceContract,
};
