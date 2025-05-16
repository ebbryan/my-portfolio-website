"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import useIsLgScreen from "@/hooks/useLGScreen";

const SiteProjectsSection = () => {
  const isLG = useIsLgScreen()
  const projects = [
    {
      title: "Matchpoint Playcourts",
      description:
        "An online tournament management platform leveraging TypeScript, Next.js 14, ShadCN UI, and Tailwind CSS for a responsive frontend, with Directus CMS providing a robust and headless content backend.",
      image: {
        src: "/static/matchpoint.png",
        alt: "matchpoint",
        width: 800,
        height: 800,
      },
      link: {
        url: "https://matchpointplaycourts.com/",
        label: "Visit",
      },
    },
    {
      title: "Dr Chu Portfolio Website",
      description:
        "Professional portfolio site built using WordPress with a focus on customization and ease of content management.",
      image: {
        src: "/static/drchu.png",
        alt: "drchu",
        width: 800,
        height: 800,
      },
      link: {
        url: "https://drchusantosortho.com/",
        label: "Visit",
      },
    },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen p-5">
      <div className="w-full bg-white/60 flex flex-col gap-5">
        <div className="flex items-center justify-center md:items-start md:justify-start">
          <h1 className="text-4xl font-black flex gap-3 text-center">
            My
            <span className="text-orange-500">Projects</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className={`${isLG ? `hover:scale-105` : ``} transition-all`}>
              <CardHeader>
                <CardTitle className="text-xl text-center md:text-left">{project.title}</CardTitle>
                <CardDescription className="h-full lg:h-[20vh]">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 lg:h-[20vh] flex flex-row items-center justify-center">
                  <Image
                    alt={project.image.alt}
                    src={project.image.src}
                    width={project.image.width}
                    height={project.image.height}
                    className="transition-all shadow-md"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-end">
                <Button asChild>
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.label}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteProjectsSection;
