import CelebrantCard from "../components/CelebrantCard";
import Copyright from "../components/Copyright";
import dashBanner from "../images/dash_banner.svg";
import celebrantMock from "../images/Celebrantcard.png";
import Calendar from "../components/Calendar";

// imgURL, name, birthMonth, birthDay
const sampleCelebrants = [
  {
    imgURL:
      "./images/Celebrantcard.png",
    name: "John Doe",
    birthMonth: "January",
    birthDay: "1",
  },
  {
    imgURL:
      "./images/Celebrantcard.png",
    name: "Scarlett Red",
    birthMonth: "January",
    birthDay: "3",
  },
  {
    imgURL: 
      "./images/Celebrantcard.png",
    name: "Red Doe",
    birthMonth: "February",
    birthDay: "2",
  },
  {
    imgURL:
      "./images/Celebrantcard.png",
    name: "John Scarlett",
    birthMonth: "February",
    birthDay: "2",
  },
  {
    imgURL:
      "./images/Celebrantcard.png",
    name: "Scarlett John",
    birthMonth: "February",
    birthDay: "2",
  },
];

function Dashboard() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="">
      <img src={dashBanner} alt="" className="w-full mb-[30px]" />

      <Calendar celebrants={sampleCelebrants} months={months} />

      <div className="my-[30px] pr-[16px] md:pr-[30px] text-right">
        <button className="p-[10px] bg-[#F35E05] rounded-[5px] text-[14px] text-white">
          Add Celebrant
        </button>
      </div>

      <div className="flex flex-col gap-[30px] items-center px-[30px]">
        {sampleCelebrants.map((celebrant, index) => (
          <CelebrantCard
            key={index}
            imgURL={celebrant.imgURL}
            name={celebrant.name}
            birthDay={celebrant.birthDay}
            monthIndex={ months.indexOf(celebrant.birthMonth)}
          />
        ))}
      </div>

      <Copyright />
    </div>
  );
}

export default Dashboard;
