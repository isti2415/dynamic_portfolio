// pages/index.js
import { BookOpenText, Briefcase, Calendar, Download, Facebook, FileText, FolderGit, Github, GraduationCap, HomeIcon, Instagram, Linkedin, Mail, PhoneCall, Send, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/theme-toggle-btn";
import Image from "next/image";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind, TbSql } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from "next/head";

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
    }
  ];

  const info = [
    {
      icon: <User />,
      text: "Istiaq Ahmed",
    },
    {
      icon: <PhoneCall />,
      text: "+880 161 116 0290",
    },
    {
      icon: <Mail />,
      text: "istiaqahmed87@gmail.com",
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

  const qualifications = [
    {
      title: 'education',
      data: [
        {
          institution: 'Independent University, Bangladesh',
          degree: 'BSc in Computer Science & Engineering',
          duration: '2020 - Present',
        },
        {
          institution: 'Manarat Dhaka International College',
          degree: 'A Levels',
          duration: '2017 - 2019',
        },
        {
          institution: 'Manarat Dhaka International College',
          degree: 'O Levels',
          duration: '2012-2017',
        },
      ],
    },
    {
      title: 'experience',
      data: [
        {
          company: 'Photolab Trading',
          position: 'Chief Executive Officer',
          duration: '2020 - Present',
        },
        {
          company: 'Independent University',
          position: 'Student on duty - DBMS',
          duration: '2023-2023'
        },
      ]
    }
  ]

  const skills = [
    {
      name: 'HTML, CSS',
      icon: <AiOutlineHtml5 className="w-12 h-12" />
    },
    {
      name: 'Javascript, PHP',
      icon: <FaPhp className="w-12 h-12" />
    },
    {
      name: 'NextJS, React',
      icon: <TbBrandNextjs className="w-12 h-12" />
    },
    {
      name: 'MySQL, PostgreSQL',
      icon: <TbSql className="w-12 h-12" />
    },
    {
      name: 'Front-end Development',
      icon: <TbBrandTailwind className="w-12 h-12" />
    },
  ]

  return (
    <>
      <Head>
        <title>Istiaq Ahmed</title>
      </Head>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 max-w-screen-xl text-center bg-secondary rounded-none rounded-t-lg z-20">
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" asChild className={`hover:bg-primary ${activeSection === "home" && "bg-primary"} rounded-none rounded-t-lg`}>
            <Link href="#home" className="nav-link">
              <HomeIcon className="lg:mr-2" />
              <span className="hidden lg:block">Home</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className={`hover:bg-primary ${activeSection === "about" && "bg-primary"} rounded-none rounded-t-lg`}>
            <Link href="#about" className="nav-link">
              <User className="lg:mr-2" />
              <span className="hidden lg:block">About</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className={`hover:bg-primary ${activeSection === "projects" && "bg-primary"} rounded-none rounded-t-lg`}>
            <Link href="#projects" className="nav-link">
              <FolderGit className="lg:mr-2" />
              <span className="hidden lg:block">Projects</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className={`hover:bg-primary ${activeSection === "contact" && "bg-primary"} rounded-none rounded-t-lg`}>
            <Link href="#contact" className="nav-link">
              <Send className="lg:mr-2" />
              <span className="hidden lg:block">Contact</span>
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>

      <div id="home" className="min-h-screen py-12 xl:py-24 h-[84vh] xl:pt-24 section">
        <div className="mx-auto container flex items-center justify-between">
          <div className="pt-4 flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
            <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font bold mb-4">Hello, my name is Istiaq Ahmed</h1>
            <p className="text-muted-foreground text-lg mb-8 font-light">
              I'm a web developer based in Dhaka, Bangladesh specializing in
              building (and occasionally designing) exceptional websites,
              applications, and everything in between.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button>
                  <Send className="mr-2" />
                  Contact Me
                </Button>
              </Link>
              <Link href="/resume">
                <Button variant="secondary">
                  <Download className="mr-2" />
                  Resume
                </Button>
              </Link>
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
            <Image src="/left.png" width={500} height={500} />
          </div>
        </div>
      </div>

      <div id="about" className="xl:h-[860px] pb-12 min-h-screen section">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold relative w-max flex items-center justify-between gap-x-3 pt-4 mb-8 xl:mb-16 text-center mx-auto">
            About me
          </h2>
          <div className="flex flex-col xl:flex-row gap-x-12">
            <div className="hidden xl:flex flex-1 relative w-[600px] h-[600px] bg-primary rounded-full">
              <Image src="/right.png" width={500} height={500} />
            </div>
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                  <TabsTrigger className="w-[162px] xl:w-auto" value='personal' >Personal Info</TabsTrigger>
                  <TabsTrigger className="w-[162px] xl:w-auto" value='qualifications' >Qualifications</TabsTrigger>
                  <TabsTrigger className="w-[162px] xl:w-auto" value='skills' >Skills</TabsTrigger>
                </TabsList>
                <div className="text-lg mt-12 xl:mt-8">
                  <TabsContent value='personal'>
                    <div className="text-center xl:text-left">
                      <h3 className="text-3xl font-bold mb-4">Unmatched Service Quality for Over 5 Years</h3>
                      <p className="text-muted-foreground text-lg mb-8 font-light max-w-xl mx-auto xl:mx-0">I specialize in craftin intuitive websites with cutting-edge technology, delivering dynamic and engaging user experience.</p>
                    </div>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {info.map((item, index) => {
                        return (
                          <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      }
                      )}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border" />
                      <div>English, Bengali, Hindi, French</div>
                    </div>
                  </TabsContent>
                  <TabsContent value='qualifications'>
                    <div className="text-center xl:text-left">
                      <h3 className="text-3xl font-bold mb-4">My Awesome Journey</h3>
                      <div className="grid md:grid-cols-2 gap-y-8">
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <Briefcase />
                            <h4 className="capitalize font-medium">
                              {qualifications[1].title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {qualifications[1].data.map((item, index) => {

                              const { company, position, duration } = item

                              return (
                                <div className="flex gap-x-8 group text-left" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                    <div className="text-lg leading-none text-muted-foreground-mb-4">{position}</div>
                                    <div className="text-base font-medium">{duration}</div>
                                  </div>
                                </div>
                              )
                            }
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <BookOpenText />
                            <h4 className="capitalize font-medium">
                              {qualifications[0].title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {qualifications[0].data.map((item, index) => {

                              const { institution, degree, duration } = item

                              return (
                                <div className="flex gap-x-8 group text-left" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">{institution}</div>
                                    <div className="text-lg leading-none text-muted-foreground-mb-4">{degree}</div>
                                    <div className="text-base font-medium">{duration}</div>
                                  </div>
                                </div>
                              )
                            }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value='skills'>
                    <div className="text-center xl:text-left">
                      <h3 className="text-3xl font-bold mb-4">Tools I Use Everyday</h3>
                      <div className="mb-16">
                        <h4 className="text-xl font-medium mb-4">Skills</h4>
                        <div className="border-b border-border mb-4" />
                        <div>
                          {skills.map((skill, index) => {
                            return (
                              <div className="flex items-center gap-x-4 mb-4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                <div className="text-primary">{skill.icon}</div>
                                <div>{skill.name}</div>
                              </div>
                            );
                          }
                          )}
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
      <div id="projects" className="flex flex-col items-center justify-center min-h-screen py-2 section">
        <h1 className="text-6xl font-bold text-center text-primary">Projects Section</h1>
      </div>
      <div id="contact" className="flex flex-col items-center justify-center min-h-screen py-2 section">
        <h1 className="text-6xl font-bold text-center text-primary">Contact Section</h1>
      </div>
    </>
  );
};

export default Home;
