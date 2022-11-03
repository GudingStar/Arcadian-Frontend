import { React, useState, useEffect } from "react";
import speakeasy from "speakeasy";
import QRCode from "qrcode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { useBlockchainContext } from "../../../context";

const Security = () => {
  let navigate = useNavigate();
  const [image, setImage] = useState();
  const [secret, setSecret] = useState({});
  const [state, { setCreateQrCodeState, setWithDrawState }] =
    useBlockchainContext();

  const [inputValue, setInputValue] = useState(); //verifycode
  const [isCodeValid, setIsCodeValid] = useState(0); //isCode valid for yes or no

  //checkverifyCode
  const verifyCode = () => {
    const isVerified = speakeasy.totp.verify({
      secret: secret.hex,
      encoding: "hex",
      token: inputValue,
      window: 1,
    });
    if (isVerified === true) {
      document.getElementById("verifyInput").style.color = "dodgerblue";
    } else {
      document.getElementById("verifyInput").style.color = "red";
    }
    setIsCodeValid(isVerified);
  };

  //save to database
  const createVerifyCode = async () => {
    await axios
      .post("/api/users/qrCode", {
        userAddress: state.userInfo.userAddress,
        userhex: secret.hex,
      })
      .then((res) => {
        if (res.data === 1) {
          NotificationManager.success("Success", "", 5000);
          navigate("/portal");
          setCreateQrCodeState(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setImage(null);
  };

  useEffect(() => {
    if (state.createQrCodeState === 1) {
      const secret = speakeasy.generateSecret({
        label: "ArcadianPortal",
        name: "Arcadian(" + state.userInfo.userAddress + ")",
        length: 16,
      });
      const url = speakeasy.otpauthURL({
        secret: secret.base32,
        label: "ArcadianPortal",
        issuer: "Arcadian(" + state.userInfo.userAddress + ")",
        encoding: "base32",
      });
      QRCode.toDataURL(url, (err, image_data) => {
        setImage(image_data);
        setSecret(secret);
      });
    }
  }, []);

  const underStand = () => {
    if (state.createQrCodeState === 1) {
      document.getElementById("step1").style.display = "none";
      document.getElementById("step2").style.display = "block";
    }
  };

  const CopiedCode = () => {
    if (state.createQrCodeState === 1) {
      document.getElementById("step2Buttons").style.display = "none";
      document.getElementById("step3Button").style.display = "block";
    }
  };

  const copyClick = () => {
    if (state.createQrCodeState === 1) {
      navigator.clipboard.writeText(secret.base32);
    }
  };

  return (
    <div className="bg-back-grey border border-gray-300 py-2 px-10 my-5 ">
      <h1 className="font-orbitron text-white text-center text-base font-bold">
        PORTAL WITHDRAW 2FA
      </h1>
      <h1 className="text-3xl font-orbitron text-gray-500">Setup</h1>
      <h1 className="text-gray-300 font-normal text-sm">
        Enable Google Aunthenticaotr
      </h1>
      <div id="step1">
        <ul className="list-decimal text-gray-300 font-normal text-sm">
          <li>Install Google Authenticator on your phone</li>
          <li>Open the Google Authenticator app.</li>
          <li>
            Tap menu, then tap “Setup and account” , then tap Scan a Barcode
          </li>
          <li>
            Your phone will now be in a “scanning” mode. When you are in this
            mode,
            <br /> scan the barcode below
          </li>
          <li>Write down your Setup/Recovery KEY in a secure place.</li>
        </ul>
        <h1 className="text-red-700 font-normal text-sm">
          We cannot recover your account if you lose the KEY and you will need
          to make a new Arcadian Account.
          <br />
          We cannot recover tokens that are locked on the portal due to losing
          your recover KEY
          <br />
          It is recommended to treat this KEY as you would treat your Wallet
          Seed Phrase.
          <br />
        </h1>
        <h1 className="text-white text-sm font-bold text-center mt-5">
          Once you start the process you cannot cancel
        </h1>
        <div className="flex justify-center">
          <button
            onClick={underStand}
            className="font-bold bg-black-600 duration-300 hover:bg-purple-500 px-10 py-2 active:bg-purple-900 border-2 
          rounded-full border-purple-900 xl:text-base lg:text-base md:text-base text-xs text-white"
          >
            I&nbsp;UNDERSTAND
          </button>
        </div>
      </div>
      {state.createQrCodeState === 1 ? (
        <div id="step2" className="mt-5">
          <h1 className="text-sm text-center text-white font-normal">
            SCAN QR CODE
          </h1>
          <div className="flex justify-center">
            <img src={`${image}`} />
          </div>
          <h1 className="text-center font-normal text-white text-xs mt-5">
            Please make sure you have saved this key in a secure place.
            <br />
            We cannot recover your 2FA Setup Key if you lose it.
            <br />
            If you lose the KEY you will have to make a new Account.
          </h1>
          <img
            src="/assets/images/profile/Warning.svg"
            className="mx-auto mt-2"
          ></img>
          <h1 className="text-center text-white text-base mt-2">
            KEY:
            <label className="text-red-700">{secret.base32}</label>
          </h1>
          <div id="step2Buttons">
            <div className="flex justify-center">
              <button
                onClick={copyClick}
                className="text-white bg-black-600 duration-300 hover:bg-purple-500 active:bg-purple-900 w-56 py-2 border-2 border-primary-pink rounded-xl"
              >
                COPY&nbsp;CODE
              </button>
            </div>
            <div className="flex justify-center mt-2">
              <button
                onClick={CopiedCode}
                className="text-white bg-black-600 duration-300 hover:bg-purple-500 active:bg-purple-900 w-56 py-2 border-2 border-primary-pink rounded-xl"
              >
                I&nbsp;HAVE&nbsp;COPIED&nbsp;THE&nbsp;CODE
              </button>
            </div>
          </div>
          <div id="step3Button">
            <h1 className="text-sm font-normal text-center text-gray-300 mt-2">
              Once you have scanned the barcode, enter the 6-digit code below
            </h1>
            <div>
              <div className="xl:flex lg:flex md:flex  justify-center">
                <div className="xl:block lg:block md:block flex justify-center">
                  <input
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    className="verifyInput m-0"
                    id="verifyInput"
                    maxLength={6}
                  />
                </div>
                <div className="xl:block lg:block md:block  flex mt-2 justify-center">
                  <button
                    className="text-white px-5 py-2 rounded-xl bg-purple-900"
                    onClick={verifyCode}
                  >
                    Verify
                  </button>
                </div>
                <br />
              </div>
              <div>
                {isCodeValid !== null && isCodeValid !== 0 && (
                  <div>
                    {isCodeValid === true ? (
                      <h1 className="text-sm text-gray-300	text-center">
                        Code Accepted✅
                      </h1>
                    ) : (
                      <h1 className="text-sm text-red-700 text-center">
                        Incorrect Code❌
                      </h1>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <button
                className="bg-purple-900 mt-2 text-white font-bold font-base py-2 px-5 rounded-md "
                onClick={createVerifyCode}
              >
                FINISH
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Security;
