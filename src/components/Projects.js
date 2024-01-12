import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import imgProject1 from "../assets/project1.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Books ECommerse Site",
      description:
        "E-Commerse Web app with following functionalities: Cart, Login, Logout, Cartlist, Featured Products, All products, Filtration. Used react Hooks, context & reducers",
      picture: imgProject1,
      url: "https://bookecomm-guqli.netlify.app/",
      languages: { lang1: "react", lang2: "css", lang3: "html" },
    },
    {
      id: 2,
      name: "project2",
      description: "bla bla 2",
      languages: { lang1: "react", lang2: "css", lang3: "html" },
    },
    {
      id: 3,
      name: "project3",
      description: "bla bla 3",
      languages: { lang1: "react", lang2: "css", lang3: "html" },
    },
    {
      id: 4,
      name: "project4",
      description: "bla bla 4",
      languages: { lang1: "react", lang2: "css", lang3: "html" },
    },
  ];

  return (
    <section className="my-20">
      <h1 className="uppercase text-4xl font-extrabold text-center font-bold dark:text-slate-100 mb-5 underline underline-offset-8">
        Projects {projects.length}
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

// const [projects, setProjects] = useState([]);
// const token = "nfp_bV2Ca7VvgwRidTCPMCoX2dwhorJot3NU73c3";
// const netlifyLink = "https://app.netlify.com/teams/guqli/sites";

// useEffect(() => {
//   async function fetchSites() {
//     const response = await fetch(netlifyLink, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     const data = await response.json();
//     setProjects(data);
//     console.log(data);
//   }
//   fetchSites();
// }, []);
