import { PiArrowCircleDownLight } from "react-icons/pi";

const FlatList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-10 lg:px-20 my-4 md:my-9">
      <div className="bg-[#FDF0E7]  p-5">
        <h2 className="text-[#D95D0F] font-bold text-4xl">2k+</h2>
        <p className="text-[#1F2937] font-normal text-base">New Flat Listed</p>
        <div className="flex justify-between items-center">
          <button className="text-[#EE6611] underline text-base">
            View all
          </button>
          <button className="text-[#EE6611] ">
            <PiArrowCircleDownLight className="size-8" />
          </button>
        </div>
      </div>
      <div className="bg-[#ECF5FF]  p-5">
        <h2 className="text-[#0051A1] font-bold text-4xl">2k+</h2>
        <p className="text-[#1F2937] font-normal text-base">New Flat Listed</p>
        <div className="flex justify-between items-center">
          <button className="text-[#0059B1] underline text-base">
            View all
          </button>
          <button className="text-[#0059B1] ">
            <PiArrowCircleDownLight className="size-8" />
          </button>
        </div>
      </div>
      <div className="bg-[#FDF0E7]  p-5">
        <h2 className="text-[#D95D0F] font-bold text-4xl">2k+</h2>
        <p className="text-[#1F2937] font-normal text-base">New Flat Listed</p>
        <div className="flex justify-between items-center">
          <button className="text-[#EE6611] underline text-base">
            View all
          </button>
          <button className="text-[#EE6611] ">
            <PiArrowCircleDownLight className="size-8" />
          </button>
        </div>
      </div>
      <div className="bg-[#ECF5FF]  p-5">
        <h2 className="text-[#0051A1] font-bold text-4xl">2k+</h2>
        <p className="text-[#1F2937] font-normal text-base">New Flat Listed</p>
        <div className="flex justify-between items-center">
          <button className="text-[#0059B1] underline text-base">
            View all
          </button>
          <button className="text-[#0059B1] ">
            <PiArrowCircleDownLight className="size-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlatList;
