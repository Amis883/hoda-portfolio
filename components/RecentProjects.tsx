import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      {/* Heading */}
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* Projects Grid */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-x-24 gap-y-8 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-center 
                       w-[80vw] sm:w-[570px] 
                       h-[32rem] sm:h-[41rem] 
                       lg:min-h-[32.5rem]"
          >
            {/* ✅ فقط این لینک باقی می‌مونه */}
            <PinContainer title={project.title} href={project.link}>
              {/* Image Section */}
              <div
                className="relative mb-10 flex items-center justify-center 
                              w-[80vw] sm:w-96 h-[30vh] overflow-hidden"
              >
                {/* Background */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#13162d]">
                  <Image
                    src="/bg.png"
                    alt="project background"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Main Image */}
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rotate-2 mb-4"
                />
              </div>

              {/* Title */}
              <h2 className="text-base md:text-xl lg:text-2xl font-bold line-clamp-1">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm lg:text-xl font-light line-clamp-2">
                {project.des}
              </p>

              {/* Footer */}
              <div className="mt-7 mb-3 flex items-center justify-between">
                {/* Tech Stack */}
                <div className="flex items-center">
                  {project.iconLists.map((icon, i) => (
                    <div
                      key={`${project.id}-${icon}`}
                      className="flex items-center justify-center 
                                 w-8 h-8 lg:w-10 lg:h-10 
                                 rounded-full bg-black  white
                                 border border-white/[0.2]"
                      style={{ transform: `translateX(-${i * 10}px)` }}
                    >
                      <Image
                        src={icon}
                        alt="technology"
                        width={20}
                        height={20}
                        className="p-1"
                      />
                    </div>
                  ))}
                </div>

                {/* ✅ بدون لینک اضافه */}
                <div className="flex items-center text-purple-400">
                  <span>Check Live Site</span>
                  <FaLocationArrow className="ms-3" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
