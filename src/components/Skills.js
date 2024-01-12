import { ImHtmlFive2 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";

export const Skills = () => {
  return (
    <section className="font-bold uppercase border-b border-gray-300 ">
      <h2 className="text-center mt-4">My skills so far:</h2>
      <ul className="flex justify-center m-4 ">
        <li className="mx-2 text-3xl">
          <ImHtmlFive2 />
        </li>
        <li className="mx-2 text-3xl">
          <FaCss3 />
        </li>
        <li className="mx-2 text-3xl">
          <SiTailwindcss />
        </li>
        <li className="mx-2 text-3xl">
          <IoLogoJavascript />
        </li>
        <li className="mx-2 text-3xl">
          <FaReact />
        </li>
        <li className="mx-2 text-3xl">
          <SiRedux />
        </li>
        <li className="mx-2 text-3xl">
          <SiReactrouter />
        </li>
        <li className="mx-2 text-3xl">
          <FaGithub />
        </li>
        <li className="mx-2 text-3xl">
          <SiFirebase />
        </li>
      </ul>
    </section>
  );
};
