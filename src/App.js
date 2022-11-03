import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-orbitron";
import "react-notifications/lib/notifications.css";
import Navbar from "./components/Navbar";
import Landing from "./pages/landing";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Game from "./pages/game";
import Portal from "./pages/Portal/portal";
import Profile from "./pages/profiles/profile";
import Whitelist from "./pages/whitelist";
import Contact from "./pages/contact/contact";
import Crypto8Ball from "./pages/games/crypto8ball";
import Arcade from "./pages/arcade";
import Affiliates from "./pages/affiliates";
import Market from "./pages/marketPlace/market";

import { PushSpinner } from "react-spinners-kit";

const App = () => {
  const [navbarSelect, setNavbarSelect] = useState("");
  const [menuSelect, setMenuSelect] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // visible true -> false
    if (loading) {
      setTimeout(() => setLoading(false), 1000); // 10초 뒤에
    }

    //setLoaded(loaded);
  }, [loading]);

  return (
    <BrowserRouter>
      {loading === true ? (
        <div className="h-screen flex justify-center items-center">
          <PushSpinner size={30} color="#686769" loading={loading} />
        </div>
      ) : (
        <div className="bg-dark min-h-100vh">
          <Navbar navbarSelect={navbarSelect} menuSelect={menuSelect} />
          <div className=" xl:flex lg:flex md:flex block xl:px-0 lg:px-0 md:px-0 px-2  min-h-screen">
            <Menu menuSelect={menuSelect} />
            <Routes>
              <Route
                path="/"
                element={
                  <Landing
                    setNavbarSelect={setNavbarSelect}
                    setMenuSelect={setMenuSelect}
                  />
                }
              />
              <Route
                path="/games"
                element={
                  <Game
                    setNavbarSelect={setNavbarSelect}
                    setMenuSelect={setMenuSelect}
                  />
                }
              />
              <Route
                path="/portal"
                element={
                  <Portal
                    setNavbarSelect={setNavbarSelect}
                    setMenuSelect={setMenuSelect}
                  />
                }
              />
              <Route
                path="/whitelist"
                element={
                  <Whitelist
                    setNavbarSelect={setNavbarSelect}
                    setMenuSelect={setMenuSelect}
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <Contact
                    setNavbarSelect={setNavbarSelect}
                    setMenuSelect={setMenuSelect}
                  />
                }
              />
              <Route
                path="/arcade"
                element={
                  <Arcade
                    setNavbarSelect={setNavbarSelect}
                    setMenuSelect={setMenuSelect}
                  />
                }
              />
              <Route
                path="/affiliates"
                element={
                  <Affiliates
                    setNavbarSelect={setNavbarSelect}
                    setMenuSelect={setMenuSelect}
                  />
                }
              />
              <Route path="profile">
                <Route path="transactionRecords">
                  <Route
                    path="portal"
                    element={
                      <Profile
                        profileTopNavSelect={"transactionRecords"}
                        profileTransactionRecordsMainNavSelect={"portal"}
                      />
                    }
                  />
                </Route>
                <Route path="accountSettings">
                  <Route
                    path="security"
                    element={
                      <Profile
                        profileTopNavSelect="accountSettings"
                        profileAccountSettingsMainNavSelect="security"
                      />
                    }
                  />
                  <Route
                    path="editProfile"
                    element={
                      <Profile
                        profileTopNavSelect="accountSettings"
                        profileAccountSettingsMainNavSelect="editProfile"
                      />
                    }
                  />
                </Route>
              </Route>
              <Route path="/games/crypto8ball" element={<Crypto8Ball />} />
              <Route
                path="/market"
                element={
                  <Market
                    setNavbarSelect={setNavbarSelect}
                    setMenuSelect={setMenuSelect}
                  />
                }
              />
            </Routes>
          </div>
          <Footer navbarSelect={navbarSelect} />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
