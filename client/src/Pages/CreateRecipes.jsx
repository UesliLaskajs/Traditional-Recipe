import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
const CreateRecipe = () => {
  const options = [
    { value: "appetizer", label: "APPETIZER" },
    { value: "breakfast", label: "BREAKFAST" },
    { value: "main", label: "MAIN" },
    { value: "dessert", label: "DESSERT" },
    { value: "salad", label: "SALAD" },
    { value: "sides", label: "SIDES" },
    { value: "shakes", label: "SHAKES" },
  ];


  const [image, setImage] = useState(""); //Image stores the [0] selection in the  array of images
  const[name,setName]=useState('');//Name is a string that will store whatever name is entered into the input field
  const [food_category,setFoodCategory]=useState("main")
  const [time,setTime]=useState("0")
  const [about,setAbout]=useState("")
  const [range,setRange]=useState("1-2")
  const [instruction,setInstruction]=useState("")


  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]); //set the image to the first selection on the upload
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); //It is a way to send data Object as multipart
    
    const formDataFields={
      image,
      name,
      food_category,
      time,
      about,
      range,
      instruction
    }

    Object.entries(formDataFields).forEach(([key,value])=>{
      formData.append(key,value)
    })

    const response = await axios.post(
      "http://localhost:3000/create-recipe",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("Upload successful:", response.data);
  };

  return (
    <>
      <Navbar />
      <section className="w-full md:h-[64vh] h-[100vh] bg-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="container_inputs-image flex justify-between items-center md:pt-12 pt-4 px-4 lg:px-24">
            <div className="inputs_container w-full lg:w-2/3 m-4 overflow-hidden">
              <div className="divider md:flex-row flex w-full flex-col justify-between items-center ">
                <div className="small_inputs">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Name"
                      onChange={(e)=>{
                        setName(e.target.value)
                      }}
                      value={name}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="category"
                    >
                      Food Category
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category"
                      name="food_category"
                      onChange={(e)=>{
                        setFoodCategory(e.target.value);
                      }}
                      value={food_category}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="file"
                  >
                    File Upload
                  </label>
                  <input
                    onChange={handleImageUpload}
                    name="avatar"
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="file"
                    type="file"
                  />

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="timeToCook"
                    >
                      Time to Cook
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="timeToCook"
                      type="number"
                      min="0"
                      placeholder="Time to Cook"
                      onChange={(e)=>{
                        setTime(e.target.value)
                      }}
                      value={time}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="numberRange"
                    >
                      Number Range
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="numberRange"
                      type="text"
                      placeholder="8-10" 
                      onChange={(e)=>{setRange(e.target.value)}}
                      value={range}
                    />
                  </div>
                </div>

                <div className="big_inputs">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="aboutRecipe"
                    >
                      About Recipe
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="aboutRecipe"
                      name="aboutRecipe"
                      cols="50"
                      rows="5"
                      placeholder="Tell us about the recipe..."
                      onChange={(e)=>{setAbout(e.target.value)}}
                      value={about}
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="instructions"
                    >
                      Instructions
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="instructions"
                      name="instructions"
                      cols="70"
                      rows="8"
                      placeholder="Provide step-by-step instructions..."
                      onChange={(e)=>{
                        setInstruction(e.target.value)
                      }}
                      value={instruction}
                    ></textarea>
                  </div>

                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="image_container w-full lg:w-1/3 m-4 max-h-[20rem] md:flex justify-center hidden ">
              <img
                src={image}
                className="w-[12rem] h-[15rem] inline-block object-cover"
                alt="Recipe"
              />
              <p className="inline-block text-lg font-mono m-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                reprehenderit labore fuga, magnam ipsa iusto corporis inventore
                molestias rem earum atque provident eum minus maiores soluta
                omnis mollitia tempora laborum similique aspernatur illo! Harum,
                aliquid.
              </p>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default CreateRecipe;
