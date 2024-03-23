import "../App.css";
import Navbar from "../Components/Header/Navbar";
import landingPageImage from "../assets/landing.png";
import Recipes from "../Components/Recipes/Recipes";
import Footer from "../Components/Footer/Footer";
import foodImgSlogan from "../assets/eatFoodSlogan.jpg";

// Home component
const Home = () => {
  return (
    <>
      <Navbar />

      <section>
        <div
          className="w-full md:h-[85vh] h-[60vh] bg-cover bg-center bg-no-repeat flex flex-row justify-center md:items-center"
          style={{
            backgroundImage: `url('${landingPageImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="center_hero_container flex flex-col justify-center items-center  px-4 py-8 md:h-1/2 md:w-3/4 w-full">
            <div className="text_container w-full text-center">
              <div className="big_text_hero w-full md:text-5xl text-xl">
                <h1
                  style={{
                    fontFamily: "Fraunces, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Subscribe to our Newsletter <br /> and get a{" "}
                  <span className="text-[#C8BD59]">15% Coupon Code</span>
                  for <br />
                  your <span className="text-[#145362]">next order!</span>
                </h1>
              </div>
              <div className="small_text_hero w-full flex justify-center items-center my-4 ">
                <p className="md:w-3/4 w-full mx-auto md:text-xl text-sm font-semibold">
                  Offering a freebie, a raffle prize, or an exclusive perk is a
                  great way to entice <br /> people to register for your
                  promotion. Offer something that can be perceived <br /> as
                  valuable to convince people to join.
                </p>
              </div>
            </div>

            <div className="btn_hero flex justify-center items-center flex-col ">
              <div className="buttons_hero w-4/7   flex items-center justify-between md:p-8 p-2">
                <button className="bg-[#145362] hover:bg-blue-900 text-orange-500 font-bold py-2 md:px-12 px-4 rounded m-4">
                  Join Now!
                </button>
                <button className="text-black text-sm font-bold bg-transparent py-2 px-2 rounded border border-black hover:bg-blue-600 hover:border-blue-600">
                  Follow us on social media!
                </button>
              </div>
              <div className="small_desc_btn md:w-2/3 w-full flex justify-center items-center text-sm font-semibold">
                Disclaimer: Terms and conditions may apply. <br /> All
                government taxes associated with this prize <br /> are solely
                the responsibility of the winner.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Recipes />
      </section>

      <section className="w-full h-[40vh] bg-slate-100 flex justify-center items-center py-4">
        <div className="slogan_items_container md:w-3/5 w-full flex md:flex-row flex-col justify-center items-center ">
          <div className="texts_slogan_desc w-4/5 flex flex-col justify-center items-center">
            <div className="main_slogan md:text-6xl text-xl">
              Eat Good <br />{" "}
              <span className="text-orange-500 md:text-5xl text-m font-thin font-serif relative md:bottom-7 bottom-4 ">
                Feel Good
              </span>
            </div>
            <div className="desc slogan w-full text-l  ">
              &quot; Our mission at FoodForThought is simple – we want you to
              eat good food and feel good about it. We believe in supporting
              local farms and industry &quot;
            </div>
            <div className="founder text-xl font-bold mt-4">
              -Founder Uesli Laska
            </div>
          </div>
          <div className="image_slogan_container w-4/5 h-full flex justify-center items-center">
            <img
              src={foodImgSlogan}
              alt="foodimg"
              className="rounded-full w-1/2 md:h-64  h-36 px-2"
            />
          </div>
        </div>
      </section>

      <section>
        
      </section>

      <Footer />
    </>
  );
};

export default Home;
