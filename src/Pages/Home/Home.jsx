import Banner from "./Banner/Banner";
import OtherServices from "./OtherServices/OtherServices";
import PropertyOne from "./PropertyOne/PropertyOne";
import PropertyThree from "./PropertyThree/PropertyThree";
import PropertyTwo from "./PropertyTwo/PropertyTwo";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <PropertyOne />
        <PropertyTwo />
        <PropertyThree />
        <OtherServices />
      </div>
    </div>
  );
};

export default Home;
