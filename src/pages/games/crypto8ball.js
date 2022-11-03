import { useWallet } from "use-wallet";
import { NotificationManager } from "react-notifications";
import { useBlockchainContext } from "../../context";
import axios from "axios";

const Crypto8Ball = () => {
  const [state, { LoginPlayFabId }] = useBlockchainContext();

  const wallet = useWallet();

  const create8BallId = () => {
    if (wallet.status === "connected") {
      if (
        state.userInfo.playFabId === undefined ||
        state.userInfo.playFabId === "" ||
        state.userInfo.playFabId === null
      ) {
        LoginPlayFabId();
        NotificationManager.info("Set PlayAccount");
      }
    } else NotificationManager.warning("Please connect wallet", "", 3000);
  };

  return (
    <div className="mx-auto mt-10">
      <h1 className="text-white font-orbitron xl:text-4xl lg:text-4xl md:text-4xl text-2xl text-center">
        Crypto&nbsp;8BALL
      </h1>
      <img src="/assets/images/games/8BallLanding.svg" alt="8BallLanding"></img>
      {state.userInfo.playFabId === undefined ? (
        <div>
          <div className="flex justify-center mt-5">
            <img
              src="/assets/images/games/Warning.svg"
              className="xl:w-80 lg:w-80 md:w-80 w-52"
              alt="warning"
            ></img>
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={create8BallId}
              className="bg-purple-900 delay-750 hover:bg-purple-600 text-white text-sm xl:w-80 lg:w-80 md:w-80 w-52 p-3 border-purple-900 rounded-xl"
            >
              CREATE 8BALL ID
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-5">
          <button onClick={() => {
            axios.post('/api/playfabId/create8BallTeamPlayfabId',{teamName: "Mando's"})
            .then((res) => {
              console.log(res.data);
            })
          }} className="bg-purple-900 delay-750 hover:bg-purple-600 text-white text-sm xl:w-80 lg:w-80 md:w-80 w-52 p-3 border-purple-900 rounded-xl">
            PLAY
          </button>
        </div>
      )}
    </div>
  );
};

export default Crypto8Ball;
