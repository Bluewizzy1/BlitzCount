import menu from '../images/menu.png'

const Celebrants = () => {
  return (
    <div className="shadow-md w-[300px] h-[368px] rounded-[10px] border-[1px] border-[#CECECE] m-auto mt-5">
          <div className="w-[280px] h-[200px] m-2 bg-[url('/src/images/Celebrantcard.png')]"></div>
          <div className='flex justify-between mt-[20px]'>
          <h2 className="text-[#515151] font-bold ml-[14px] font-inter">JOHN DOE</h2>
          <img src={menu} alt="menu" className='mr-[27px]'/>
          </div>
          <p className="text-[#515151] font-normal ml-[14px] mb-[18px] font-inter">16 January, 2023 - Monday</p>

          <div className="mr-3 flex space-x-0 font-inter text-[#515151] text-center">
            <div className="rounded-l-md w-[70px] h-[50px] bg-[#F2F2F2] ml-[10px]">
              <h1 className="flex justify-center mt-1 text-[14px] font-semibold">300</h1>
              <h2 className="flex justify-center text-[12px] font-normal">Days</h2>
            </div>
            <div className="w-[70px] h-[50px] border-l-2 border-[#CECECE] bg-[#F2F2F2] ml-[10px]">
              <h1 className="flex justify-center mt-1 text-[14px] font-semibold">20</h1>
              <h2 className="flex justify-center text-[12px] font-normal">Hours</h2>
            </div>
            <div className="w-[70px] h-[50px] border-l-2 border-[#CECECE] gap-x-0 bg-[#F2F2F2] ml-[10px]">
              <h1 className="flex justify-center mt-1 text-[14px] font-semibold">59</h1>
              <h2 className="flex justify-center text-[12px] font-normal">Minutes</h2>
            </div>
            {/* <hr className="bg-[#D9D9D9] w-1 h-[50px]"></hr> */}
            <div className="rounded-r-md w-[70px] border-l-2 border-[#CECECE] h-[50px] bg-[#F2F2F2] ml-[10px]">
              <h1 className="flex justify-center mt-1 text-[14px] font-semibold">23</h1>
              <h2 className="flex justify-center text-[12px] font-normal ">Seconds</h2>
            </div>
          </div>
        </div>
  )
}

export default Celebrants