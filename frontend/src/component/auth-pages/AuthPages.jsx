import React, { useState } from "react";
import { Login } from "./login/Login";
import { Register } from "./register/Register";
import { ForgotPassword } from "./forgot-password/ForgotPassword";
import "./auth-pages.css";
import { Navbar } from "../../layouts/navbars/Navbar";

export const AuthPages = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="tab-container container text-center mt-4">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabChange("login")}
          >
            Login
          </div>
          <div
            className={`tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => handleTabChange("register")}
          >
            Register
          </div>
          <div
            className={`tab ${activeTab === "forgotPassword" ? "active" : ""}`}
            onClick={() => handleTabChange("forgotPassword")}
          >
            Forgot Password 😭
          </div>
        </div>
        <div className="tab-content">
          {activeTab === "login" && <Login />}
          {activeTab === "register" && <Register />}
          {activeTab === "forgotPassword" && <ForgotPassword />}
        </div>
      </div>
    </React.Fragment>
  );
};
