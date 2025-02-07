import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-[2rem] text-orange-300 w-max">Welcome to Home Page!!</p>
      <Navbar />
    </div>
  );
}
