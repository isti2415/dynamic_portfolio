// pages/index.js
import {
  BookOpenText,
  Briefcase,
  Cake,
  Copy,
  Download,
  Facebook,
  FolderGit,
  Github,
  GraduationCap,
  HomeIcon,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  Send,
  User,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/theme-toggle-btn";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from "next/head";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Arduino,
  CSS3,
  Cpp,
  Firebase,
  HTML5,
  Ionic,
  Java,
  MySQL,
  Nextjs,
  NodeJS,
  Openai,
  PHP,
  PostgreSQL,
  Python,
  ReactIcon,
  SQL,
  Shadcn,
  Supabase,
  TailwindCSS,
  VercelAI,
} from "@/components/icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import ProjectCard from "@/components/ProjectCard";
import Autoplay from 'embla-carousel-autoplay';

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sending, setSending] = useState(false);

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
      url: "https://github.com/isti2415",
      icon: Github,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/istiaqahmed2415/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/xo2415",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/istiaqahmed_17",
      icon: Instagram,
    },
    {
      name: "X",
      url: "https://twitter.com/IstiaqA01586361",
      icon: FaXTwitter,
    },
    {
      name: "Discord",
      url: "https://discord.com/users/istiaq1210",
      icon: FaDiscord,
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@istiaqahmed_17",
      icon: FaThreads,
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
      icon: <Cake />,
      text: "Born on 30th June, 2000",
    },
    {
      icon: <GraduationCap />,
      text: "BSc in Computer Science, IUB",
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
        {
          company: "Tech Junkies",
          position: "Researcher & Content Writer",
          duration: "2020-2020",
        },
      ],
    },
  ];

  function ContactForm() {
    const initialFormData = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSending(true);
      // Send data to the server or do whatever you need with it
      try {
        const response = await fetch("/api/sendMail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log("Response:", response);
        if (response.ok) {
          setSending(false);
          toast("Email sent successfully");
          // You can add further actions upon successful email submission
        } else {
          setSending(false);
          toast("Error sending email", {
            description: response.body.details,
          });
          // Handle error cases
        }
      } catch (error) {
        setSending(false);
        toast("Error sending email", {
          description: error,
        });
        // Handle other error cases
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={sending}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={sending}
          />
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            disabled={sending}
          />
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            disabled={sending}
          />
        </div>
        <Button type="submit" className="mt-2 w-full">
          {sending ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
      </form>
    );
  }

  const ContactInfo = ({ email, socials }) => (
    <div className="grid grid-cols-2 gap-8 text-foreground text-left">
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="flex gap-2 text-white items-center cursor-pointer hover:text-primary"
            onClick={() => {
              window.location.href = `mailto:${email}`;
            }}
          >
            <Mail />
            Email
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <Copy />
        </TooltipContent>
      </Tooltip>
      {socials.map(({ url, icon: SocialIcon, name }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-all"
        >
          <div className="flex items-center gap-2">
            <SocialIcon className="h-6 w-6" />
            {name}
          </div>
        </a>
      ))}
    </div>
  );

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
            className={`hover:bg-primary ${activeSection === "home" && "bg-primary"
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
            className={`hover:bg-primary ${activeSection === "about" && "bg-primary"
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
            className={`hover:bg-primary ${activeSection === "projects" && "bg-primary"
              } rounded-none rounded-t-lg`}
          >
            <Link href="#projects" className="nav-link">
              <FolderGit className="lg:mr-2" />
              <span className="hidden lg:block">Projects</span>
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
            <div className="xl:hidden w-[160px] h-[160px] bg-primary rounded-full -mt-16 lg:mt-0">
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Send className="mr-2" />
                    Contact Me
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-bold mb-2 text-left">
                      Feel free to reach out.
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-8">
                    <ContactInfo
                      email={"connect@istiaqahmed.me"}
                      socials={socials}
                    />
                    <ContactForm />
                  </div>
                </DialogContent>
              </Dialog>
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
            <div className="flex gap-x-6 text-foreground xl:text-left">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all"
                >
                  <social.icon className="h-6 w-6" />
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
                      <div>English, Bengali</div>
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
                      <h3 className="text-3xl font-bold mb-4">My Skills</h3>
                      <div className="space-y-4">
                        <div>Web Development:</div>
                        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
                          <Nextjs />
                          <ReactIcon />
                          <TailwindCSS />
                          <HTML5 />
                          <CSS3 />
                          <PHP />
                          <NodeJS />
                        </div>
                        <div>Programming Language</div>
                        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
                          <Cpp />
                          <Python />
                          <SQL />
                          <PHP />
                          <Java />
                        </div>
                        <div>Database</div>
                        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
                          <MySQL />
                          <PostgreSQL />
                          <Firebase />
                          <Supabase />
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
        className="flex items-center xl:h-[860px] py-8 mb-8 min-h-screen section"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold relative w-max flex items-center justify-between gap-x-3 mb-8 text-center mx-auto">
            Projects
          </h2>
          <Tabs defaultValue="javascript" className="flex-col items-center">
            <TabsList className="grid grid-cols-3 border dark:border-none">
              <TabsTrigger className="w-auto" value="javascript">
                Javascript
              </TabsTrigger>
              <TabsTrigger className="w-auto" value="php">
                PHP
              </TabsTrigger>
              <TabsTrigger className="w-auto" value="miscellenous">
                Miscellenous
              </TabsTrigger>
            </TabsList>
            <TabsContent value="javascript">
              <Carousel className="mt-4 mx-auto lg:mx-8" opts={{ align: "start", loop: true }} plugins={[Autoplay({delay: 2000})]}>
                <CarouselContent>
                  <ProjectCard
                    title="GardenR"
                    description="A Human-Centric Web Application built on Next.js that aligns with the principles of human-computer interaction (HCI) and user-centered design. This project provides an interface to a hardware system built around ESP8266 and features an AI user agent."
                    imageSrc="/projects/gardenr1.png"
                    gitLink="https://github.com/isti2415/gardenr"
                    deploymentLink="https://gardenr.vercel.app/"
                    techStack={[
                      Nextjs,
                      TailwindCSS,
                      Shadcn,
                      Arduino,
                      Supabase,
                      PostgreSQL,
                      Openai,
                      VercelAI,
                      Ionic,
                    ]}
                  />
                  <ProjectCard
                    title="ResearchSync"
                    description="A Next.js application, fueled purely by hobby and passion, that facilitates the literature review and collaboration for Researchers with future plans of implementing Markdown."
                    imageSrc="/projects/researchsync1.png"
                    gitLink="https://github.com/isti2415/researchsync"
                    deploymentLink="https://researchsync.vercel.app/"
                    techStack={[Nextjs, TailwindCSS, Shadcn, Firebase]}
                  />
                  <ProjectCard
                    title="JUKTI Funds"
                    description="A simple Next.js application created to handle the day-to-day operations of JUKTI - The Official Club of CSE, IUB."
                    imageSrc="/projects/juktifunds1.png"
                    gitLink="https://github.com/isti2415/jukti-funds"
                    deploymentLink="https://funds.jukti.club/"
                    techStack={[Nextjs, TailwindCSS, Firebase]}
                  />
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </TabsContent>
            <TabsContent value="php">
              <Carousel className="mt-4 mx-auto lg:mx-8">
                <CarouselContent>
                  <ProjectCard
                    title="BudgetBuddy"
                    description="A simple budget tracker web application made as a part of Web Applications course. Its deployment ready and uses API calls and database operations."
                    imageSrc="/projects/budgetbuddy1.png"
                    gitLink="https://github.com/isti2415/Web-Applications-BudgetBuddy"
                    techStack={[PHP, HTML5, CSS3, MySQL, TailwindCSS]}
                  />
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </TabsContent>
            <TabsContent value="miscellenous">
              <Carousel className="mt-4 mx-auto lg:mx-8">
                <CarouselContent>
                  <ProjectCard
                    title="Simulating the operations at DESCO"
                    description="A Java FXML application made as part of the Object Oriented Programming course that simulates 8 operations each of 8 types of users of Dhaka Electric Supply Company Limited."
                    imageSrc="/projects/desco1.png"
                    gitLink="https://github.com/isti2415/Simulating-the-operations-at-DESCO"
                    techStack={[Java]}
                  />
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Home;
