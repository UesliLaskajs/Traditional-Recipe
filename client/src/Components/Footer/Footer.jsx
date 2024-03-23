import logo from "../../assets/logo.png"
const Footer = () => {
  return (
   <>
    <section className="footer bg-red-500 w-full h-30vh p-8 ">
    <div className="text_container-footer flex items-center justify-between flex-col">
        <div className="hero_text-footer  flex md:flex-row  flex-col justify-between items-center md:w-2/3 w-full border-b-2 border-white">
            <div className="logo md:w-32">
                <img src={logo} className="w-20 md:w-32" alt="Logo" />
            </div>
            <div className="text_sec w-4/5 ">
                <div className="big_heading text-4xl text-white font-bold py-2">
                    Get Exclusive Tips , Tricks & Recipes!
                </div>
                <div className="small_heading text-l text-white py-2">
                    Join the Olde & New Newsletter Today And Start Your Day Off Right.
                </div>
                <div className="input_form_footer py-2 mb-4 flex ">
                <input
                    type="text"
                    className=" block w-2/3 p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="JohnDoe@gmail.com"
            />
                    <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full ml-4 text-sm px-6 py-3 text-center  dark:focus:ring-yellow-900">Subscribe!</button>
                </div>
            </div>
        </div>
        <div className="menu_links_footer md:w-2/5 w-full ">
            <ul className="flex justify-between items-center text-sm text-white  ">
                <li className="hover:text-blue-500 p-2"><a href="#"> Home</a></li>
                <li className="hover:text-blue-500"><a href="#"> Recipes</a></li>
                <li className="hover:text-blue-500"><a href="#">About</a></li>
                <li className="hover:text-blue-500"><a href="#">Contact</a></li>
                <li className="hover:text-blue-500"><a href="#">Terms</a></li>
                <li className="hover:text-blue-500"><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    </div>
    </section>
   </> 
  )
}

export default Footer