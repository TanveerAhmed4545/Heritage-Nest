import p1 from "../../assets/images/people1.png";
import p2 from "../../assets/images/people2.png";
import p3 from "../../assets/images/people3.png";

const BehindFace = () => {
  return (
    <div>
      <div>
        <div className="flex gap-1 sm:gap-4 items-center pb-4 sm:pb-6">
          <div className="w-8 sm:w-12 h-1 bg-[#F06711]"></div>
          <h3 className="text-sm sm:text-lg text-[#F06711] font-bold">
            Our Teem
          </h3>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Discover the Faces Behind Our Success
        </h1>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-5 pt-5 md:pt-10">
        <div>
          <img src={p1} className="h-[400px] w-full" />
        </div>
        <div>
          <img src={p2} className="h-[400px] w-full" />
        </div>
        <div>
          <img src={p3} className="h-[400px] w-full" />
        </div>
      </div> */}
      <div className="carousel w-full pt-5 md:pt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 px-5 ">
            <div>
              <img
                src={p1}
                className="h-[300px] md:h-[400px] w-full object-cover"
              />
            </div>
            <div>
              <img
                src={p2}
                className="h-[300px] md:h-[400px] w-full object-cover"
              />
            </div>
            <div>
              <img
                src={p3}
                className="h-[300px] md:h-[400px] w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute left-0 right-0 top-1/2 flex transform -translate-y-1/2 justify-between   z-50">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full  px-5 ">
            <div>
              <img
                src={p2}
                className="h-[300px] md:h-[400px] w-full object-cover"
              />
            </div>
            <div>
              <img
                src={p1}
                className="h-[300px] md:h-[400px] w-full object-cover"
              />
            </div>
            <div>
              <img
                src={p3}
                className="h-[300px] md:h-[400px] w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute left-0 right-0 top-1/2 flex transform -translate-y-1/2 justify-between  z-50">
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

export default BehindFace;
