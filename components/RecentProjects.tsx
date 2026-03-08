import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

function RecentProject() {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              {/* Project Image */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image
                    src="/bg.png"
                    alt="background"
                    fill
                    className="object-cover"
                  />
                </div>

                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={300}
                  className="mb-4 rotate-2"
                />
              </div>

              {/* Title */}
              <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h2>

              {/* Description */}
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              {/* Tech Stack + Link */}
              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Tech Icons */}
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${index * 10}px)` }}
                    >
                      <Image
                        src={icon}
                        alt="tech"
                        width={20}
                        height={20}
                        className="p-1"
                      />
                    </div>
                  ))}
                </div>

                {/* Live Site */}
                <div className="flex items-center text-purple-400 hover:text-purple-300">
                  <span>Check Live Site</span>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentProject;
