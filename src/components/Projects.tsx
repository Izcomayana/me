import preNetflix from "../../public/pre-netflix.jpg";
import dogped from "../../public/dogped.jpg";
import zuri from "../../public/zuri.jpg";
import catchup from "../../public/catchup.jpg";
import mentorshub from "../../public/mentorshub.jpg";
import { useEffect } from "react";
import AOS from 'aos';

const projects = [
  {
    img: zuri,
    alt: "Zuri Chat",
    title: "Zuri Chat",
    description:
      "Zuri Chat is a very flexible open-source messaging app for organizations connecting members to information they need whenever they need them.",
    tools: ["react", "redux", "bootstrap", "nodejs"],
    liveLink: "https://www.zuri.chat/",
    githubLink: "https://github.com/zurichat/zc_main",
  },
  {
    img: catchup,
    alt: "CatchUp",
    title: "CatchUp",
    description:
      "CatchUp is an app for scheduling hangouts with friends and families.",
    tools: ["react", "css", "tailwind"],
    liveLink: "https://catchup.hng.tech/",
    githubLink: "https://github.com/workshopapps/dinnerwithfriends.web",
  },
  {
    img: preNetflix,
    alt: "Pre Netflix",
    title: "Pre Netflix",
    description:
      "A movie info website where you can get information about the latest movies on Netflix.",
    tools: ["nuxt", "css", "scss"],
    liveLink: "https://mayana-movie-app.vercel.app/",
    githubLink: "https://github.com/Izcomayana/Movie-App",
  },
  {
    img: dogped,
    alt: "The Dog Pedigree App",
    title: "The Dog Pedigree App",
    description:
      "An app for tracking the origin of German Shepherds in Nigeria.",
    tools: ["react", "vite", "typescript"],
    liveLink: "https://dogped.vercel.app/",
    githubLink: "https://github.com/AyoOluwa-Israel/dog_pedigree",
  },
  {
    img: mentorshub,
    alt: "MentorsHub",
    title: "MentorsHub",
    description:
      "A platform that offers personalized mentorship experiences, real-world insights, and skill development opportunities.",
    tools: ["next", "typescript", "shadcdn", "tailwind"],
    liveLink: "https://mentorshub.io/",
    githubLink: "https://github.com/proostack/mentored-client",
  },
];

const Projects = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    
  return (
    <>
      <div className="my-20">
        <h2 className="sm:text-3xl">What I've cooked so far 👨‍🍳</h2>
        <p className="dark:text-[#bbbbbb] sm:text-lg">
          I try my best to make the best “meals” and here are some delicious
          ones🍲...
        </p>
        <div className="my-10 flex flex-col justify-center items-center">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-up"
            data-aos-duration="2000" className="project dark:text-[#bbbbbb] lg:w-7/12">
              <div className="h-64 lg:h-[26rem]">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-full"
                />
              </div>
              <div className="my-4 flex">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="mr-3 border border-[#daa520] rounded p-[1.5px] text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                Take a look👀
              </a>
              <br /> <br />
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                Github here👀
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
