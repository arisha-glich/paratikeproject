import ExploreSection from "../Layout/ExploreSection";
import FeaturedEvents from "../Layout/FeaturedEvent";
import FeatureEvent2 from "../Layout/FeautureEvent2";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

function Home() {
    return (
      <div className="">
        <Header/>
        <FeaturedEvents/>
        <FeatureEvent2/>
        <ExploreSection/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;