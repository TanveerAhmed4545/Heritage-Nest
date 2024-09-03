import { IoSearch } from "react-icons/io5";
import img from "../../../assets/images/banner.jpg";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div
      className="hero min-h-[544px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Your Portal to India's <br /> Exquisite Real Estate
          </h1>
          <p className="mb-5 max-w-md text-xs">
            Seamlessly connecting you to the heartbeat of India's prime
            properties.
          </p>
          <button className="btn bg-[#0059B1] rounded border-none hover:text-black text-lg text-[#FFFFFF]">
            <IoSearch className="size-6" />
            Find Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
