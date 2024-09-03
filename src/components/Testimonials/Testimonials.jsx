/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa";
import profile from "../../assets/images/profile.png";

const Testimonials = () => {
  return (
    <div className="my-5 md:my-10">
      <h2 className="font-bold text-4xl text-[#181818] text-center pb-5">
        Testimonials
      </h2>
      <div className="flex flex-col md:flex-row gap-5 py-5">
        <div className="bg-[#ECF5FF] p-5 md:p-10">
          <div className="flex justify-center items-center">
            <FaStar className="text-[#FEC84B] size-6" />
            <FaStar className="text-[#FEC84B] size-6" />
            <FaStar className="text-[#FEC84B] size-6" />
            <FaStar className="text-[#FEC84B] size-6" />
            <FaStar className="text-[#F4E6C5] size-6" />
          </div>
          <p className="text-center py-5">
            "The level of security provided by CypherPlay is unmatched. I feel
            confident using my card for both everyday purchases and travel. It's
            the peace of mind I was looking for."
          </p>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-16 h-16 rounded-full object-cover mx-auto mt-5"
              alt=""
              src={profile}
            />
            <p className="font-semibold text-lg mt-3 mx-auto">Tony Stark</p>
            <p className="text-sm text-gray-500 mx-auto">
              Marketing manager, XYZ
            </p>
          </div>
        </div>
        <div className="bg-[#ECF5FF] p-5 md:p-10">
          <div className="flex justify-center items-center">
            <FaStar className="text-[#FEC84B] size-6" />
            <FaStar className="text-[#FEC84B] size-6" />
            <FaStar className="text-[#FEC84B] size-6" />
            <FaStar className="text-[#FEC84B] size-6" />
            <FaStar className="text-[#F4E6C5] size-6" />
          </div>
          <p className="text-center py-5">
            "The level of security provided by CypherPlay is unmatched. I feel
            confident using my card for both everyday purchases and travel. It's
            the peace of mind I was looking for."
          </p>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-16 h-16 rounded-full object-cover mx-auto mt-5"
              alt=""
              src={profile}
            />
            <p className="font-semibold text-lg mt-3 mx-auto">Tony Stark</p>
            <p className="text-sm text-gray-500 mx-auto">
              Marketing manager, XYZ
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 justify-center items-center">
        <button
          type="button"
          aria-label="Page 1"
          className="w-6 h-3 rounded-full bg-[#EE6611]"
        ></button>
        <button
          type="button"
          aria-label="Page 2"
          className="w-3 h-3 rounded-full bg-[#FDF0E7]"
        ></button>
        <button
          type="button"
          aria-label="Page 3"
          className="w-3 h-3 rounded-full bg-[#FDF0E7]"
        ></button>
        <button
          type="button"
          aria-label="Page 4"
          className="w-3 h-3 rounded-full bg-[#FDF0E7]"
        ></button>
      </div>
    </div>
  );
};

export default Testimonials;
