import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="w-[1440px] h-[1008px] min-h-[900px] top-[-1113px] left-[-3395px] p-[0px_48px_0px_48px] bg-[#FBFDFC]">
      <Navbar />
      <div className="flex w-[1344px] h-[952px] gap-[48px]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
