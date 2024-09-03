import { GiBunkBeds } from "react-icons/gi";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { MdBalcony, MdOutlineBathtub } from "react-icons/md";
import map from "../../assets/images/map.png";
import view1 from "../../assets/images/view1.png";
import view2 from "../../assets/images/view2.png";
import view3 from "../../assets/images/view3.png";

const Details = () => {
  return (
    <div className="my-5">
      {/* top text */}
      <div className="px-5 md:px-10 lg:px-20">
        <div className="flex gap-4 flex-col md:flex-row pb-5">
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
          <div>
            <h2 className="text-[#010101] font-bold text-xl">$ 300k</h2>
          </div>
        </div>

        {/*images  side 1 */}
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="w-full md:w-9/12 flex gap-6 flex-col ">
            <div className="flex flex-col gap-2">
              <div>
                <img src={view1} className="w-full h-auto md:h-[400px]" />
              </div>
              <div className="flex gap-2 flex-col md:flex-row">
                <div>
                  <img src={view2} className="w-full h-auto md:h-40" />
                </div>
                <div>
                  <img src={view3} className="w-full h-auto md:h-40" />
                </div>
                <div>
                  <img src={view2} className="w-full h-auto md:h-40" />
                </div>
              </div>
            </div>
            {/* overview */}
            <div className="border-[#E5E7EB] p-5 border rounded-lg bg-[#F9FAFB] h-auto md:h-full flex flex-col justify-between">
              <h2 className="font-semibold text-2xl text-[#000000]">
                Overview
              </h2>
              <div className="flex justify-between flex-wrap bg-[#FFFFFF] border-b border-[#CAC7C7]">
                <div className="flex  items-center gap-1 p-3">
                  <IoBedOutline className="size-5" />
                  <h2 className="font-bold text-[#303030]">2 </h2>
                  <p className="text-[#303030]">Beds</p>
                </div>
                <div className="flex  items-center gap-1 p-3">
                  <MdOutlineBathtub className="size-5" />
                  <h2 className="font-bold text-[#303030]">2 </h2>
                  <p className="text-[#303030]">Bath</p>
                </div>
                <div className="flex  items-center gap-1 p-3">
                  <MdBalcony className="size-5" />
                  <h2 className="font-bold text-[#303030]">2 </h2>
                  <p className="text-[#303030]">Balcony</p>
                </div>
                <div className="flex  items-center gap-1 p-3">
                  <GiBunkBeds className="size-5" />

                  <p className="text-[#303030]">Fully Furnished</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between  gap-2 flex-wrap">
                  <div>
                    <h4 className="text-[#5C5C5C]">Carpet Area</h4>
                    <p className="text-[#101010] font-medium">2000 Sqft</p>
                    <p className="text-[#5C5C5C] mb-2">$ 225/sqft</p>
                  </div>
                  <div>
                    <h4 className="text-[#5C5C5C]">Floor</h4>
                    <p className="text-[#101010] font-medium">
                      Second (Out of 6th floor)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#5C5C5C]">Transaction Type</h4>
                    <p className="text-[#101010] font-medium">Ready to move</p>
                  </div>
                  <div>
                    <h4 className="text-[#5C5C5C]">Lift</h4>
                    <p className="text-[#101010] font-medium">1</p>
                  </div>
                </div>
                <div className="flex justify-between  gap-2 flex-wrap">
                  <div>
                    <h4 className="text-[#5C5C5C]">Facing</h4>
                    <p className="text-[#101010] font-medium">North - East</p>
                  </div>
                  <div>
                    <h4 className="text-[#5C5C5C]">Additional Rooms</h4>
                    <p className="text-[#101010] font-medium">
                      1 servant room & 1 gust room
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#5C5C5C]">Age of construction</h4>
                    <p className="text-[#101010] font-medium">
                      New Construction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* side 2 */}
          <div className="w-full md:w-2/5 flex flex-col gap-5">
            <div>
              <div className="bg-[#ECF5FF] p-6 rounded-lg   shadow-md">
                {/* Property Value */}
                <h3 className="text-sm font-semibold text-[#6B7280]">
                  Property Value
                </h3>
                <p className="text-2xl font-bold text-[#252323] mt-1">
                  $300k - $310k
                </p>
                <p className="text-sm text-[#6B7280] mt-2">
                  Your bid cannot be more than 10% of the Property minimum
                  value.
                </p>

                {/* Min and Max Input Fields */}
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-[#252323] mb-1">
                    Min
                  </label>
                  <input
                    type="text"
                    value="$280k"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mb-4"
                  />

                  <label className="block text-sm font-semibold text-[#252323] mb-1">
                    Max
                  </label>
                  <input
                    type="text"
                    value="$305k"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                  />
                </div>

                {/* Range Slider */}
                <div className="mt-6">
                  <input
                    type="range"
                    min="280"
                    max="305"
                    value="280"
                    className="w-full h-2 appearance-none accent-[#EE6611] cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #EEEEEE ${
                        ((280 - 280) / (305 - 280)) * 100
                      }%, #EEEEEE ${((280 - 280) / (305 - 280)) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>$280k</span>
                    <span>$305k</span>
                  </div>
                </div>

                {/* Bid Property Button */}
                <div className="text-center pt-3">
                  <button className="btn bg-[#0059B1] rounded border-none hover:text-black text-lg text-[#FFFFFF]">
                    Bid Property
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src={map} className="rounded-lg h-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
