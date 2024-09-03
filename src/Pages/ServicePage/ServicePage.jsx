import { AiFillDollarCircle } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import bg from "../../assets/images/bg.jpg";
import Cards from "../../components/Cards/Cards";
import FlatList from "../../components/FlatList/FlatList";
import Testimonials from "../../components/Testimonials/Testimonials";

const ServicePage = () => {
  return (
    <div>
      <div className="relative mb-5 md:mb-40">
        <div className="h-80">
          <img src={bg} className="w-full h-full object-cover" />
        </div>
        <div className="px-5 static md:absolute md:top-1/3 w-full  flex justify-center items-center">
          <div className="bg-white p-6 shadow-md rounded-lg w-full md:w-4/5 mx-auto mt-5 md:mt-0">
            {/* Tabs */}
            <div className="flex gap-1 md:gap-4 border-b mb-4">
              {["Buy", "Rent", "PG", "Plot", "Commercial"].map((tab, index) => (
                <button
                  key={index}
                  className={`pb-2 px-4 text-sm font-medium ${
                    index === 0
                      ? "border-b-2 border-[#0059B1] text-[#0059B1]"
                      : "text-gray-600"
                  } hover:text-blue-600`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search Properties"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:border-[#0059B1]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>

            {/* Filter Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <span className="text-orange-500 ">
                    <IoLocationOutline className="size-5" />
                  </span>{" "}
                  Your Location
                </label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400">
                  <option>Select Location</option>
                </select>
              </div>
              <div>
                <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <span className="text-orange-500">
                    <BiHomeCircle className="size-5" />
                  </span>{" "}
                  Property Type
                </label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400">
                  <option>Select Type</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <span className="text-orange-500">
                    <AiFillDollarCircle className="size-5" />
                  </span>{" "}
                  Budget
                </label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400">
                  <option>Select Budget</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="btn w-full bg-[#0059B1] rounded border-none hover:text-black text-lg text-[#FFFFFF]">
              <IoSearch className="size-6" />
              Find Property
            </button>
          </div>
        </div>
      </div>
      <FlatList />
      <div className="px-5 md:px-10 lg:px-20">
        <Cards />
      </div>
      <div className="px-5 md:px-10 lg:px-20 pb-5">
        <Cards />
      </div>
      <div className="px-5 md:px-10 lg:px-20 pb-5">
        <Testimonials />
      </div>
    </div>
  );
};

export default ServicePage;
