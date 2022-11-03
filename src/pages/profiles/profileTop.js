import { useState,useEffect } from "react";
import { useBlockchainContext } from "../../context";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";


const ProfileTop = () => {
  const [state, {}] = useBlockchainContext();
  const [avatarSrc, setAvatarSrc] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if(state.userInfo){ 
      if (state.userInfo.avatar === null || state.userInfo.avatar === undefined) {
        setAvatarSrc("/assets/images/navbar/user.svg");
      } else {
        setAvatarSrc(state.userInfo.avatar);
      }
      if(state.userInfo.name !== null && state.userInfo.name !== undefined)
        setUserName(state.userInfo.name);
    }
  }, [state.userInfo]);

  return (
    <div className="relative mt-2">
      <img src="/assets/images/profile/profileBackground.svg"></img>
      <div className="absolute  xl:left-5 lg:left-5 md:left-5 sm:left-5 left-0  xl:top-10 lg:top-10 md:top-10 sm: top-2">
        <div className="flex">
          <div>
            <img
              src={avatarSrc}
              className="xl:h-40 lg:h-40 md:h-20 sm:h-20 h-0 xl:mt-0 lg:-mt-5"
            ></img>
          </div>
          <div className="xl:ml-4 lg:ml-4 md:ml-4 sm:ml-4 ml-0 xl:mt-0 lg:-mt-8 md:-mt-8 sm:mt-0 -mt-1">
            <h1 className="text-white font-orbitron xl:text-xl lg:text-xl md:text-xl text-sm m-0">{userName}</h1>
            <p className="text-gray-200 mb-0 text-sm w-72 xl:block lg:block md:block hidden">
              {state.userInfo.bio}
            </p>
            <div className="mt-1">
                <span className="text-white text-xs bg-black border-2 rounded-md border-indigo-700 py-1" style={{fontSize:"10px"}}>
                  {state.userInfo.userAddress}
                  <InsertDriveFileIcon
                    style={{
                      color: "purple",
                      fontSzie:"10px"
                    }}
                  />
                </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-5 xl:top-10 lg:top-10 md:top-5 sm:top-5  xl:block lg:block md:block sm:block  hidden">
        <div className="flex">
          <img src="/assets/images/footer/Facebook.svg" className="mr-2"></img>
          <img src="/assets/images/footer/Twitter.svg" className="mr-2"></img>
          <img src="/assets/images/footer/Instagram.svg" className="mr-2"></img>
          <img src="/assets/images/footer/Discord.svg" className="mr-2"></img>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
