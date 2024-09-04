import React, { useRef, useState } from "react";
import "./Register.css";
import NavB from "./Navbar/NavB";

export default function Register() {
  const referElement=useRef()
  console.log(referElement);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // let data = [(name,number)];
  function HandlerInp() {
    referElement.current.style.color="green";
  }
function handOne(){
  setNumber("");
  setName("");
}
function mul(name){
  console.log(name);
}
  return (
    <>
      <div className="header-bar">
        <NavB />
      </div>
      <div className="container">
        <div className="regForm">
          <label>NAME:</label>
          <input
            type="text"
            ref={referElement}
            value={name}
            onChange={(e) => setName(e.target.event)}
          />
          <br />
          <br />
          {mul()}
          <label>MOBILE:</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.event)}
          />
          <br />
          <br />
          <div className="btn-prm">
          <button className="btn-bar" onClick={HandlerInp}>SUBMIT</button>
          <button className="btn-bar" onClick={handOne}>RESET</button>
          </div>
        
        </div>
      </div>
    </>
  );
}
