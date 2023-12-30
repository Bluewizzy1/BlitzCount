import logo from '../images/logo.png'
import user from '../images/user.png'
import Ellipse from '../images/Ellipse.png'


function Topbar() {
    return (
      <div>
        <div className='bg-white w-[360px] h-[60px] flex items-center justify-between m-auto border-b-[1px] border-b-[#F35E05] mt-1'>
            <img src={logo} alt='logo' className='ml-[30px]' />
            <img src={Ellipse} alt='Ellipse' className='mr-[30px]' />
            <img src={user} alt='user' className='ml-[290px] absolute' />
        </div>
      </div>
    );
  }
  
  export default Topbar;
  