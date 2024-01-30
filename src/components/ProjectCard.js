import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";

export const ProjectCard = ({ project }) => {
  const { name, description, picture, url } = project;

  return (
    <section className="p-10 w-full h-full bg-white dark:bg-gray-800 dark:text-white">
      <div className="border-t pt-16 lg:grid md:grid grid-cols-2 gap-4 sm:flex-col">
        <div className="flex justify-start">
          <div className="flex w-full object-cover justify-items-start border rounded-lg overflow-hidden min-h-80">
            <img
              onClick={() => window.open(url, "_blank")}
              className="w-full h-full object-cover hover:scale-125 transition duration-500 cursor-pointer "
              src={picture}
              alt="project"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            <h1 className="capitalize text-4xl font-extrabold mt-2">{name}</h1>

            <p className="lg:text-lg sm:text-base text-gray-500 dark:text-white	">
              {description}
            </p>
            <div className="flex justify-center items-center space-x-4">
              <p className="lg:text-lg sm:text-base text-gray-500 dark:text-white">
                Based on:
              </p>
              <span>
                <FaReact />
              </span>
              <span>
                <BiLogoTailwindCss />
              </span>
              <span>
                <FaHtml5 />
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 my-6 cursor-pointer ">
              <button
                onClick={() => window.open(url, "_blank")}
                className="bg-stone-900 hover:bg-stone-400 px-5 py-3 text-white rounded-lg w-1/4 text-center dark:bg-gray-200 dark:text-black "
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// section classNameName: min-h-screen bg-gray-100 flex justify-center items-center
// hover effect: hover:shadow-2xl hover:scale-105 transition-all transform duration-500
// hover circle: hover:border-yellow-200 hover:scale-105 transition transform duration-200

// Second Verison:
