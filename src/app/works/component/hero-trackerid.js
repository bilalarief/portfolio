import React from "react";

export default function hero() {
  return (
    <section>
      <div className="absolute bg-noise z-[-3] w-full h-[100vh] max-sm:h-[100%]"></div>
      <div className="px-10 flex min-h-screen flex-col items-center justify-between bg-cover bg-[url('/img/home/bg-hero.png')] ">
        <div className="container max-w-[1180px] grid grid-cols-12 flex justify-between items-center my-auto max-sm:hidden">
          <div className="content col-span-7 gap-8 grid">
            <div className="container flex items-center gap-3">
              <img
                src="/img/works/trackerid/logo-trackerid.png"
                alt="Logo trackerid"
              ></img>
              <p>•</p>
              <p className="text-xl leading-[140%] paragraph-text">
                January - February, 2025
              </p>
            </div>
            <h1 className="leading-[115%] tracking-[-0.01em] font-semibold	text-[44px]">
              User Manual Book for GPS Tracking System Apps
            </h1>
            <p className="text-xl leading-[140%] paragraph-text">
              Trackerid is a GPS tracking system designed to monitor and manage
              vehicles in real-time. With advanced features like geofencing,
              sensor integration, and route tracking, it ensures security,
              efficiency, and seamless fleet management.
            </p>
            <div className="Tags  pb-4 flex flex-wrap gap-2.5">
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                Graphic Design
              </div>
            </div>
          </div>
          <div className="col-start-9 col-span-4 rounded-[16px] w-full h-[393px] bg-cover bg-[url('/img/works/trackerid/thumbnail.png')]"></div>
        </div>
        <div className="container max-w-[1180px] grid py-16 items-center my-auto sm:hidden">
          <div className="rounded-[16px] w-full h-[240px] bg-cover bg-[url('/img/works/trackerid/thumbnail.png')]"></div>
          <div className="content mt-10 gap-8 grid ">
            <div className="container items-center gap-3 grid">
              <img
                src="/img/works/trackerid/logo-trackerid.png"
                alt="Logo trackerid"
              ></img>
              <p className="text-[16px] leading-[140%] paragraph-text">
                December 2024 - February 2025
              </p>
            </div>
            <h1 className="leading-[115%] tracking-[-0.01em] font-semibold text-[32px]">
              GPS Tracking System Website Application
            </h1>
            <p className="text-[16px] leading-[140%] paragraph-text">
              trackerid is a GPS tracking system designed to monitor and manage
              vehicles in real-time. With advanced features like geofencing,
              sensor integration, and route tracking, it ensures security,
              efficiency, and seamless fleet management.
            </p>

            <div className="Tags  pb-4 flex flex-wrap gap-2.5">
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                UI Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
