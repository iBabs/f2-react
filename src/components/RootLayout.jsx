import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import './root.css'

function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>
        <p> this is the page footer</p>
      </footer>
    </>
  );
}

export default RootLayout;
