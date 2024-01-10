import Celebrants from "../components/Celebrants";
import Copyright from "../components/Copyright";

function Dashboard() {
  return (
    <div >
      <div className='bg-white w-[360px] h-[2510px] m-auto mt-5'>

        <div className="w-[360px] h-[186px] bg-[url('/src/images/birthdaybgimg.png')]"> </div>

        <div className="h-[423px] w-[350px] bg-red-100 m-auto rounded-[10px]"></div>

        <div><button className='w-[116px] mt-5 h-[39px] bg-[#F35E05] ml-[230px] rounded-[5px] text-[14px] text-white'>Add Celebrant</button></div>

        <Celebrants/>
        <Celebrants/>
        <Celebrants/>
        <Copyright/>

        
        </div>
    </div>
  );
}

export default Dashboard;
