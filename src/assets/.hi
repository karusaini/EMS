import React from "react";
import profile from "../assets/profile.svg";
import cal from "../assets/cal.svg";
import task from "../assets/task.svg";
import imp from "../assets/imp.svg";
import plan from "../assets/plan.svg";
import sign from "../assets/sign.svg";
import plus from "../assets/plus.svg";
// import circle from '../assets/circle.svg'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const Sidebar = () => {
  const data = {
    labels: ["Pending", "Done"],
    datasets: [
      {
        data: [7, 4], // Example values: 7 pending, 4 done
        backgroundColor: ["#22c55e", "#14532d"], // Colors for each section
        borderWidth: 1,
      },
    ],
  };

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 h-screen p-4 ">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src={profile}
          alt="Profile"
          className="w-[118px] h-[118px] rounded-[2947.05px]"
        />
        <h2 className="mt-2 text-lg font-semibold text-[#1B281B] ">
          Hey, ABCD
        </h2>
      </div>

      {/* Navigation Links */}
      <nav className=" w-[240px] h-[248px] py-[24px] bg-[#FBFDFC]">
        <ul className=" w-[240px] h-[40px] px-[16px] py-[8px] gap-[16px] rounded-[8px]">
          <li>
            <a
              href="#"
              className="flex items-center p-2  hover:bg-[rgba(53,121,55,0.16)] hover:text-[rgba(53,121,55,0.16)]"
            >
              <img src={cal} alt="cal" className="h-[24px] w-[24px]" />
              <span className="text-[#1B281B] ml-4 font-semibold text-lg">
                All Tasks
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 bg-[rgba(53,121,55,0.16)] rounded-md"
            >
              <img src={task} alt="task" className="h-[24px] w-[24px]" />
              <span className="text-[#357937] ml-4 font-semibold text-lg w-[42px] h-[20px]">
                Today
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-md  hover:bg-[rgba(53,121,55,0.16)] hover:text-[rgba(53,121,55,0.16)]"
            >
              <img src={imp} alt="star" className="h-[24px] w-[24px]" />
              <span className="text-[#1B281B] ml-4 font-semibold text-lg w-[69px] h-[20px]">
                Important
              </span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="flex items-center p-2 hover:bg-[rgba(53,121,55,0.16)] hover:text-[rgba(53,121,55,0.16)]"
            >
              <img src={plan} alt="book plan" className="h-[24px] w-[24px]" />
              <span className="text-[#1B281B] ml-4 font-semibold text-lg w-[55px] h-[20px]">
                Planned
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 hover:bg-[rgba(53,121,55,0.16)] hover:text-[rgba(53,121,55,0.16)] "
            >
              <img src={sign} alt="user image" className="h-[24px] w-[24px]" />
              <span className="text-[#1B281B] ml-4 font-semibold text-lg w-">
                Assigned to me
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Add List Button */}
      <div className="flex items-center space-x-2 bg-white shadow-md rounded-md p-3 cursor-pointer hover:bg-gray-50 transition w-[240px] h-[88px]">
        <div className="w-[240px] h-[40px] p-[8px_16px] gap-[16px] rounded-tl-[8px] ">
          <span className="text-2xl font-bold text-gray-700">+</span>
          <span className="text-[#1B281B] font-medium">Add list</span>
        </div>
      </div>

      {/* Task Card */}
      <div className="bg-white shadow-lg rounded-md p-4 w-64">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Today Tasks</h2>
          <span className="text-gray-400 text-sm">ℹ️</span>
        </div>
        <h3 className="text-4xl font-bold mb-4">11</h3>
        <div className="flex justify-center items-center mb-4">
          <Doughnut data={data} options={{ cutout: "70%" }} />
        </div>
        <div className="flex justify-around text-sm">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 bg-green-500 rounded-full"></span>
            <span>Pending</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 bg-green-900 rounded-full"></span>
            <span>Done</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
