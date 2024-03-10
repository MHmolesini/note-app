import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";

const Homepage = ({ token }) => {

  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  const userName = token?.user?.user_metadata?.full_name || "User";

  return (
    <div>
      <h3>Welcome back, {userName}</h3>
      <button onClick={handleLogout}>Logout</button>
      <div className="button_create_note">+</div>
      <NoteForm/>
    </div>
  );
};

export default Homepage;
