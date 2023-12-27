import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "project1",
      description: "bla bla 1",
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
      <h1 className="uppercase text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
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
