import React from "react";
import heroImage from "../assets/heroimage.jpg";

export const About = () => {
  return (
    <main>
      <div className="flex min-h-screen dark:bg-gray-800 dark:text-white">
        <div className="mx-auto">
          <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full">
            <img src={heroImage} alt="me" />
          </div>
          <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-black">
            I Forge, Riffle & Sharpen
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-tr from-[#60e7ff] to-[#8000FF]">
              Web Apps!
            </span>
          </h1>
          <p className="mx-auto mt-[40px] mb-[54px] text-[18px] font-light text-center max-w-lg ">
            My surname holds the story of ancestors who crafted and sharpened
            tools for triumph in the past, such as swords, axes, spikes, and
            more. It resonates with the art of crafting tools for success.
            Inspired by this legacy, I've chosen to transition it into becoming
            a front-end developer—equipping businesses for their digital
            battles. In history, a well-forged sword was the key to victory.
            Today, the internet is the battlefield, and having an up-to-date web
            presence is the key to success. It's a new frontier where businesses
            either thrive or falter. As an evolving web developer stepping into
            the real world, my journey is fueled by a desire to expand my skills
            in this dynamic field. I envision my work being valued, paving the
            way for a broader presence in the tech industry. My immediate goal
            is to delve into React Native, broadening my skills to cover mobile
            apps. Looking ahead, I have my sights set on becoming a full-stack
            developer, seamlessly navigating both front and back ends to create
            full digital solutions. Join me on this journey, where every line of
            code is a strategic move in the ever-evolving tech industry
          </p>
          <div className="text-center">
            <button className="text-gray-800 inline-block px-[30px] py-[16px] mr-[18px] bg-white rounded-full font-semibold text-[22px]">
              Get In Touch
            </button>
            <button className="inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
