import React from 'react';
import '../css/body.css'
import bc from "../Assets/bc1.jpg";
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

export default function Body() {


const navigate = useNavigate();





  return (

    
    <div>
    <Navbar/>
      <div className="mainBody">
        <div className="leftSection">
          <h1>
            {} Make your banana breads{" "}
            <span className="different">{"\n"}Differently</span> every time.
          </h1>

          <h3> Customize my banana bread.</h3>
          <button onClick={ ()=>{ navigate("/customize");}}> Start </button>
        </div>
        <div className="rightSection">
          <img src={bc}></img>
        </div>
      </div>
    </div>
  );
}
