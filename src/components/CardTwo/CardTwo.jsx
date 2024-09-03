import { FaRegImage } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import p1 from "../../assets/images/img1.jpg";

// eslint-disable-next-line react/prop-types
const CardTwo = ({ headerText = "" }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold">{headerText}</h2>
        <a href="#" className="text-[#0059B1] text-lg underline">
          See all property
        </a>
      </div>
      {/* <div className="flex justify-end items-center mb-6">

        <a href="#" className="text-[#0059B1] text-lg underline">
          See all property
        </a>
      </div> */}
      <div className="carousel w-full pt-5 ">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:grid-cols-3 px-5  gap-6">
            <Link to={"/details"}>
              <div className=" shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={p1}
                    alt="Property Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FDF0E7] p-1 rounded flex items-center gap-1 shadow-md">
                    <FaRegImage className="w-4 h-4 text-[#EE6611]" />
                    <span className="text-xs font-semibold">20</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2 border-b pb-2">
                    <span className="bg-[#C5E2FF] text-[#00254A] text-xs font-medium px-2.5 py-0.5 rounded">
                      Apartment
                    </span>
                    <div className="flex items-center gap-1">
                      <p className="size-2 bg-[#EE6611]"></p>
                      <span className="text-[#111827] font-medium text-base">
                        Ready to Move
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    SunnySlope Suites
                  </h3>
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="text-[#EE6611]" />
                    <p className="text-[#6B7280]">
                      Meadowshire Park, Greenfield, USA
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#111827] mt-2">
                    $250000
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/details"}>
              <div className=" shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={p1}
                    alt="Property Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FDF0E7] p-1 rounded flex items-center gap-1 shadow-md">
                    <FaRegImage className="w-4 h-4 text-[#EE6611]" />
                    <span className="text-xs font-semibold">20</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2 border-b pb-2">
                    <span className="bg-[#C5E2FF] text-[#00254A] text-xs font-medium px-2.5 py-0.5 rounded">
                      Apartment
                    </span>
                    <div className="flex items-center gap-1">
                      <p className="size-2 bg-[#EE6611]"></p>
                      <span className="text-[#111827] font-medium text-base">
                        Ready to Move
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    SunnySlope Suites
                  </h3>
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="text-[#EE6611]" />
                    <p className="text-[#6B7280]">
                      Meadowshire Park, Greenfield, USA
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#111827] mt-2">
                    $250000
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/details"}>
              <div className=" shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={p1}
                    alt="Property Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FDF0E7] p-1 rounded flex items-center gap-1 shadow-md">
                    <FaRegImage className="w-4 h-4 text-[#EE6611]" />
                    <span className="text-xs font-semibold">20</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2 border-b pb-2">
                    <span className="bg-[#C5E2FF] text-[#00254A] text-xs font-medium px-2.5 py-0.5 rounded">
                      Apartment
                    </span>
                    <div className="flex items-center gap-1">
                      <p className="size-2 bg-[#EE6611]"></p>
                      <span className="text-[#111827] font-medium text-base">
                        Ready to Move
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    SunnySlope Suites
                  </h3>
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="text-[#EE6611]" />
                    <p className="text-[#6B7280]">
                      Meadowshire Park, Greenfield, USA
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#111827] mt-2">
                    $250000
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="absolute left-0 right-0  top-1/3 flex transform -translate-y-1/2 justify-between   z-50">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#5490CB] border-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#5490CB] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-5  gap-6">
            <Link to={"/details"}>
              <div className=" shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={p1}
                    alt="Property Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FDF0E7] p-1 rounded flex items-center gap-1 shadow-md">
                    <FaRegImage className="w-4 h-4 text-[#EE6611]" />
                    <span className="text-xs font-semibold">20</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2 border-b pb-2">
                    <span className="bg-[#C5E2FF] text-[#00254A] text-xs font-medium px-2.5 py-0.5 rounded">
                      Apartment
                    </span>
                    <div className="flex items-center gap-1">
                      <p className="size-2 bg-[#EE6611]"></p>
                      <span className="text-[#111827] font-medium text-base">
                        Ready to Move
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    SunnySlope Suites
                  </h3>
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="text-[#EE6611]" />
                    <p className="text-[#6B7280]">
                      Meadowshire Park, Greenfield, USA
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#111827] mt-2">
                    $250000
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/details"}>
              <div className=" shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={p1}
                    alt="Property Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FDF0E7] p-1 rounded flex items-center gap-1 shadow-md">
                    <FaRegImage className="w-4 h-4 text-[#EE6611]" />
                    <span className="text-xs font-semibold">20</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2 border-b pb-2">
                    <span className="bg-[#C5E2FF] text-[#00254A] text-xs font-medium px-2.5 py-0.5 rounded">
                      Apartment
                    </span>
                    <div className="flex items-center gap-1">
                      <p className="size-2 bg-[#EE6611]"></p>
                      <span className="text-[#111827] font-medium text-base">
                        Ready to Move
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    SunnySlope Suites
                  </h3>
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="text-[#EE6611]" />
                    <p className="text-[#6B7280]">
                      Meadowshire Park, Greenfield, USA
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#111827] mt-2">
                    $250000
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/details"}>
              <div className=" shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={p1}
                    alt="Property Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FDF0E7] p-1 rounded flex items-center gap-1 shadow-md">
                    <FaRegImage className="w-4 h-4 text-[#EE6611]" />
                    <span className="text-xs font-semibold">20</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2 border-b pb-2">
                    <span className="bg-[#C5E2FF] text-[#00254A] text-xs font-medium px-2.5 py-0.5 rounded">
                      Apartment
                    </span>
                    <div className="flex items-center gap-1">
                      <p className="size-2 bg-[#EE6611]"></p>
                      <span className="text-[#111827] font-medium text-base">
                        Ready to Move
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    SunnySlope Suites
                  </h3>
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="text-[#EE6611]" />
                    <p className="text-[#6B7280]">
                      Meadowshire Park, Greenfield, USA
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#111827] mt-2">
                    $250000
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="absolute left-0 right-0 top-1/3 flex transform -translate-y-1/2 justify-between  z-50">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#5490CB] border-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#5490CB] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
