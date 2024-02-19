import NavBar from "../NavBar";
import Footer from "../Footer";

function WomenWear(){
    return(
        <div>
            <NavBar/>   
            <div className="container mt-5">
            <h2 className="text-center pt-5">Women's Wear Collection</h2>
            <p className="text-center">Enhance Your Elegance: Elevate Your Style with Neophyte Women's Wear Collection. Each piece is a brushstroke of sophistication, adding a touch of glamour to your wardrobe. Just as makeup transforms, our collection embodies the art of fashion, bringing out the beauty, confidence, and allure in every woman. Discover the perfect ensemble that reflects your individuality and captivates your timeless charm.</p>

            <div id="womenWearProducts" className="row">
                {/* Products will be dynamically rendered here */}
            </div>

            <div id="noProductsMessage" className="text-center mt-4">
                {/* Message for no products will be displayed here */}
                {/* <p>Sorry, there are no women's wear products at the moment.</p> */}
            </div>
            </div>
            <Footer/>

        </div>
    )
}
export default WomenWear;