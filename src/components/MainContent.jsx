import React from "react";
import notification from "../assets/notification.svg";
import arrow from "../assets/arrow.svg";
import note from "../assets/note.svg";

const MainContent = () => {
  return (
    <main className="w-[1056px] h-[952px] p-[24px_0px] gap-[16px] bg-[#FBFDFC] ">
      <div className="w-[1020px] h-[904px]">
        <h1 className="w-[1020px] h-[32px] p-[4px_0px] border-t ">
          <span className="w-[58px] h-[24px]">To Do</span>
        </h1>
        <div className="flex items-center w-[1020px] h-[178px] p-[16px_0px] gap[8px] border-t-[1.5px] bg-gradient-to-t from-[#3579371A] to-[#D0FFD21A] border-[#496E4B33]">
          <div className="w-[667px] h-[146px] p-[42px_20px_0px_20px] gap-[48px] ">
            <span className="w-[74px] h-[20px] font-[Outfit] text-[15px] leading-[20px] font-normal text-[#1B281BB8]">
              Add A Task
            </span>
            <div className="w-[627px] h-[36px] flex items-center  gap-[16px]">
              <img
                src={notification}
                alt="notification icon"
                className="w-[24px] h-[24px] top-[7px]"
              />
              <img
                src={arrow}
                alt="Arrow icon"
                className="w-[24px] h-[24px] top-[7px] left-[50px] "
              />
              <img
                src={note}
                alt="Calender icon"
                className="w-[24px] h-[24px] top-[7px] left-[100px]"
              />
              <button className="flex items-center justify-center w-[104px] h-[36px] absolute left-[893px] p-[8px_16px] gap-[16px] rounded-tl-[8px] bg-[#35793729] ml-72">
                <span className="flex  justify-end font-[Outfit] text-[15px] font-medium leading-[20px] w-[70px] h-[20px] text-[#357937]">
                  ADD TASK
                </span>
              </button>
            </div>
          </div>
        </div>

        <ul>
          <li className=" flex justify-between p-[16px_32px_16px_0px] border-t-[1.5px] w-[1020px] h-[80px] border-t-[#496E4B33]">
            <div className="flex items-center space-x-3 w-[365.5px] h-[48px] ">
              <div className="w-[48px] h-[48px] p-[4px]">
                <input
                  type="checkbox"
                  className=" w-[40px] h-[40px] p-[11px] rounded-[100px]  accent-green-500"
                />
              </div>
              <span className="w-[90px] h-[20px] font-[Outfit] text-[15px] font-normal leading-[20px] text-[#1B281B] ">
                Buy groceries
              </span>
            </div>
            <button className="w-[24px] h-[24px]">⭐</button>
          </li>

          <li className=" flex justify-between p-[16px_32px_16px_0px] border-t-[1.5px] w-[1020px] h-[80px] border-t-[#496E4B33]">
            <div className="flex items-center space-x-3 w-[388px] h-[48px] ">
              <div className="w-[48px] h-[48px] p-[4px]">
                <input
                  type="checkbox"
                  className=" w-[40px] h-[40px] p-[11px] rounded-[100px]  accent-green-500"
                />
              </div>
              <span className="w-[135px] h-[20px] font-[Outfit] text-[15px] font-normal leading-[20px] text-[#1B281B] ">
                Finish project report
              </span>
            </div>
            <button className="w-[24px] h-[24px]">⭐</button>
          </li>

          <li className=" flex justify-between p-[16px_32px_16px_0px] border-t-[1.5px] w-[1020px] h-[80px] border-t-[#496E4B33]">
            <div className="flex items-center space-x-3 w-[364px] h-[48px] ">
              <div className="w-[48px] h-[48px] p-[4px]">
                <input
                  type="checkbox"
                  className=" w-[40px] h-[40px] p-[11px] rounded-[100px]  accent-green-500"
                />
              </div>
              <span className="w-[87px] h-[20px] font-[Outfit] text-[15px] font-normal leading-[20px] text-[#1B281B] ">
                Call the bank
              </span>
            </div>
            <button className="w-[24px] h-[24px]">⭐</button>
          </li>

          <li className=" flex justify-between p-[16px_32px_16px_0px] border-t-[1.5px] w-[1020px] h-[80px] border-t-[#496E4B33]">
            <div className="flex items-center space-x-3 w-[419.5px] h-[48px] ">
              <div className="w-[48px] h-[48px] p-[4px]">
                <input
                  type="checkbox"
                  className=" w-[40px] h-[40px] p-[11px] rounded-[100px]  accent-green-500"
                />
              </div>
              <span className="w-[198px] h-[20px] font-[Outfit] text-[15px] font-normal leading-[20px] text-[#1B281B] ">
                Schedule dentist appointment
              </span>
            </div>
            <button className="w-[24px] h-[24px]">⭐</button>
          </li>

          <li className=" flex justify-between p-[16px_32px_16px_0px] border-t-[1.5px] w-[1020px] h-[80px] border-t-[#496E4B33]">
            <div className="flex items-center space-x-3 w-[380] h-[48px] ">
              <div className="w-[48px] h-[48px] p-[4px]">
                <input
                  type="checkbox"
                  className=" w-[40px] h-[40px] p-[11px] rounded-[100px]  accent-green-500"
                />
              </div>
              <span className="w-[119px] h-[20px] font-[Outfit] text-[15px] font-normal leading-[20px] text-[#1B281B] ">
                Plan weekend trip
              </span>
            </div>
            <button className="w-[24px] h-[24px]">⭐</button>
          </li>
        </ul>

        {/* Completed Tasks */}
        <div>
          <h2 className="w-[74px] h-[20px] font-[Outfit] text-[15px] font-bold leading-[20px] text-[#1B281B]">
            Completed
          </h2>
          <ul className="w-[1020px] h-[274px] py-[25px]">
            <li className="flex justify-between w-[1020px] h-[56px] p-[16px_32px_16px_0px] border-t-[1.5px] border-t-[#496E4B33]">
              <div className="flex items-center space-x-3 w-[362px] h-[48px]">
                <div className="w-[48px] h-[48px] p-[4px]">
                  <div className="w-[40px] h-[40px] p-[11px] rounded-[100px]">
                    <input
                      type="checkbox"
                      className="w-[24px] h-[24px] accent-green-500"
                      checked
                      readOnly
                    />
                  </div>
                </div>
                <span className="line-through text-[#1B281B] w-[83px] h-[20px] font-[Outfit] text-[15px] font-bold leading-[20px]">
                  Read a book
                </span>
              </div>
              <button className="w-[24px] h-[24px]">⭐</button>
            </li>

            <li className="flex justify-between w-[1020px] h-[56px] p-[16px_32px_16px_0px] border-t-[1.5px] border-t-[#496E4B33]">
              <div className="flex items-center space-x-3 w-[373.5px] h-[48px]">
                <div className="w-[48px] h-[48px] p-[4px]">
                  <div className="w-[40px] h-[40px] p-[11px] rounded-[100px]">
                    <input
                      type="checkbox"
                      className="w-[24px] h-[24px] accent-green-500"
                      checked
                      readOnly
                    />
                  </div>
                </div>
                <span className="line-through text-[#1B281B] w-[106px] h-[20px] font-[Outfit] text-[15px] font-bold leading-[20px]">
                  Clean the house
                </span>
              </div>
              <button className="w-[24px] h-[24px]">⭐</button>
            </li>

            <li className="flex justify-between w-[1020px] h-[56px] p-[16px_32px_16px_0px] border-t-[1.5px] border-t-[#496E4B33]">
              <div className="flex items-center space-x-3 w-[392px] h-[48px]">
                <div className="w-[48px] h-[48px] p-[4px]">
                  <div className="w-[40px] h-[40px] p-[11px] rounded-[100px]">
                    <input
                      type="checkbox"
                      className="w-[24px] h-[24px] accent-green-500"
                      checked
                      readOnly
                    />
                  </div>
                </div>
                <span className="line-through text-[#1B281B] w-[143px] h-[20px] font-[Outfit] text-[15px] font-bold leading-[20px]">
                  Prepare presentation
                </span>
              </div>
              <button className="w-[24px] h-[24px]">⭐</button>
            </li>

            <li className="flex justify-between w-[1020px] h-[56px] p-[16px_32px_16px_0px] border-t-[1.5px] border-t-[#496E4B33]">
              <div className="flex items-center space-x-3 w-[362px] h-[48px]">
                <div className="w-[48px] h-[48px] p-[4px]">
                  <div className="w-[40px] h-[40px] p-[11px] rounded-[100px]">
                    <input
                      type="checkbox"
                      className="w-[24px] h-[24px] accent-green-500"
                      checked
                      readOnly
                    />
                  </div>
                </div>
                <span className="line-through text-[#1B281B] w-[106px] h-[20px] font-[Outfit] text-[15px] font-bold leading-[20px]">
                  Update blog
                </span>
              </div>
              <button className="w-[24px] h-[24px]">⭐</button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
