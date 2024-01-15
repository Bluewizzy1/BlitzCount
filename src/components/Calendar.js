import React, { useState, useEffect, useRef } from "react";
import { format, getDaysInMonth, getDay } from "date-fns";

import CalendarDay from "./CalendarDay";

const Calendar = (props) => { // celebrants
  const calenderElement = useRef();

  const currentMonthPosition = format(new Date(), "M");
  const currentYear = +format(new Date(), "y");

  const [monthPosition, setMonthPosition] = useState(+currentMonthPosition);
  const [monthCelebrants, setMonthCelebrants] = useState([]);
  const [year, setYear] = useState(currentYear);
  const [popupPosition, setPopupPosition] = useState({
    x: 0,
    y: 0,
    active: false,
  });
  const [currentCelebrants, setCurrentCelebrants] = useState([]);

  useEffect(() => {
    const month = monthsList[monthPosition - 1];
    setMonthCelebrants(
      props.celebrants.filter((celebrant) => month === celebrant.birthMonth)
    );
  }, [monthPosition]);

  function getPreDateGap() {
    const monthIndex = monthPosition - 1;
    const dayOfWeek = getDay(new Date(year, monthIndex, 1));
    return dayOfWeek;
  }

  function daysInMonth() {
    const monthIndex = monthPosition - 1;
    const days = getDaysInMonth(new Date(year, monthIndex));
    return days;
  }

  function monthChangeHnd(e) {
    const value = e.target.value;
    setMonthPosition(value);
  }

  function yearChangeHnd(e) {
    const value = e.target.value;
    setYear(value);
  }

  /**
   *
   * @param {MouseEvent} e
   * @param {{}[]} celebrants
   */
  function dayMouseOverHnd(e, celebrants) {
    if (!celebrants.length) {
      setPopupPosition((prev) => ({
        ...prev,
        active: false,
      }));
      return;
    }
    let mouseX =
      e.clientX - calenderElement.current.getBoundingClientRect().left;

    setCurrentCelebrants(celebrants);
    setPopupPosition({
      x: parseInt(mouseX),
      y: parseInt(e.currentTarget.offsetTop + 50 - 5),
      active: true,
    });
  }

  const monthsList = props.months;
  return (
    <div
      ref={calenderElement}
      className="relative shadow-lg w-[350px] bg-white m-auto text-[14px]"
    >
      <div className="bg-[#FF0756] h-[50px] text-white flex items-center p-[10px] rounded-[10px_10px_0_0]">
        <div className="basis-1/2 font-semibold">Birthday Calender</div>
        <div className="basis-1/2 flex gap-[10px]">
          <select
            value={monthPosition}
            className="basis-1/2 border-0 border-white border-b-[1px] bg-[#FF0756]"
            onChange={monthChangeHnd}
          >
            {monthsList.map((month, index) => (
              <option value={index + 1} key={index}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={year}
            className="basis-1/2 border-0 border-white border-b-[1px] bg-[#FF0756]"
            onChange={yearChangeHnd}
          >
            <option>{currentYear - 1}</option>
            <option>{currentYear}</option>
            <option>{currentYear + 1}</option>
          </select>
        </div>
      </div>
      <div className="border border-[#CECECE]">
        <div className="grid grid-cols-7">
          <div className="flex justify-center items-center w-[50px] h-[50px] border-0 border-[#CECECE] border-b-[1px] border-r-[1px]">
            SUN
          </div>
          <div className="flex justify-center items-center w-[50px] h-[50px] border-0 border-[#CECECE] border-b-[1px] border-r-[1px]">
            MON
          </div>
          <div className="flex justify-center items-center w-[50px] h-[50px] border-0 border-[#CECECE] border-b-[1px] border-r-[1px]">
            TUE
          </div>
          <div className="flex justify-center items-center w-[50px] h-[50px] border-0 border-[#CECECE] border-b-[1px] border-r-[1px]">
            WED
          </div>
          <div className="flex justify-center items-center w-[50px] h-[50px] border-0 border-[#CECECE] border-b-[1px] border-r-[1px]">
            THUR
          </div>
          <div className="flex justify-center items-center w-[50px] h-[50px] border-0 border-[#CECECE] border-b-[1px] border-r-[1px]">
            FRI
          </div>
          <div className="flex justify-center items-center w-[50px] h-[50px] border-0 border-[#CECECE] border-b-[1px]">
            SAT
          </div>
          {/* Pre-date Space */}
          {Array.from(Array(getPreDateGap())).map((item, index) => (
            <CalendarDay
              day={""}
              key={index}
              celebrants={[]}
              mouseOverHnd={dayMouseOverHnd}
            />
          ))}

          {/* dates */}
          {Array.from(Array(daysInMonth())).map((item, index) => (
            <CalendarDay
              day={index + 1}
              key={index}
              celebrants={monthCelebrants.filter(
                (celebrant) => +celebrant.birthDay === index + 1
              )}
              mouseOverHnd={dayMouseOverHnd}
            />
          ))}

          {/* Post-date Space */}
          {Array.from(Array(42 - (getPreDateGap() + daysInMonth()))).map(
            (item, index) => (
              <CalendarDay
                day={""}
                key={index}
                celebrants={[]}
                mouseOverHnd={dayMouseOverHnd}
              />
            )
          )}
        </div>
      </div>

      <div
        style={{
          top: popupPosition.y + "px",
          left: popupPosition.x + "px",
          display: popupPosition.active ? "flex" : "none",
          transform: "translateX(-50%)",
        }}
        className="absolute flex-col w-max p-[5px] divide-y shadow-md bg-white border border-[#CECECE] border-b-[1px] border-r-[1px] rounded-[10px]"
      >
        {currentCelebrants.map((celebrant, index) => (
          <button
            className="h-[40px] flex py-[5px] gap-[5px] items-center"
            key={index}
          >
            <img
              src={celebrant.imgURL}
              alt=""
              className="w-[30px] h-[30px] rounded-full"
            />
            <div className="font-bold">{celebrant.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
