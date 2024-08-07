import React from "react";
import Spec from "../assets/spec.png";

import Gssoc from "../assets/gssoc.png";
import Pr from "../assets/pr.png";
import Eve from "../assets/eve.jpeg";
import superteam from "../assets/superteam.jpeg";
import it from "../assets/logo.jpeg";
import Graph from "../assets/graph.jpg";
const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <h2 className="h2 leading-tight text-accent">Experience</h2>
            <div>
              <div className="  min-h-screen items-center justify-center mt-[-80px] flex flex-col lg:flex-row gap-x-10">
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-96 w-72">
                      <img
                        class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src={Spec}
                        alt=""
                      />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 class="font-dmserif text-3xl font-bold text-white">
                        Spec
                      </h1>
                      <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        President
                      </p>
                    </div>
                  </div>
                  <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-96 w-72">
                      <img
                        class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src={it}
                        alt=""
                      />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 class="font-dmserif text-3xl font-bold text-white">
                        IT Sphere Hub
                      </h1>
                      <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Business Growth Specialist
                      </p>
                    </div>
                  </div>
                  <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-96 w-72">
                      <img
                        class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src={Pr}
                        alt=""
                      />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 class="font-dmserif text-3xl font-bold text-white">
                        Pr
                      </h1>
                      <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Coordinator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  min-h-screen items-center justify-center mt-[-250px] flex flex-col lg:flex-row gap-x-10">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gssoc}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Gssoc
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Open-Source Developer
                </p>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Eve}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Eve</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Frontend Developer
                </p>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={superteam}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Superteam India
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Contributor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="  min-h-screen items-center justify-center mt-[-250px] flex flex-col lg:flex-row gap-x-10">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Graph}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  The Graph Protocol
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Ecosystem Growth Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
