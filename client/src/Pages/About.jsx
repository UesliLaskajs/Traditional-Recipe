import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <>
      <Navbar />
      <section className="w-full md:h-[64vh] h-[90vh] flex justify-center bg-gray-300  ">
        <div className="container  md:w-4/5 w-full flex md:flex-row items-center flex-col">
          <div className="left_contaienr md:w-2/5 w-4/5  rounded-md border-2 mx-4">
            <div className="small_title md:text-2xl text-l text-orange-500 font-bold">
              How it started?
            </div>
            <div className="big_title mt-4 font-bold md:text-5xl text-3xl  ">
              🌱 Food Reciepes waits for you!The first Recipe App was born in
              Albania
            </div>

            <div className="desc mt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              debitis quae aperiam assumenda, consectetur corporis numquam
              repellat in nisi nesciunt sunt ratione vero neque atque
              praesentium quia nobis labore facilis. Distinctio tempora nihil
              dolor earum adipisci ipsum omnis! Nesciunt quasi et repudiandae
              omnis aliquid, sint accusamus quae dicta veniam nihil
            </div>
          </div>
          <div className="right_container md:w-2/5 w-4/5  rounded-md border-2 flex md:flex-row flex-col justify-center items-center p-8">
            <div className="image_container w-4/5 ">
              <img src={aboutImg} className="w-full h-40 " />
            </div>
            <div className="desc_container md:w-1/2 w-full m-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              praesentium enim expedita vel commodi? Doloribus.{" "}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
