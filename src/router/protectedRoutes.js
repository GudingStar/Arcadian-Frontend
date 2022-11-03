import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useWallet } from "use-wallet";

const ProtectedRoutes = () => {
  const wallet = useWallet();
  if(wallet.status === "connected"){
    return <Outlet />
    
  } else {
    return <Navigate to="/" />
  }
};

export default ProtectedRoutes;
