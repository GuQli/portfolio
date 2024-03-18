import heroImage from "../assets/gqpv1L.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative mt-10 h-1/2 pt-10 sm:pt-0 mb-10 dark:text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
        <div className="content">
          <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
            I'm Guga Qlibadze
            <br />
            <span>Web Developer</span>
          </p>
          <p className="mt-5 md:text-md ">
            I'm junior front-end React.js web developer based in Tbilisi,
            enthusiastic and commited
          </p>

          <div className="flex justify-center gap-4 m-4">
            <Link
              to="/contact"
              className="font-medium text-[16px] flex items-center  px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-stone-400 to-stone-900 hover:from-yellow-500 hover:to-red-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass "
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
          <img
            className="w-[600px] animate__animated animate__fadeInRight animate__delay-.10s rounded-lg"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

// <section classNameListName="relative h-screen flex flex-col lg:flex-row items-center bg-red-500 dark:bg-gray-800">
//   <div classNameListName="relative lg:w-1/2 overflow-hidden md:mx-auto md:w-1/2 sm:w-1/2 mb-8 p-4 -ml-8">
//     <img
//       src={heroImage}
//       alt="Hero"
//       classNameListName="object-cover w-full h-full rounded-lg border border-black shadow-2xl"
//     />
//   </div>

//   <div classNameListName=" absolute lg:w-1/2 p-8 text-white text-center">
//     <h1 classNameListName="text-4xl lg:text-5xl font-bold mb-4">Your Hero Title</h1>
//     <p classNameListName="text-lg lg:text-xl mb-8">
//       Some description about your hero section.
//     </p>
//   </div>
// </section>;

// beating ping on button: <span className="animate-ping absolute left-0 top-0 w-5 h-5  rounded-full bg-gradient-to-r "></span>
