import { NavLink } from "react-router-dom";
import heroImage from "../assets/heroimage.jpg";
import { Skills } from "../components/Skills";

//flex-wrap sm:flex-row m-3
export const About = () => {
  return (
    <main>
      <div className="flex justify-center min-h-screen dark:bg-gray-800 dark:text-white">
        <div className="mx-auto">
          <div className="flex items-center flex-col sm:flex-row m-4 ">
            <div className="w-1/2 h-1/2 overflow-hidden rounded-full m-1 ">
              <img src={heroImage} alt="me" />
            </div>
            <div className="w-full h-full m-1">
              <h1 className="max-w-screen-sm text-center text-[35px] sm:text-[55px] font-extrabold text-black dark:text-white">
                I Forge, Riffle & Sharpen
                <span className="px-2 text-transparent bg-clip-text bg-gradient-to-tr from-[#60e7ff] to-[#8000FF]">
                  Web Apps!
                </span>
              </h1>
            </div>
          </div>

          <div class="">
            <p className="text-left m-[40px] font-light text-xl font-semibold leading-normal text-gray-900 dark:text-white ">
              My surname holds the story of ancestors who crafted and sharpened
              tools for triumph in the past, such as: swords, axes, spikes, and
              more... It resonates with the art of crafting tools for success.
              <br /> Inspired by this legacy, I've chosen to transition it into
              becoming a
              <span className="uppercase bg-slate-300 mx-2 p-1 rounded-xl dark:bg-blue-500">
                web developer
              </span>
              — equipping businesses for their digital battles. <br />
              As an evolving web developer stepping into the real world, my
              journey is fueled by a desire to expand my skills in this dynamic
              field. I envision my work being valued, paving the way for a
              broader presence in the tech industry. My immediate goal is to
              delve into
              <span className="text-blue-500 font-semibold ml-1">
                React Native
              </span>
              , broadening my skills to cover mobile apps. Looking ahead, I have
              my sights set on becoming a full-stack developer, seamlessly
              navigating both front and back ends to create full digital
              solutions. <br />
              <p className="mt-5">
                Join & support me on this journey, where every line of code is a
                strategic move in the ever-evolving tech industry
              </p>
            </p>
          </div>
          <Skills />
          <div className="flex text-center mt-4 justify-center">
            <NavLink
              to="/contact"
              className="text-gray-800 inline-block px-[30px] py-[16px] mr-[18px] bg-transparent border-2 rounded-full font-semibold sm:text-[22px] dark:text-white"
            >
              Get In Touch
            </NavLink>
            <button className="inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold sm:text-[22px]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

// <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full">
// <img src={heroImage} alt="me" />
// </div>
// <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-black">
// I Forge, Riffle & Sharpen
// <span className="px-2 text-transparent bg-clip-text bg-gradient-to-tr from-[#60e7ff] to-[#8000FF]">
//   Web Apps!
// </span>
// </h1>

// <div className="flex justify-center min-h-screen dark:bg-gray-800 dark:text-white">
// <div className="mx-auto">
//   <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full">
//     <img src={heroImage} alt="me" />
//   </div>
//   <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-black">
//     I Forge, Riffle & Sharpen
//     <span className="px-2 text-transparent bg-clip-text bg-gradient-to-tr from-[#60e7ff] to-[#8000FF]">
//       Web Apps!
//     </span>
//   </h1>
// <div class="flex justify-center">
//   <p className="mt-[40px] font-light text-center max-w-lg max-w-lg text-2xl font-semibold leading-normal text-gray-900 dark:text-white ">
//     My surname holds the story of ancestors who crafted and sharpened
//     tools for triumph in the past, such as swords, axes, spikes, and
//     more.
//     <br /> It resonates with the art of crafting tools for success.
//     Inspired by this legacy, I've chosen to transition it into
//     becoming a web developer—equipping businesses for their digital
//     battles. In history, a well-forged sword was the key to victory.
//     Today, the internet is the battlefield, and having an up-to-date
//     web presence is the key to success. It's a new frontier where
//     businesses either thrive or falter. As an evolving web developer
//     stepping into the real world, my journey is fueled by a desire to
//     expand my skills in this dynamic field. I envision my work being
//     valued, paving the way for a broader presence in the tech
//     industry. My immediate goal is to delve into React Native,
//     broadening my skills to cover mobile apps. Looking ahead, I have
//     my sights set on becoming a full-stack developer, seamlessly
//     navigating both front and back ends to create full digital
//     solutions. <br />
//     Join & support me on this journey, where every line of code is a
//     strategic move in the ever-evolving tech industry
//   </p>
// </div>

// <div className="text-center mt-4">
//   <button className="text-gray-800 inline-block px-[30px] py-[16px] mr-[18px] bg-white rounded-full font-semibold text-[22px]">
//     Get In Touch
//   </button>
//   <button className="inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]">
//     Download CV
//   </button>
// </div>
// </div>
// </div>
