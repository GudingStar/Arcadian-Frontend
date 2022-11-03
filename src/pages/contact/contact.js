import { useEffect, useState } from "react";
import General from "./general";
import Dropdown from "react-bootstrap/Dropdown";
import Affiliates from "./affiliates";
import Partners from "./partners";
import Music from "./music";

const Contact = ({ setNavbarSelect, setMenuSelect }) => {
  useEffect(() => {
    setNavbarSelect("contact");
    setMenuSelect("");
  });

  const [contactSelect, setContactSelect] = useState("General Enquires");

  return (
    <div className="pt-10 xl:w-contentWidth lg:w-contentWidth  mx-auto pb-10">
      <h1 className="text-center text-4xl text-white font-orbitron">Contact</h1>
      <h1 className="text-white text-sm font-bold mt-5 mx-auto  xl:w-full lg:w-full md:w-full sm:w-7/12 w-full xl:block lg:block md:block hidden">
        {contactSelect}
      </h1>
      <Dropdown className="mx-auto mt-5  xl:w-full lg:w-full md:w-full sm:w-7/12 w-full xl:hidden lg:hidden md:hidden block">
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="bg-transparent"
        >
          {contactSelect + "  "}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setContactSelect("General Enquires");
            }}
          >
            General Enquires
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setContactSelect("Affiliates & Collaborations");
            }}
          >
            Affiliates & Collaborations
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setContactSelect("Partners & Investors");
            }}
          >
            Partners & Investors
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setContactSelect("Music Enquries");
            }}
          >
            Music Enquries
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h1 className="text-sm font-normal text-gray-300 mx-auto  xl:w-full lg:w-full md:w-full sm:w-7/12 w-full">
        Name
      </h1>
      <div className="xl:grid lg:grid md:grid grid-cols-2 gap-3">
        {contactSelect === "General Enquires" && <General />}
        {contactSelect === "Affiliates & Collaborations" && <Affiliates />}
        {contactSelect === "Partners & Investors" && <Partners />}
        {contactSelect === "Music Enquries" && <Music />}
        <div className="bg-back-grey p-3 border border-gray-400 rounded-md contactSelectDiv h-64 xl:block lg:block md:block hidden">
          <div>
            <a className={`text-sm no-underline text-gray-300 cursor-pointer`}
            onClick={() => {
              setContactSelect("General Enquires");
            }}
            >
              General Enquires
            </a>
            <br />
            <a className={`text-sm no-underline text-gray-300 cursor-pointer`}
            onClick={() => {
              setContactSelect("Affiliates & Collaborations");
            }}>
              Affiliates & Collaborations
            </a>
            <br />
            <a className={`text-sm no-underline text-gray-300 cursor-pointer`}
            onClick={() => {
              setContactSelect("Partners & Investors");
            }}>
              Partners & Investors
            </a>
            <br />
            <a className={`text-sm no-underline text-gray-300 cursor-pointer`}
            onClick={() => {
              setContactSelect("Music Enquries");
            }}>
              Music Enquries
            </a>
          </div>
          <h1 className="text-sm text-gray-300 mt-10">Follow us</h1>
          <div></div>
          <div className="grid grid-cols-3 gap-1">
            <a>
              <img src="/assets/images/footer/Twitter.svg" className="w-8" />
            </a>
            <a>
              <img src="/assets/images/footer/Telegram.svg" className="w-8" />
            </a>
            <a>
              <img src="/assets/images/footer/Discord.svg" className="w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
