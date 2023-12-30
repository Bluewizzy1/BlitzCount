import mainlogo from '../images/mainlogo.png'
import eye from '../images/eye.png'
import user from '../images/user.png'

import Input from "./../components/Input";

function Sign() {
  return (
    <div>
      <div className='bg-white w-[360px] h-[746px] m-auto mt-5'>

        <div>
          <img src={mainlogo} alt="mainlogo" className='p-8' />
        </div>

        <div className='ml-[30px]'>
          <h3 className=' mt-[-20px] text-[#515151] font-semibold'>Welcome</h3>
          <h3 className='text-[#515151]' >To <span className='text-[#0A5D4A] font-architects-daughter'>Blitz Count</span></h3>
          <h6 className='text-[#515151] text-sm font-inter'>Register to continue.</h6>
        </div>

        <div>
          <Input label='Full Name' />
          <Input label='Email' />
          <Input label='Password' isPassword={true}/>
          <Input label='Confirm Password' isPassword={true} />
        </div>

        <div className='flex  mt-[25px] ml-[30px]'>
          <img src={user} alt='user' />
          <h4 className='ml-[20px] text-[#515151] text-[14px] font-inter mt-1'>Upload your Picture</h4>
        </div>

        <div>
          <button className='mt-[25px] w-[300px] h-[40px] bg-[#F35E05] ml-[30px] rounded-[10px] text-[14px] text-white'>SUBMIT</button>
          <h6 className='ml-[60px] mt-[30px] text-[14px] text-[#515151] '>Already have an account? <span className='text-[#F35E05] text-[14px]'>Login here</span></h6>
          <h6 className='text-center mt-[40px] text-[#515151] text-[14px] font-inter'>Copyright @ <span className='text-[#0A5D4A] font-architects-daughter'>Blitz Count</span></h6>
        </div>

      </div>
    </div>
  );
}

export default Sign;
