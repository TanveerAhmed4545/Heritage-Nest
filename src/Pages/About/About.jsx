import buy1 from "../../assets/images/buy1.jpg";
import buy2 from "../../assets/images/buy2.jpg";
import home from "../../assets/images/home22.png";
import indore from "../../assets/images/indore.jpg";
import FlatList from "../../components/FlatList/FlatList";
import Testimonials from "../../components/Testimonials/Testimonials";

const About = () => {
  return (
    <div>
      <div className="w-full ">
        <img src={indore} className="w-full max-h-80 object-cover " />
      </div>
      <div>
        <FlatList />
      </div>
      {/* card 1 */}
      <div className="px-5 md:px-10 lg:px-20 py-5 md:pb-32 ">
        <div className="relative">
          <img
            src={buy1}
            className="w-full lg:w-3/4 h-[300px] sm:h-[450px] object-cover  "
          />
          <div className="bg-[#ECF5FF] p-4 sm:p-6 max-w-full w-full lg:max-w-[560px] lg:absolute bottom-0 sm:-bottom-20 lg:right-0">
            <div className="flex gap-1 sm:gap-4 items-center pb-4 sm:pb-6">
              <div className="w-8 sm:w-12 h-1 bg-[#F06711]"></div>
              <h3 className="text-sm sm:text-lg text-[#F06711] font-bold">
                Property buying
              </h3>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Efficient and Transparent <br />
              Home Buying Solutions
            </h1>

            <p className="pt-2 sm:pt-4 text-[#667085] text-sm sm:text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="px-5 md:px-10 lg:px-20 py-5 md:pb-32 ">
        <div className="relative">
          <div className="flex justify-end ">
            <img
              src={buy2}
              className="w-full lg:w-3/4 h-[300px] sm:h-[450px] object-cover"
            />
          </div>
          <div className="bg-[#FDF0E7] p-4 sm:p-6 max-w-full w-full lg:max-w-[560px] lg:absolute bottom-0 sm:-bottom-20 lg:left-0">
            <div className="flex gap-1 sm:gap-4 items-center pb-4 sm:pb-6">
              <div className="w-8 sm:w-12 h-1 bg-[#F06711]"></div>
              <h3 className="text-sm sm:text-lg text-[#F06711] font-bold">
                Property buying
              </h3>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Efficient and Transparent <br />
              Home Buying Solutions
            </h1>

            <p className="pt-2 sm:pt-4 text-[#667085] text-sm sm:text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
      {/* features */}
      <div className="px-5 md:px-10 lg:px-20 pb-5 flex flex-col gap-5 md:flex-row">
        <div className="w-full md:w-3/4">
          <div className="flex gap-1 sm:gap-4 items-center pb-4 sm:pb-6">
            <div className="w-8 sm:w-12 h-1 bg-[#F06711]"></div>
            <h3 className="text-sm sm:text-lg text-[#F06711] font-bold">
              Meet the Team For Book Consultation
            </h3>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Meet the stewards of your
            <br />
            heritage journey
          </h1>

          <p className="py-2 sm:py-4 text-[#667085] text-sm sm:text-base">
            each member an embodiment of expertise and warmth, dedicated to
            guiding you home, every step of the way.
          </p>
          <button className="btn bg-[#0059B1] rounded border-none hover:text-black text-lg text-[#FFFFFF]">
            Book Consultation Now
          </button>
        </div>
        <div className="w-full md:w-1/4">
          <img src={home} className="w-full md:h-full" />
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-20 ">
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
