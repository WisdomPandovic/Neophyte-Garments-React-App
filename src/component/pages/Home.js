import NavBar from "../NavBar";
import MySlider from "../MySlider";
import RecommendedSales from "../RecommendedSales";
import ProductsSection from "../ProductsSection";
import InStoreSection from "../InStoreSection";
import NewArrivals from "../NewArrivals";
import Footer from "../Footer";
function Home (){
    return(
        <div>
            <NavBar/>
           
        <MySlider/>
        <RecommendedSales/>
        <ProductsSection/>
        <InStoreSection/>
        <NewArrivals/>
        <Footer/>
        </div>
    )
}

export default Home;