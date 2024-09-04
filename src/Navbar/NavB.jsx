import React from "react";
import { Link } from "react-router-dom";
import "./NavB.css";

export default function NavB() {
  return (
    <>
      <ul className="bar-one">
        <li>
   
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </>
  );
}
