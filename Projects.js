import { CodeIcon} from "@heroicons/react/solid";
import React from " react";
import {projects} from "../data";


export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="conatiner px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xltext-3xl font-medium title-font mb-4 text-white ">
                        Apps I've built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolor
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a 
                        href= {project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img 
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src ={project.image}  />
                                <div className

                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}