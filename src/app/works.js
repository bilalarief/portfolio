"use client"; // 👈 use it here
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-73vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation mdsmkdsmkon component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section>
      <div className="px-10 py-10 sm:hidden grid gap-10">
         <a href="/works/superalink">
          {" "}
          <div className="Superalink w-full rounded-lg border-2 overflow-auto	">
            <div className="bg-center bg-cover bg-[url('/img/home/superalink.png')] w-full h-[248px]"></div>
            <div className="body bg-[#F5F5F5]">
              <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                Content Management System for Blog
              </p>
              <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  UI Design
                </div>
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  SaaS Design
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/works/d2l">
          {" "}
          <div className="d2l w-full rounded-lg border-2 overflow-auto	">
            <div className="bg-center bg-cover bg-[url('/img/home/d2l.png')] w-full h-[248px]"></div>
            <div className="body bg-[#F5F5F5]">
              <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                Landing page for foodwaste company
              </p>
              <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  UI Design
                </div>
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  Landing Page
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/works/printin">
          {" "}
          <div className="d2l w-full rounded-lg border-2 overflow-auto	">
            <div className="bg-center bg-cover bg-[url('/img/home/printin.png')] w-full h-[248px]"></div>
            <div className="body bg-[#F5F5F5]">
              <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                Landing page for a printin services mobile apps
              </p>
              <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  UI Design
                </div>
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  Landing Page
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/works/onlinegps">
          {" "}
          <div className="d2l w-full rounded-lg border-2 overflow-auto	">
            <div className="bg-center bg-cover bg-[url('/img/home/onlinegps.png')] w-full h-[248px]"></div>
            <div className="body bg-[#F5F5F5]">
              <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                GPS Tracking System Website Application
              </p>
              <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  UI Design
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* <a href="/works/trackerid">
          {" "}
          <div className="d2l w-full rounded-lg border-2 overflow-auto	">
            <div className="bg-center bg-cover bg-[url('/img/home/trackerid.png')] w-full h-[248px]"></div>
            <div className="body bg-[#F5F5F5]">
              <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                User Manual Book for GPS Tracking System Apps
              </p>
              <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  Graphic Design
                </div>
              </div>
            </div>
          </div>
        </a> */}
       
        <a href="/works/beliesim">
          {" "}
          <div className="Printon w-full rounded-lg border-2 overflow-auto	">
            <div className="bg-center bg-cover bg-[url('/img/home/beliesim.png')] w-full h-[248px]"></div>
            <div className="body bg-[#F5F5F5]">
              <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                Landing page for affiliate program
              </p>
              <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  UI Design
                </div>
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  Responsive Design
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* <a href="/works/piloface">
          {" "}
          <div className="Printon w-full rounded-lg border-2 overflow-auto	">
            <div className="bg-center bg-cover bg-[url('/img/home/piloface.png')] w-full h-[248px]"></div>
            <div className="body bg-[#F5F5F5]">
              <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                Digital Attendance for Students and Teachers
              </p>
              <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  UI Design
                </div>
                <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                  Mobile Design
                </div>
              </div>
            </div>
          </div>
        </a> */}
      </div>
      <div className="scroll-section-outer max-sm:hidden">
        {" "}
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
             <div className="scroll-section ">
              <a href="/works/superalink">
                {" "}
                <div className="Superalink w-[376px] rounded-lg border-2 overflow-auto	">
                  <div className="bg-cover bg-[url('/img/home/superalink.png')] w-full h-[377px] "></div>
                  <div className="body bg-[#F5F5F5]">
                    <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                      Content Management System for Blog
                    </p>
                    <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        UI Design
                      </div>
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        SaaS Design
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="scroll-section ">
              <a href="/works/d2l">
                {" "}
                <div className="Printon w-[376px] rounded-lg border-2 overflow-auto	">
                  <div className="bg-cover bg-[url('/img/home/d2l.png')] w-full h-[377px] "></div>
                  <div className="body bg-[#F5F5F5]">
                    <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                      Landing page for foodwaste company
                    </p>
                    <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        UI Design
                      </div>
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        Landing Page
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="scroll-section ">
              <a href="/works/printin">
                {" "}
                <div className="Printon w-[376px] rounded-lg border-2 overflow-auto	">
                  <div className="bg-cover bg-[url('/img/home/printin.png')] w-full h-[377px] "></div>
                  <div className="body bg-[#F5F5F5]">
                    <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                      Landing page for a printin services mobile apps
                    </p>
                    <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        UI Design
                      </div>
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        Landing Page
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="scroll-section ">
              <a href="/works/onlinegps">
                {" "}
                <div className="Printon w-[376px] rounded-lg border-2 overflow-auto	">
                  <div className="bg-cover bg-[url('/img/home/onlinegps.png')] w-full h-[377px] "></div>
                  <div className="body bg-[#F5F5F5]">
                    <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                      GPS Tracking System Website Application
                    </p>
                    <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        UI Design
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* <div className="scroll-section ">
              <a href="/works/trackerid">
                {" "}
                <div className="Printon w-[376px] rounded-lg border-2 overflow-auto	">
                  <div className="bg-cover bg-[url('/img/home/trackerid.png')] w-full h-[377px] "></div>
                  <div className="body bg-[#F5F5F5]">
                    <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                      User Manual Book for GPS Tracking System Apps
                    </p>
                    <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        Graphic Design
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div> */}
           

            <div className="scroll-section ">
              <a href="/works/beliesim">
                {" "}
                <div className="Printon w-[376px] rounded-lg border-2 overflow-auto	">
                  <div className="bg-cover bg-[url('/img/home/beliesim.png')] w-full h-[377px] "></div>
                  <div className="body bg-[#F5F5F5]">
                    <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                      Landing page for affiliate program
                    </p>
                    <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        UI Design
                      </div>
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        Responsive Design
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* <div className="scroll-section ">
              <a href="/works/piloface">
                {" "}
                <div className="Printon w-[376px] rounded-lg border-2 overflow-auto	">
                  <div className="bg-cover bg-[url('/img/home/piloface.png')] w-full h-[377px] "></div>
                  <div className="body bg-[#F5F5F5]">
                    <p className="text-black px-4 pt-4 pb-6 text-[18px] leading-[140%] font-medium">
                      Digital Attendance for Students and Teachers
                    </p>
                    <div className="Tags px-4 pb-4 flex flex-wrap gap-2.5">
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        UI Design
                      </div>
                      <div className="text-black Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#1D1D1D]">
                        Mobile Design
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
