import ExploreSection from "../Layout/ExploreSection";
import FeaturedEvents from "../Layout/FeaturedEvent";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

function Home() {
    return (
      <div className="">
        <Header/>
        <FeaturedEvents/>
        <ExploreSection/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;