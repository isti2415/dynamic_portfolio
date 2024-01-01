// pages/index.js
import {
  BookOpenText,
  Briefcase,
  Calendar,
  Download,
  Facebook,
  FolderGit,
  Github,
  GraduationCap,
  HomeIcon,
  Instagram,
  Linkedin,
  Mail,
  Send,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/theme-toggle-btn";
import Image from "next/image";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbSql,
} from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from "next/head";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
          console.log(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const socials = [
    {
      name: "Github",
      url: "",
      icon: Github,
    },
    {
      name: "Linkedin",
      url: "",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      url: "",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "",
      icon: Instagram,
    },
  ];

  const info = [
    {
      icon: <User />,
      text: "Istiaq Ahmed",
    },
    {
      icon: <Mail />,
      text: "connect@istiaqahmed.me",
    },
    {
      icon: <Calendar />,
      text: "Born on 30th June, 2000",
    },
    {
      icon: <GraduationCap />,
      text: "BSc in CSE, IUB",
    },
  ];

  const experiences = [
    {
      title: "education",
      data: [
        {
          institution: "Independent University, Bangladesh",
          degree: "BSc in Computer Science & Engineering",
          duration: "2020 - Present",
        },
        {
          institution: "Manarat Dhaka International College",
          degree: "A Levels",
          duration: "2017 - 2019",
        },
        {
          institution: "Manarat Dhaka International College",
          degree: "O Levels",
          duration: "2012-2017",
        },
      ],
    },
    {
      title: "experience",
      data: [
        {
          company: "Independent University",
          position: "Student on duty - DBMS",
          duration: "2023-2023",
        },
      ],
    },
  ];

  const skills = [
    {
      name: "HTML, CSS",
      icon: <AiOutlineHtml5 className="w-12 h-12" />,
    },
    {
      name: "Javascript, PHP",
      icon: <FaPhp className="w-12 h-12" />,
    },
    {
      name: "NextJS, React",
      icon: <TbBrandNextjs className="w-12 h-12" />,
    },
    {
      name: "MySQL, PostgreSQL",
      icon: <TbSql className="w-12 h-12" />,
    },
    {
      name: "Front-end Development",
      icon: <TbBrandTailwind className="w-12 h-12" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Istiaq Ahmed</title>
      </Head>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 max-w-screen-xl text-center bg-secondary rounded-none rounded-t-lg z-20">
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            asChild
            className={`hover:bg-primary ${
              activeSection === "home" && "bg-primary"
            } rounded-none rounded-t-lg`}
          >
            <Link href="#home" className="nav-link">
              <HomeIcon className="lg:mr-2" />
              <span className="hidden lg:block">Home</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={`hover:bg-primary ${
              activeSection === "about" && "bg-primary"
            } rounded-none rounded-t-lg`}
          >
            <Link href="#about" className="nav-link">
              <User className="lg:mr-2" />
              <span className="hidden lg:block">About</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={`hover:bg-primary ${
              activeSection === "projects" && "bg-primary"
            } rounded-none rounded-t-lg`}
          >
            <Link href="#projects" className="nav-link">
              <FolderGit className="lg:mr-2" />
              <span className="hidden lg:block">Projects</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={`hover:bg-primary ${
              activeSection === "contact" && "bg-primary"
            } rounded-none rounded-t-lg`}
          >
            <Link href="#contact" className="nav-link">
              <Send className="lg:mr-2" />
              <span className="hidden lg:block">Contact</span>
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>

      <div
        id="home"
        className="flex items-center min-h-screen h-[84vh] py-8 section"
      >
        <div className="mx-auto container flex items-center justify-between">
          <div className="pt-4 flex max-w-[600px] flex-col items-center xl:items-stretch justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="xl:hidden w-[160px] h-[160px] xl:block bg-primary rounded-full -mt-16 lg:mt-0">
              <Image src="/left.png" width={500} height={500} />
            </div>
            <div className="text-sm lg:text-lg uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="text-2xl lg:text-4xl xl:leading-[80px] tracking-[-2px] font-bold mb-4">
              Hello, my name is{" "}
              <p className="text-4xl lg:text-6xl">Istiaq Ahmed</p>
            </h1>
            <p className="text-muted-foreground text-sm lg:text-lg mb-8 font-light">
              I'm a web developer based in Dhaka, Bangladesh, specializing in
              crafting exceptional websites and applications with occasional
              design expertise.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="#contact">
                <Button>
                  <Send className="mr-2" />
                  Contact Me
                </Button>
              </Link>
              <a
                target="_blank"
                href="https://rxresu.me/istiaqahmed87/istiaqs-professional-resume"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">
                  <Download className="mr-2" />
                  Resume
                </Button>
              </a>
            </div>
            <div className="flex gap-x-6 mx-auto xl:mx-8 text-foreground">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
          <div className="hidden w-[600px] h-[600px] xl:block bg-primary rounded-full">
            <Image
              src="/left.png"
              width={500}
              height={500}
              alt="Istiaq Ahmed"
            />
          </div>
        </div>
      </div>

      <div
        id="about"
        className="flex items-center xl:h-[860px] py-8 min-h-screen section"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold relative w-max flex items-center justify-between gap-x-3 mb-8 xl:mb-16 text-center mx-auto">
            About me
          </h2>
          <div className="flex flex-col xl:flex-row gap-x-12">
            <div className="hidden w-[600px] h-[600px] xl:block bg-primary rounded-full pt-2">
              <Image
                src="/right.png"
                width={500}
                height={500}
                alt="Istiaq Ahmed"
              />
            </div>
            <div className="flex-1">
              <Tabs defaultValue="personal" className="flex-col items-center">
                <TabsList className="grid grid-cols-3 border dark:border-none">
                  <TabsTrigger className="w-auto" value="personal">
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger className="w-auto" value="experiences">
                    Experiences
                  </TabsTrigger>
                  <TabsTrigger className="w-auto" value="skills">
                    Skills
                  </TabsTrigger>
                </TabsList>
                <div className="text-lg mt-8">
                  <TabsContent value="personal">
                    <div className="text-center xl:text-left">
                      <h3 className="text-3xl font-bold mb-4">Personal Info</h3>
                      <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {info.map((item, index) => {
                          return (
                            <div
                              className="flex items-center gap-x-4 mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="text-primary">{item.icon}</div>
                              <div>{item.text}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language</div>
                      <div className="border-b border-border" />
                      <div>English, Bengali, Hindi, French</div>
                    </div>
                  </TabsContent>
                  <TabsContent value="experiences">
                    <div className="text-center xl:text-left">
                      <h3 className="text-3xl font-bold mb-4">
                        My Experiences
                      </h3>
                      <div className="grid md:grid-cols-2 gap-y-8">
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <Briefcase />
                            <h4 className="capitalize font-medium">
                              {experiences[1].title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {experiences[1].data.map((item, index) => {
                              const { company, position, duration } = item;

                              return (
                                <div
                                  className="flex gap-x-8 group text-left"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground-mb-4">
                                      {position}
                                    </div>
                                    <div className="text-base font-medium">
                                      {duration}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <BookOpenText />
                            <h4 className="capitalize font-medium">
                              {experiences[0].title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {experiences[0].data.map((item, index) => {
                              const { institution, degree, duration } = item;

                              return (
                                <div
                                  className="flex gap-x-8 group text-left"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {institution}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {degree}
                                    </div>
                                    <div className="text-base font-medium">
                                      {duration}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="skills">
                    <div className="text-center xl:text-left">
                      <h3 className="text-3xl font-bold mb-4">
                        Tools I Use Everyday
                      </h3>
                      <div className="mb-16">
                        <div>
                          {skills.map((skill, index) => {
                            return (
                              <div
                                className="flex items-center gap-x-4 mb-4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="text-primary">{skill.icon}</div>
                                <div>{skill.name}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="flex items-center xl:h-[860px] py-8 min-h-screen section"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold relative w-max flex items-center justify-between gap-x-3 mb-8 xl:mb-16 text-center mx-auto">
            Projects
          </h2>
          <div className="grid xl:grid-cols-3">
            <Carousel>
              <CarouselContent>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="xl:h-[860px] flex items-center py-8 min-h-screen section"
      >
        <div className="container mx-auto">
          <div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[2px] bg-primary"></span>
                Say Hello 👋
              </div>
              <h1 className="max-w-md text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font bold mb-8">
                Let's work together
              </h1>
              <p className="text-lg leading-none text-muted-foreground mb-4 max-w-[400px]">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>
            <div className="hidden xl:flex w-full dark:bg-[url('/illustration-dark.svg')] bg-[url('/illustration-light.svg')] bg-contain bg-top bg-no-repeat"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
