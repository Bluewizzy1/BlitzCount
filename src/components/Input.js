import eye from '../images/eye.png'

function Input(props) {
    return (
    <div className='mt-[20px] ml-[30px]'>
        <label className='text-[#515151] text-sm font-inter font-semibold'>{props.label}</label><br />
        {props.isPassword
            ? <img src={eye} alt="eye" className="absolute ml-[270px] mt-3.5" />
            : ""
        }
        <input type="text" className='border-[2px] w-[300px] h-[40px] rounded-[10px]' />
      </div>
    );
  }
  
  export default Input;
  