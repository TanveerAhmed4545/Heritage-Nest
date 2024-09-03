import { FaPlay } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import img1 from "../../../assets/images/bg24.jpg";
import img2 from "../../../assets/images/bg25.jpg";

const PropertyThree = () => {
  return (
    <div className="p-5 lg:pb-24 lg:px-20 flex gap-5 flex-col lg:flex-row">
      <div className="lg:w-1/2 relative">
        <div className="lg:w-[450px] lg:h-[400px] rounded-lg relative">
          <img src={img1} className="w-full h-full rounded-lg" />
          <div className="absolute hidden z-10 bottom-28 -right-6 size-14 rounded-full bg-[#0059B1] lg:flex justify-center items-center ">
            <FaPlay className="text-white text-lg" />
          </div>
        </div>

        <div className="w-1/2 lg:w-[450px] lg:h-[220px]  absolute -right-5 lg:right-5 -bottom-3 lg:-bottom-20 rounded-lg  ">
          <img src={img2} className="w-full h-full rounded-lg" />
        </div>
      </div>
      <div className="lg:w-1/2  ">
        <div className="flex gap-4 items-center pb-6">
          <div className="w-12 h-1 bg-[#F06711]"></div>
          <h3 className="text-lg text-[#F06711] font-bold">Property buying</h3>
        </div>
        <h1 className="text-4xl font-bold">
          Efficient and Transparent <br />
          Home Buying Solutions
        </h1>

        <p className="py-6 text-[#667085] text-base ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </p>
        <button className="btn bg-[#ECF5FF] rounded border-none text-lg text-[#0059B1]">
          <IoSearch className="size-6" />
          Find Property
        </button>
      </div>
    </div>
  );
};

export default PropertyThree;
