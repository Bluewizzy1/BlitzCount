import React from "react";

const CalendarDay = (props) => {
  // day, celebrants, mouseOverHnd, mouseOutHnd
  return (
    <div
      onMouseOver={(e) => props.mouseOverHnd(e, props.celebrants)}
      // onMouseLeave={(e) => props.mouseOutHnd(e, props.celebrants)}
      className="relative flex justify-center items-center w-[50px] h-[50px] border-0 border-[#CECECE] border-b-[1px] border-r-[1px]"
    >
      {props.celebrants.length ? (
        <>
          <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full border border-[#F35E05]">
            {props.day}
          </div>
          <div className="text-[12px] text-white flex justify-center items-center w-[15px] h-[15px] bg-[#0A5D4A] rounded-full absolute top-[3px] right-[6px]">
            {props.celebrants.length}
          </div>
        </>
      ) : (
        props.day
      )}
    </div>
  );
};

export default CalendarDay;
