
import React, { useState, useEffect, useContext } from 'react';
import {useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import './ResetPassword.css';
const resetPassword = () => {
    const { state, dispatch } = useContext(MyContext);
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const userId = pathSegments[pathSegments.length - 1];
  console.log(userId);
    const handleChangePassword = async (e) => {
      e.preventDefault();
  
      try {
        if (newPassword !== confirmNewPassword) {
          console.log("Passwords do not match. Please enter matching passwords.");
          return;
        }
  
        const response = await fetch(`http://localhost:5500/forgotPassword/resetPassword/${userId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: userId,
            // email:state.emailForgotPassword,
            newPassword: newPassword, // Use state value directly
          }),
        });
  
        const result = await response.json();
        if (result.success) {
          console.log("Password changed successfully.");
          alert("Password changed successfully.")
          navigate("/login")
        } else {
          console.log(result.message);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
  
    return (
    <div>

      <h1>Reset Your Password Here:</h1>
      <div className="container">

  <div className="left-side">
    <img src="https://static.vecteezy.com/system/resources/previews/017/112/080/non_2x/password-icon-for-unlocking-security-lock-with-padlock-vector.jpg" alt="lock" />
  </div>
      <form onSubmit={handleChangePassword}>
     
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm New Password:
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Change Password</button>
      </form>
      </div>
      </div>
    );
  };
  
  export default resetPassword 
  
