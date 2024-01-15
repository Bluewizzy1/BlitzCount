import { useEffect, useState } from "react";
import menu from "../images/menu.png";
import { format, differenceInSeconds } from "date-fns";

const CelebrantCard = (props) => {
  // imgURL, name, birthDay, monthIndex
  const currentMonthPosition = +format(new Date(), "M");
  const currentMonthIndex = currentMonthPosition - 1;
  const currentYear = +format(new Date(), "y");
  const currentDay = +format(new Date(), "d");
  const celebrantDate = new Date(
    currentYear,
    props.monthIndex,
    +props.birthDay
  );

  const [duration, setDuration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setInterval(() => {
      countDown()
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function countDown() {
    let diffInSeconds = 0;
    if (currentMonthIndex > props.monthIndex) {
      const celebrantNextDate = new Date(
        currentYear + 1,
        props.monthIndex,
        +props.birthDay
      );

      diffInSeconds = differenceInSeconds(celebrantNextDate, new Date());
    } else if (currentMonthIndex === props.monthIndex) {
      if (currentDay > props.birthDay) {
        const celebrantNextDate = new Date(
          currentYear + 1,
          props.monthIndex,
          +props.birthDay
        );

        diffInSeconds = differenceInSeconds(celebrantNextDate, new Date());
      } else {
        diffInSeconds = differenceInSeconds(celebrantDate, new Date());
      }
    } else {
      diffInSeconds = differenceInSeconds(celebrantDate, new Date());
    }

    const days = calcDays(diffInSeconds);
    const hours = calcHours(days, diffInSeconds);
    const minutes = calcMinutes(days, hours, diffInSeconds);
    const seconds = calcSeconds(days, hours, minutes, diffInSeconds);
    setDuration({ days, hours, minutes, seconds });
  }

  function calcDays(seconds) {
    let value = seconds / 86400;

    return parseInt(value);
  }
  function calcHours(days, seconds) {
    let daysValue = days * 86400;
    let value = (seconds - daysValue) / 3600;

    return parseInt(value);
  }
  function calcMinutes(days, hours, seconds) {
    let daysValue = days * 86400;
    let hoursValue = hours * 3600;
    let value = (seconds - (daysValue + hoursValue)) / 60;

    return parseInt(value);
  }
  function calcSeconds(days, hours, minutes, seconds) {
    let daysValue = days * 86400;
    let hoursValue = hours * 3600;
    let minutesValue = minutes * 60;
    let value = seconds - (daysValue + hoursValue + minutesValue);

    return parseInt(value);
  }

  return (
    <div className="shadow-md max-w-[300px] rounded-[10px] border border-[#CECECE] p-[10px] pb-[30px]">
      <img src={props.imgURL} alt="" className="rounded-[10px]" />
      <div className="relative flex flex-col gap-[10px] leading-none justify-between px-[20px] mt-[20px] mb-[18px]">
        <h2 className="text-[#515151] font-bold font-inter">{props.name}</h2>
        <p className="text-[#515151] text-[14px] font-normal font-inter">
          {format(celebrantDate, "do LLLL, y - EEEE")}
        </p>
        <div className="absolute right-0 w-[30px] flex justify-center">
          <img src={menu} alt="menu" className="" />
        </div>
      </div>

      <div className="flex space-x-0 font-inter text-[#515151] text-center">
        <div className="rounded-l-md w-[70px] h-[50px] bg-[#F2F2F2]">
          <div className="flex justify-center mt-1 text-[14px] font-semibold">
            {duration.days}
          </div>
          <h2 className="flex justify-center text-[12px] font-normal">Days</h2>
        </div>
        <div className="w-[70px] h-[50px] border-l-2 border-[#CECECE] bg-[#F2F2F2]">
          <div className="flex justify-center mt-1 text-[14px] font-semibold">
            {duration.hours}
          </div>
          <h2 className="flex justify-center text-[12px] font-normal">Hours</h2>
        </div>
        <div className="w-[70px] h-[50px] border-l-2 border-[#CECECE] gap-x-0 bg-[#F2F2F2]">
          <div className="flex justify-center mt-1 text-[14px] font-semibold">
            {duration.minutes}
          </div>
          <h2 className="flex justify-center text-[12px] font-normal">
            Minutes
          </h2>
        </div>
        <div className="rounded-r-md w-[70px] border-l-2 border-[#CECECE] h-[50px] bg-[#F2F2F2]">
          <div className="flex justify-center mt-1 text-[14px] font-semibold">
            {duration.seconds}
          </div>
          <h2 className="flex justify-center text-[12px] font-normal ">
            Seconds
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CelebrantCard;
