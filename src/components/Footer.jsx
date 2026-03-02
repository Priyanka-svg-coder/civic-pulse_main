import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="ml-5">
          <img src="/logo.png" alt="" className="mb-5 w-20" />
          <p className="w-full md:w-2/3 text-gray-600 ">
          Empowering citizens to report and resolve community issues efficiently.
          Together, we can make our community better.
          </p>
        </div>
        <div className="">
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to= "/">Home</Link>
            <Link to= "/aboutus">About us</Link>
            <Link to= "/delivery">Delivery</Link>
            <Link to= "/privacypolicy">Privacy Policy</Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-123-168-0976</li>
            <li>priyankaupadhyay785@gmail.com</li>
            <Link to= "/instagram">Instagram</Link>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-900" />
        <p className="mt-2 text-sm text-center">Made 💖 with <a href='https://github.com/Priyanka-svg-coder' className="text-gray-950">Priyanka</a></p>
        <p className="mb-5 text-sm text-center">Copyright 2026 @CivicPulse - All Right Reserved.</p>
        
      </div>
    </div>
  );
};

export default Footer;