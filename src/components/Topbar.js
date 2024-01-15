import logo from "../images/logo.png";
import user from "../images/user.png";

function Topbar() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between px-[16px] py-[5px] border-b-[1px] border-b-[#F35E05] max-w-maxBoundary w-full mx-auto">
        <img src={logo} alt="logo" className="w-[100px]" />
        <div className="border-[1px] rounded-full w-[50px] h-[50px] flex justify-center items-center">
          <img src={user} alt="user" className="w-[30px]" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
