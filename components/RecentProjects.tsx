import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

function RecentProject() {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-12 mt-16">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="w-[90vw] sm:w-[560px] flex justify-center">
            <PinContainer title={title} href={link}>
              {/* IMAGE */}
              <div className="relative w-full h-[220px] rounded-2xl bg-[#13162d] flex items-center justify-center mb-8">
                <img
                  src="/bg.png"
                  alt="background"
                  className="absolute w-full h-full object-cover opacity-30"
                />

                <img
                  src={img}
                  alt={title}
                  className="relative z-10 w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* TITLE */}
              <h1 className="font-bold text-xl lg:text-2xl mb-2">{title}</h1>

              {/* DESCRIPTION */}
              <p className="text-sm lg:text-base text-gray-300 line-clamp-2">
                {des}
              </p>

              {/* TECH + LINK */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/20 rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center"
                      style={{ transform: `translateX(-${index * 8}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <Link
                  href={link}
                  target="_blank"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                >
                  Check Live Site
                  <FaLocationArrow />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentProject;
