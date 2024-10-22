import React from "react";
import bg from "../../assets/bg-tilt.svg";
import './join.css'

const Joinus = () => {
  return (
    <div className="joinus bg-gradient-to-r from-[#5e2bff] to-[#291c52] via-[#3b218b] h-[300px] overflow-hidden flex items-center justify-between my-24 mx-12 rounded-[54px] pl-24">
      <div className="left w-full">
        <h6 className="text-white font-bold text-4xl mb-2 texthead">
          Let’s Join With Us
        </h6>
        <h1 className="text-white text-1xl md:text-1xl font-thin mb-4 paragra text-left ">
          By Joining and enjoying our panel, you can make the <br /> job you do
          as a recruiter easier
        </h1>
        <button className="bg-[#ccff00] text-black py-2 px-12 rounded-[54px] transition-colors duration-300 hover:bg-white hover:text-black flex">
          Join Us
        </button>
      </div>
      {/* This div will be hidden on sm and md, shown on lg and larger */}
      <div className="right hidden  lg:flex justify-end">
        <img src={bg} alt="background" className="w-[110%] mt-24" />
      </div>
    </div>
  );
};

export default Joinus;
