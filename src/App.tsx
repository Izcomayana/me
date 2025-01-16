import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";

// // importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// images
import me from "../public/me.svg";
import linkedIn from "../public/yellow-linkedin.svg";
import github from "../public/yellow-git.svg";
import twitter from "../public/yellow-twitter.svg";
import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javascript.png";
import nuxt from "../public/nuxt.svg";
import vue from "../public/vue.png";
import sass from "../public/sass.png";
import tailwind from "../public/tailwindcss.svg";
import react from "../public/react.svg";

const skills = [
  { src: html, alt: "HTML", duration: 100 },
  { src: css, alt: "CSS", duration: 300 },
  { src: sass, alt: "SCSS", duration: 500 },
  { src: tailwind, alt: "TailwindCSS", duration: 700 },
  { src: javascript, alt: "JavaScript", duration: 1100 },
  { src: react, alt: "ReactJS", duration: 1300 },
  { src: vue, alt: "VueJS", duration: 1500 },
  { src: nuxt, alt: "NuxtJS", duration: 1700 },
];

function App() {
  const [toggleDarkmode, setToggleDarkmode] = useState(true);

  const handleToggleDarkmode = () => {
    setToggleDarkmode((prev) => !prev);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={`scroll-smooth relative ${toggleDarkmode && "dark"}`}>
        <div className="transition ease-in duration-550 dark:bg-[#161616] scrollbar">
          <div className="container mx-0 px-4 md:px-8">
            <Header
              toggleDarkmode={toggleDarkmode}
              onToggleDarkmode={handleToggleDarkmode}
            />

            <main>
              <div className="mt-4">
                <div className="text-center dark:text-white">
                  <img className="inline my-10" src={me} alt="" />
                  <h1
                    className="text-6xl font-bold pt-6 sm:text-8xl"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    {" "}
                    I'm Israel.
                  </h1>
                  <p className="dark:text-[#bbbbbb] sm:text-lg my-2">
                    I build amazing products.
                  </p>
                </div>

                <div className="items-end my-12">
                  <div className="links flex justify-between text-center w-[80%] mt-8 m-auto sm:w-[35%] sm:mt-12">
                    <a
                      className="w-[10%]"
                      href="https://www.linkedin.com/in/oluwapelumi-sotoyinbo-28439a20b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={linkedIn} alt="" />
                    </a>
                    <a
                      className="w-[10%]"
                      href="https://github.com/izcomayana"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={github} alt="" />
                    </a>
                    <a
                      className="w-[10%]"
                      href="https://x.com/mayana45n"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                </div>

                <div
                  className="py-12 pt-20"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h2 className="md:text-3xl">First Of All 🤞🏽</h2>
                  <p className="dark:text-[#bbbbbb] md:text-lg">
                    Hi, I’m Israel Oluwapelumi, a frontend developer passionate
                    about crafting intuitive and high-performance web
                    experiences. I excel at collaborating with teams to solve
                    problems, provide innovative solutions, and deliver
                    user-friendly interfaces. With a growth mindset and a
                    dedication to modern development tools, I constantly seek to
                    learn, improve, and build exceptional digital products.
                  </p>
                </div>

                <div className="mt-16">
                  <h2 className="sm:text-3xl">My Skill Set 🤹</h2>
                  <div className="skill-icons flex flex-wrap justify-evenly gap-5 mt-10">
                    {skills.map((skill, index) => (
                      <img
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration={skill.duration}
                        className="mb-6 md:w-1/5"
                        src={skill.src}
                        alt={skill.alt}
                      />
                    ))}
                  </div>
                </div>

                <Projects />
              </div>
              <div className="w-fit mx-auto">
                <p className="dark:text-[#bbbbbb] pb-10 sm:text-lg">
                  <a
                    href="https://github.com/izcomayana"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    There's more on github...
                  </a>
                </p>
              </div>
            </main>
          </div>
        </div>

        <footer className="bg-[#daa520] text-white p-10 sm:p-14">
              <h2 className="text-white text-2xl sm:text-4xl">
                Friends now🤝🏽?
              </h2>
              <p className="my-2 sm:my-4 sm:text-lg">
                Got a question, project or want to work together on something?
                Feel free to reach out👋🏽. <br />
                I’m currently looking fresh opportunities to do what I love and
                also build amazing stuffs. <br />
                I’m ready to apply my passion for coding to a talented
                engineering team to develop quality solutions.
              </p>
              <a
                href="mailto:oluwapelumisotoyinbo@gmail.com"
                className="text-sm underline sm:text-lg"
              >
                oluwapelumisotoyinbo@gmail.com
              </a>{" "}
              <br /> <br />
              <a
                href="tel:+2348036567514"
                className="hover:text-[#daa520] hover:bg-gray-100 hover:border-[#daa520] transition-all duration-200 tel mt-13 rounded border-[1px] border-white mt-3 p-1 sm:text-lg"
              >
                08036567514
              </a>
            </footer>
      </div>
    </>
  );
}

export default App;
