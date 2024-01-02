import React from "react";
import {
  TbBrandGit,
  TbBrandJavascript,
  TbBrandPhp,
  TbBrandCpp,
  TbBrandPython,
  TbBrandHtml5,
  TbBrandNextjs,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandMysql,
  TbBrandFirebase,
  TbBrandSupabase,
  TbBrandDocker,
  TbBrandLinux,
  TbBrandPhotoshop,
  TbBrandIllustrator,
  TbBrandGoogle,
  TbBrandVercel,
  TbSql,
} from "react-icons/tb";
import { SiArduino, SiPostgresql, SiOpenai, SiIonic } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa6";

const WithTooltip = ({ children, tooltipContent }) => (
  <Tooltip>
    <TooltipTrigger asChild>{children}</TooltipTrigger>
    <TooltipContent>{tooltipContent}</TooltipContent>
  </Tooltip>
);

export const Ionic = () => {
  return (
    <WithTooltip tooltipContent="Ionic Capacitor">
      <a href="https://capacitorjs.com/" target="_blank" rel="noopener noreferrer">
        <SiIonic className="h-8 w-8"/>
      </a>
    </WithTooltip>
  )
}

export const SQL = () => {
  return (
    <WithTooltip  tooltipContent="SQL">
      <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
        <TbSql className="h-8 w-8"/>
      </a>
    </WithTooltip>
  )
}

export const Openai = () => {
  return (
    <WithTooltip tooltipContent="OpenAI">
      <a href="https://openai.com/" target="_blank" rel="noopener noreferrer">
        <SiOpenai className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Clerk = () => {
  return (
    <WithTooltip tooltipContent="Clerk.js">
      <a
        href="https://clerk.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://authenticator.2stable.com/assets/img/2fa-services/Icons/clerk.com.svg"
          alt="Clerk.js logo"
          className="h-8 w-8"
        />
      </a>
    </WithTooltip>
  );
};

export const Shadcn = () => {
  return (
    <WithTooltip tooltipContent="Shadcn UI">
      <a
        href="https://ui.shadcn.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://ui.shadcn.com/apple-touch-icon.png"
          alt="Shadcn Logo"
          className="h-8 w-8"
        />
      </a>
    </WithTooltip>
  );
};

export const VercelAI = () => {
  return (
    <WithTooltip tooltipContent="Vercel AI">
      <a target="_blank" rel="noopener noreferrer" href="https://vercel.com/ai">
        <TbBrandVercel className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Nextjs = () => {
  return (
    <WithTooltip tooltipContent="Next.js">
      <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
        <TbBrandNextjs className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Cpp = () => {
  return (
    <WithTooltip tooltipContent="C++">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://cplusplus.com/"
      >
        <TbBrandCpp className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Git = () => {
  return (
    <WithTooltip tooltipContent="Git">
      <a target="_blank" rel="noopener noreferrer" href="https://git-scm.com/">
        <TbBrandGit className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Java = () => {
  return (
    <WithTooltip tooltipContent="Java">
      <a target="_blank" rel="noopener noreferrer" href="https://java.com/">
        <FaJava className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const JavaScript = () => {
  return (
    <WithTooltip tooltipContent="JavaScript">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://javascript.com/"
      >
        <TbBrandJavascript className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const PHP = () => {
  return (
    <WithTooltip tooltipContent="PHP">
      <a target="_blank" rel="noopener noreferrer" href="https://php.net/">
        <TbBrandPhp className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Python = () => {
  return (
    <WithTooltip tooltipContent="Python">
      <a target="_blank" rel="noopener noreferrer" href="https://python.org/">
        <TbBrandPython className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const HTML5 = () => {
  return (
    <WithTooltip tooltipContent="HTML5">
      <a target="_blank" rel="noopener noreferrer" href="https://html.com/">
        <TbBrandHtml5 className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const ReactIcon = () => {
  return (
    <WithTooltip tooltipContent="React">
      <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
        <FaReact className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const CSS3 = () => {
  return (
    <WithTooltip tooltipContent="CSS3">
      <a target="_blank" rel="noopener noreferrer" href="https://css3.com/">
        <TbBrandCss3 className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const TailwindCSS = () => {
  return (
    <WithTooltip tooltipContent="Tailwind CSS">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://tailwindcss.com/"
      >
        <TbBrandTailwind className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Bootstrap = () => {
  return (
    <WithTooltip tooltipContent="Bootstrap">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://getbootstrap.com/"
      >
        <TbBrandBootstrap className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const NodeJS = () => {
  return (
    <WithTooltip tooltipContent="Node.js">
      <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">
        <FaNodeJs className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const MySQL = () => {
  return (
    <WithTooltip tooltipContent="MySQL">
      <a target="_blank" rel="noopener noreferrer" href="https://mysql.com/">
        <TbBrandMysql className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const PostgreSQL = () => {
  return (
    <WithTooltip tooltipContent="PostgreSQL">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://postgresql.org/"
      >
        <SiPostgresql className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Firebase = () => {
  return (
    <WithTooltip tooltipContent="Firebase">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://firebase.google.com/"
      >
        <TbBrandFirebase className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Supabase = () => {
  return (
    <WithTooltip tooltipContent="Supabase">
      <a target="_blank" rel="noopener noreferrer" href="https://supabase.io/">
        <TbBrandSupabase className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Arduino = () => {
  return (
    <WithTooltip tooltipContent="Arduino">
      <a target="_blank" rel="noopener noreferrer" href="https://arduino.cc/">
        <SiArduino className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Docker = () => {
  return (
    <WithTooltip tooltipContent="Docker">
      <a target="_blank" rel="noopener noreferrer" href="https://docker.com/">
        <TbBrandDocker className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Linux = () => {
  return (
    <WithTooltip tooltipContent="Linux">
      <a target="_blank" rel="noopener noreferrer" href="https://linux.org/">
        <TbBrandLinux className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Photoshop = () => {
  return (
    <WithTooltip tooltipContent="Photoshop">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://adobe.com/products/photoshop.html"
      >
        <TbBrandPhotoshop className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const Illustrator = () => {
  return (
    <WithTooltip tooltipContent="Illustrator">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://adobe.com/products/illustrator.html"
      >
        <TbBrandIllustrator className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};

export const GoogleCloud = () => {
  return (
    <WithTooltip tooltipContent="Google Cloud">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://cloud.google.com/"
      >
        <TbBrandGoogle className="h-8 w-8" />
      </a>
    </WithTooltip>
  );
};
