import React, { useEffect, useState } from "react";
import { useBlockchainContext } from "../../../context";
import axios from "axios";
import { useWallet } from "use-wallet";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  let navigate = useNavigate();

  const [state, { getUserInfo }] = useBlockchainContext();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNameErr, setUserNameErr] = useState("");
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userBio, setUserBio] = useState("");
  const [files, setFiles] = useState(null);
  const [avatarSrc, setAvatarSrc] = useState("");
  const wallet = useWallet();

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (state.userInfo) {
      if (
        state.userInfo.avatar === null ||
        state.userInfo.avatar === undefined
      ) {
        setAvatarSrc("/assets/images/navbar/user.svg");
      } else {
        setAvatarSrc(state.userInfo.avatar);
      }
      if (state.userInfo.name !== null && state.userInfo.name !== undefined)
        setUserName(state.userInfo.name);
      if (state.userInfo.email !== null && state.userInfo.email !== undefined)
        setUserEmail(state.userInfo.email);
    }
  }, [state.userInfo]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatarSrc(URL.createObjectURL(event.target.files[0]));
      setFiles(event.target.files);
    }
  };

  const onSubmit = () => {
    if (wallet.status == "connected") {
      const formData = new FormData();
      if (userName === "") {
        setUserNameErr("UserName field is required");
        return;
      }
      formData.append("id", state.userInfo._id);
      formData.append("name", userName);
      formData.append("email", userEmail);
      formData.append("bio", userBio);
      if (files && files.length > 0) {
        formData.append("avatar", files[0]);
      }
      axios
        .post("/api/users/editProfile", formData)
        .then((res) => {
          if (res.data.success === true) {
            navigate("/");
          }
        })
        .catch((err) => {});
    } else {
      NotificationManager.error("Please connect wallet", "", 2000);
    }
  };

  return (
    <div className="bg-back-grey border border-gray-300 py-2 px-2 my-5">
      <h1 className="text-red-500	 text-sm">
        Uploading a profile picture that contains nudity
        <br /> will result in a permanent ban
      </h1>
      <h1 className="text-white font-orbitron text-center text-base font-bold">
        Edit&nbsp;profile
      </h1>
      <h1 className="text-sm text-center text-dark-grey text-normal">
        Profile&nbsp;photo
      </h1>
      <div className="flex justify-center">
      <label className="cursor-pointer">
        <img
            src={avatarSrc}
            className="text-center xl:w-48 lg:w-44 md:w-40 xl w-24 mx-auto rounded-full"
        ></img>
        <h1 className="text-center text-blue-500 text-sm">Upload Avatar</h1>
        <input
              type="file"
              id="imgupload"
              onChange={onImageChange}
              style={{ display: "none" }}
            />
      </label>
      </div>
      <div className="flex justify-center">
        <div>
          <h1 className="text-sm text-dark-grey text-normal">Username</h1>
          <input
            className="bg-black px-2 py-2 rounded-md xl:w-96 lg:w-80 md:w-72 w-48 text-gray-300"
            placeholder="Username..."
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div>
          <h1 className="text-sm text-dark-grey text-normal">
            Email(optional)
          </h1>
          <input
            className="bg-black px-2 py-2 rounded-md xl:w-96 lg:w-80 md:w-72 w-48 text-gray-300"
            placeholder="Email..."
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
          <input
              type="file"
              id="imgupload"
              onChange={onImageChange}
              style={{ display: "none" }}
            />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div>
          <h1 className="text-sm text-dark-grey text-normal">Bio</h1>
          <textarea
            className="bg-black px-2 py-2 rounded-md xl:w-96 lg:w-80 md:w-72 w-48 h-48 text-gray-300"
            value={userBio}
            placeholder="Description..."
            onChange={(e) => setUserBio(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          className="xl:w-96 lg:w-80 md:w-72 w-48 h-11 text-white border border-white rounded-md"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
