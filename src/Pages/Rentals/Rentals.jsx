import { AiOutlineBorder } from "react-icons/ai";
import { BiArea } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/bg33.jpg";
import HomeLoan from "../../components/HomeLoan/HomeLoan";
import Testimonials from "../../components/Testimonials/Testimonials";

const Rentals = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 flex flex-col ">
      <div className="my-5 md:my-10 w-full md:w-3/4">
        <div className="flex gap-5 flex-col md:flex-row border-b-2 pb-5">
          <button className="btn bg-[#0059B1] rounded border-none hover:text-[#4B5563] text-lg text-[#FFFFFF]">
            properties (400)
          </button>
          <button className="btn bg-[#ECF5FF] rounded border-none  text-lg text-[#4B5563]">
            New Projects (400)
          </button>
          <button className="btn bg-[#ECF5FF] rounded border-none  text-lg text-[#4B5563]">
            Pre-launch offers
          </button>
        </div>
        <div>
          <h2 className="text-2xl text-[#000000] py-5">
            400 results for rental{" "}
          </h2>
        </div>
        {/* cards */}
        <div className="flex flex-col gap-5 border-b-2 border-[#959595] pb-4">
          {/* card */}
          <Link to={"/details"}>
            <div className="flex p-5 hover:bg-[#FDF0E7]  rounded-lg  bg-[#F9FAFB] gap-5 flex-col md:flex-row">
              <div className="w-full md:w-3/12">
                <img src={img1} className="rounded h-auto md:h-full" />
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex gap-2 flex-col md:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold pb-3">
                      3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
                    </h3>
                    <div className="flex items-center gap-1">
                      <IoLocationOutline className="text-[#EE6611]" />
                      <p className="text-[#606060]">
                        Meadowshire Park, Greenfield, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#010101] font-bold text-xl">
                      $ 300000
                    </h2>
                    <button className="btn md:btn-md lg:btn-sm  border  rounded border-[#000000] text-[#363636] bg-transparent">
                      Bid Property
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <h2 className="text-[#010101]">Property details</h2>
                  <div className="w-4/5 h-[2px] bg-[#E3E3E3]"></div>
                </div>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Status</h2>
                      <p className="text-[#535353] font-normal">
                        Ready to move
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className=" flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <AiOutlineBorder className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/details"}>
            <div className="flex p-5 hover:bg-[#FDF0E7]  rounded-lg  bg-[#F9FAFB] gap-5 flex-col md:flex-row">
              <div className="w-full md:w-3/12">
                <img src={img1} className="rounded h-auto md:h-full" />
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex gap-2 flex-col md:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold pb-3">
                      3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
                    </h3>
                    <div className="flex items-center gap-1">
                      <IoLocationOutline className="text-[#EE6611]" />
                      <p className="text-[#606060]">
                        Meadowshire Park, Greenfield, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#010101] font-bold text-xl">
                      $ 300000
                    </h2>
                    <button className="btn md:btn-md lg:btn-sm  border  rounded border-[#000000] text-[#363636] bg-transparent">
                      Bid Property
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <h2 className="text-[#010101]">Property details</h2>
                  <div className="w-4/5 h-[2px] bg-[#E3E3E3]"></div>
                </div>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Status</h2>
                      <p className="text-[#535353] font-normal">
                        Ready to move
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className=" flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <AiOutlineBorder className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/details"}>
            <div className="flex p-5 hover:bg-[#FDF0E7]  rounded-lg  bg-[#F9FAFB] gap-5 flex-col md:flex-row">
              <div className="w-full md:w-3/12">
                <img src={img1} className="rounded h-auto md:h-full" />
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex gap-2 flex-col md:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold pb-3">
                      3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
                    </h3>
                    <div className="flex items-center gap-1">
                      <IoLocationOutline className="text-[#EE6611]" />
                      <p className="text-[#606060]">
                        Meadowshire Park, Greenfield, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#010101] font-bold text-xl">
                      $ 300000
                    </h2>
                    <button className="btn md:btn-md lg:btn-sm  border  rounded border-[#000000] text-[#363636] bg-transparent">
                      Bid Property
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <h2 className="text-[#010101]">Property details</h2>
                  <div className="w-4/5 h-[2px] bg-[#E3E3E3]"></div>
                </div>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Status</h2>
                      <p className="text-[#535353] font-normal">
                        Ready to move
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className=" flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <AiOutlineBorder className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/details"}>
            <div className="flex p-5 hover:bg-[#FDF0E7]  rounded-lg  bg-[#F9FAFB] gap-5 flex-col md:flex-row">
              <div className="w-full md:w-3/12">
                <img src={img1} className="rounded h-auto md:h-full" />
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex gap-2 flex-col md:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold pb-3">
                      3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
                    </h3>
                    <div className="flex items-center gap-1">
                      <IoLocationOutline className="text-[#EE6611]" />
                      <p className="text-[#606060]">
                        Meadowshire Park, Greenfield, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#010101] font-bold text-xl">
                      $ 300000
                    </h2>
                    <button className="btn md:btn-md lg:btn-sm  border  rounded border-[#000000] text-[#363636] bg-transparent">
                      Bid Property
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <h2 className="text-[#010101]">Property details</h2>
                  <div className="w-4/5 h-[2px] bg-[#E3E3E3]"></div>
                </div>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Status</h2>
                      <p className="text-[#535353] font-normal">
                        Ready to move
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className=" flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <AiOutlineBorder className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/details"}>
            <div className="flex p-5 hover:bg-[#FDF0E7]  rounded-lg  bg-[#F9FAFB] gap-5 flex-col md:flex-row">
              <div className="w-full md:w-3/12">
                <img src={img1} className="rounded h-auto md:h-full" />
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex gap-2 flex-col md:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold pb-3">
                      3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
                    </h3>
                    <div className="flex items-center gap-1">
                      <IoLocationOutline className="text-[#EE6611]" />
                      <p className="text-[#606060]">
                        Meadowshire Park, Greenfield, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#010101] font-bold text-xl">
                      $ 300000
                    </h2>
                    <button className="btn md:btn-md lg:btn-sm  border  rounded border-[#000000] text-[#363636] bg-transparent">
                      Bid Property
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <h2 className="text-[#010101]">Property details</h2>
                  <div className="w-4/5 h-[2px] bg-[#E3E3E3]"></div>
                </div>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <BiArea className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Status</h2>
                      <p className="text-[#535353] font-normal">
                        Ready to move
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className=" flex justify-center items-center size-10 bg-[#EE6611] rounded">
                      <AiOutlineBorder className="text-2xl text-[#ECF5FF]  rounded" />
                    </div>

                    <div>
                      <h2 className="text-[#303030] font-medium">Total Area</h2>
                      <p className="text-[#535353] font-normal">891 sqft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* pagination */}
        <div className="flex gap-3 pt-5">
          <button className="btn bg-[#0059B1] text-white">01</button>
          <button className="btn bg-[#ECF5FF] text-[#4B5563]">02</button>
          <button className="btn  bg-[#ECF5FF] text-[#4B5563]">Next</button>
        </div>
      </div>
      {/* range */}
      {/* <div className="flex flex-col gap-5 md:flex-row w-full md:w-11/12 bg-[#ECF5FF] p-6 rounded-lg">
        <div className="w-full md:w-2/5">
          <h3 className="text-[#010101] font-semibold text-2xl">
            Need a Home Loan?
          </h3>
          <p className="text-[#535353]">
            Select How much Home loan you can take
          </p>
        </div>
        <div className="w-full md:w-3/5">
          <input
            type="range"
            min={0}
            max="100"
            value="0"
            className="w-full accent-[#0051A1] h-2 appearance-none cursor-pointer rounded"
            step="25"
            style={{
              background: `linear-gradient(to right, #8AB3DB ${
                ((280 - 280) / (305 - 280)) * 100
              }%, #8AB3DB ${((280 - 280) / (305 - 280)) * 100}%)`,
            }}
          />
          <div className="flex w-full justify-between px-2 text-xs">
            <span>$20K</span>
            <span>$30K</span>
            <span>$40K</span>
            <span>$50K</span>
            <span>$60K</span>
          </div>
        </div>
      </div> */}
      <HomeLoan />
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Rentals;
