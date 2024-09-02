import { RiHome6Line } from "react-icons/ri";

const OtherServices = () => {
  return (
    <div className="my-5 md:my-24 px-5 lg:px-20">
      <h2 className="text-center mb-5 lg:mb-12 text-4xl font-bold">
        Other Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex gap-3 bg-[#ECF5FF] rounded p-5">
          <div className="p-3 size-12 bg-[#EE6611] rounded">
            <RiHome6Line className="text-2xl text-[#ECF5FF]  rounded" />
          </div>

          <div>
            <h3 className="font-semibold text-2xl text-[#111827] pb-3">
              Advanced Property Search
            </h3>
            <p className="text-[#6B7280] ">
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
        <div className="flex gap-3 bg-[#ECF5FF] rounded p-5">
          <div className="p-3 size-12 bg-[#EE6611] rounded">
            <RiHome6Line className="text-2xl text-[#ECF5FF]  rounded" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-[#111827] pb-3">
              Advanced Property Search
            </h3>
            <p className="text-[#6B7280] ">
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
        <div className="flex gap-3 bg-[#ECF5FF] rounded p-5">
          <div className="p-3 size-12 bg-[#EE6611] rounded">
            <RiHome6Line className="text-2xl text-[#ECF5FF]  rounded" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-[#111827] pb-3">
              Advanced Property Search
            </h3>
            <p className="text-[#6B7280] ">
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
