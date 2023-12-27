import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="flex flex-wrap items-center justify-center w-full mx-auto max-w-screen-xl p-4">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 All Done By Me{" "}
          <span className="italic p-5">All Rights Reserved</span>
        </span>
        <div className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 ">
          <a
            className="hover:border-black me-4 md:me-6"
            href="https://www.linkedin.com/in/guga-qlibadze/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            {<CiLinkedin />}
          </a>
          <a
            className="hover:border-black me-4 md:me-6"
            href="https://github.com/GuQli"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            {<FaGithub />}
          </a>
        </div>
      </div>
    </footer>
  );
};
