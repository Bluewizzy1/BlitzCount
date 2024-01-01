import mainlogo from '../images/mainlogo.png';
import goggle from '../images/goggle.png';
import Input from "./../components/Input";

function App() {
  return (
    <div className="bg-[#D2D2D2] ">
        <div className='bg-white w-[360px] h-[632px] m-auto mt-5'>

<div>
  <img src={mainlogo} alt="mainlogo" className='p-8' />
</div>

<div className='ml-[30px]'>
  <h3 className=' mt-[-20px] text-[#515151] font-semibold'>Welcome</h3>
  <h3 className='text-[#515151]' >To <span className='text-[#0A5D4A] font-architects-daughter'>Blitz Count</span></h3>
  <h6 className='text-[#515151] text-sm font-inter'>Register to continue.</h6>
</div>

<div>
  <Input label='Email' />
  <Input label='Password' isPassword={true}/>
  <h6><span className='text-[#F35E05] text-[14px] ml-[185px]'>Forgot your password?</span></h6>
</div>

        <div>
        <button className='mt-[25px] w-[300px] h-[40px] bg-[#F35E05] ml-[30px] rounded-[10px] text-[14px] text-white'>LOGIN</button>

        <div className='flex mt-5 justify-center'>
            <hr className='w-[150.035px] h-[1px]'></hr><span className='mt-[-12px] text-sm text-[#515151]'>or</span>
            <hr className='w-[150.035px] h-[1px]'></hr>
        </div>

        <button className='mt-[20px] w-[300px] h-[40px] bg-white ml-[30px] border-[2px] border-[#F35E05] rounded-[10px] text-[14px] text-white'>LOGIN</button>
        <img src={goggle} alt="goggle" className="absolute ml-[110px] mt-[-30px] "/>
        <h6 className="absolute ml-[140px] mt-[-30px] text-[#515151] font-inter text-sm font-semibold">Login with Goggle</h6>
        </div>

<div>
  <h6 className='ml-[60px] mt-[30px] text-[14px] text-[#515151] '>Don't have an account? <span className='text-[#F35E05] text-[14px]'>Register here</span></h6>
  <h6 className='text-center mt-[40px] text-[#515151] text-[14px] font-inter'>Copyright @ <span className='text-[#0A5D4A] font-architects-daughter'>Blitz Count</span></h6>
</div>

</div>
    </div>
  );
}

export default App;
// 