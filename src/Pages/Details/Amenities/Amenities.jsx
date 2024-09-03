import { CgGym } from "react-icons/cg";
import { FaCar } from "react-icons/fa";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import {
  GiBatteryMinus,
  GiGasStove,
  GiKidSlide,
  GiNuclearWaste,
  GiPoliceOfficerHead,
  GiTennisRacket,
  GiWaterFlask,
} from "react-icons/gi";
import { GrRun, GrVmMaintenance } from "react-icons/gr";
import {
  MdCleaningServices,
  MdHouseSiding,
  MdLocalLaundryService,
  MdOutlineHvac,
  MdSignalWifiStatusbarConnectedNoInternet4,
} from "react-icons/md";
import { PiParkDuotone, PiTelevisionThin } from "react-icons/pi";
import { SiGreatlearning } from "react-icons/si";
import {
  TbAerialLift,
  TbBrandIntercom,
  TbGardenCart,
  TbParkingCircle,
} from "react-icons/tb";

const Amenities = () => {
  return (
    <div className="my-5">
      <div className="border-[#E5E7EB] p-5 border rounded-lg bg-[#F9FAFB] h-auto md:h-full flex flex-col justify-between">
        <h2 className="font-semibold text-2xl text-[#000000] pb-5">
          Amenities{" "}
        </h2>
        <div className="flex flex-col justify-between  md:flex-row">
          {/* row 1 */}
          <div className="flex justify-between gap-0 md:gap-5 flex-col flex-wrap  ">
            <div className="flex  items-center gap-2 p-3">
              <GrRun className="size-5" />

              <h2 className="font-medium text-[#303030]">
                Jogging and Strolling Track{" "}
              </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <GiBatteryMinus className="size-5" />
              <h2 className="font-medium text-[#303030]">Power Back Up </h2>
            </div>
            <div className="flex  items-center gap-2  p-3">
              <TbAerialLift className="size-5" />
              <h2 className="font-medium text-[#303030]">Lift </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <MdHouseSiding className="size-5" />
              <h2 className="font-medium text-[#303030]">Club House </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <CgGym className="size-5" />

              <h2 className="font-medium text-[#303030]">Gymnasium </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <MdLocalLaundryService className="size-5" />

              <h2 className="font-medium text-[#303030]">Laundry Service </h2>
            </div>
          </div>
          {/* row 2 */}
          <div className="flex justify-between gap-0 md:gap-5 flex-col flex-wrap  ">
            <div className="flex  items-center gap-2  p-3">
              <PiTelevisionThin className="size-5" />
              <h2 className="font-medium text-[#303030]">
                DTH Television Facility
              </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <MdSignalWifiStatusbarConnectedNoInternet4 className="size-5" />
              <h2 className="font-medium text-[#303030]">
                Internet/Wi-Fi Connectivity
              </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <PiParkDuotone className="size-5" />
              <h2 className="font-medium text-[#303030]">Park </h2>
            </div>
            <div className="flex  items-center gap-2  p-3">
              <TbParkingCircle className="size-5" />
              <h2 className="font-medium text-[#303030]">Reserved Parking </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <GiPoliceOfficerHead className="size-5" />
              <h2 className="font-medium text-[#303030]">Security </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <GiWaterFlask className="size-5" />

              <h2 className="font-medium text-[#303030]">Water Storage </h2>
            </div>
          </div>
          {/* row 3 */}
          <div className="flex justify-between gap-0 md:gap-5 flex-col flex-wrap  ">
            <div className="flex  items-center gap-2 p-3">
              <GiTennisRacket className="size-5" />

              <h2 className="font-medium text-[#303030]">Badminton</h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <GiGasStove className="size-5" />
              <h2 className="font-medium text-[#303030]">Piped Gas</h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <TbGardenCart className="size-5" />
              <h2 className="font-medium text-[#303030]">
                Private Terrace/Garden{" "}
              </h2>
            </div>
            <div className="flex  items-center gap-2  p-3">
              <MdOutlineHvac className="size-5" />
              <h2 className="font-medium text-[#303030]">Vaastu Compliant</h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <MdCleaningServices className="size-5" />
              <h2 className="font-medium text-[#303030]">
                Service/Goods Lift{" "}
              </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <FaCar className="size-5" />

              <h2 className="font-medium text-[#303030]">Visitor Parking </h2>
            </div>
          </div>
          {/* row 4 */}
          <div className="flex justify-between gap-0 md:gap-5 flex-col flex-wrap  ">
            <div className="flex  items-center gap-2 p-3">
              <GiKidSlide className="size-5" />
              <h2 className="font-medium text-[#303030]">Kids Play Area</h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <FaTableTennisPaddleBall className="size-5" />
              <h2 className="font-medium text-[#303030]">
                Outdoor Tennis Courts
              </h2>
            </div>
            <div className="flex  items-center gap-2  p-3">
              <SiGreatlearning className="size-5" />
              <h2 className="font-medium text-[#303030]">
                Early Learning Centre
              </h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <TbBrandIntercom className="size-5" />
              <h2 className="font-medium text-[#303030]">Intercom Facility </h2>
            </div>
            <div className="flex  items-center gap-2  p-3">
              <GrVmMaintenance className="size-5" />
              <h2 className="font-medium text-[#303030]">Maintenance Staff</h2>
            </div>
            <div className="flex  items-center gap-2 p-3">
              <GiNuclearWaste className="size-5" />
              <h2 className="font-medium text-[#303030]">Waste Disposal </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
