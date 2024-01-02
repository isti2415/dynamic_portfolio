import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CarouselItem } from "./ui/carousel"; // Import your card components
  

const ProjectCard = ({
  title,
  description,
  imageSrc,
  gitLink,
  deploymentLink,
  techStack,
}) => (
  <CarouselItem>
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <img src={imageSrc} alt={title} />
        <div className="flex flex-col text-left gap-2">
          Technology Stack:
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            {techStack.map((TechIcon, index) => (
              <TechIcon key={index} />
            ))}
          </div>
        </div>
        <div>
          Git:{" "}
          <a className="hover:underline" href={gitLink}>
            {gitLink}
          </a>
        </div>
        <div>
          Deployment:{" "}
          <a className="hover:underline" href={deploymentLink}>
            {deploymentLink}
          </a>
        </div>
      </CardContent>
    </Card>
  </CarouselItem>
);

export default ProjectCard;
