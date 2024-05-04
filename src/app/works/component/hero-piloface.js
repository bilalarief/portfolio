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
                src="/img/works/piloface/logo-piloface.png"
                alt="Logo Piloface"
              ></img>
              <p>•</p>
              <p className="text-xl leading-[140%] paragraph-text">
                January-March, 2022
              </p>
            </div>
            <h1 className="leading-[115%] tracking-[-0.01em] font-semibold	text-[44px]">
              Digital Attendance for Students and Teachers
            </h1>
            <p className="text-xl leading-[140%] paragraph-text">
              Piloface is a mobile app for student attendance that uses face
              detection technology and provides course schedules.
            </p>

            <div className="Tags  pb-4 flex flex-wrap gap-2.5">
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                UI Design
              </div>
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                Mobile Design
              </div>
            </div>
          </div>
          <div className="col-start-9 col-span-4 rounded-[16px] w-full h-[393px] bg-cover bg-[url('/img/works/piloface/thumbnail.png')]"></div>
        </div>
        <div className="container max-w-[1180px] grid py-16 items-center my-auto sm:hidden">
          <div className="rounded-[16px] w-full h-[240px] bg-cover bg-[url('/img/works/piloface/thumbnail.png')]"></div>
          <div className="content mt-10 gap-8 grid ">
            <div className="container items-center gap-3 grid">
              <img
                src="/img/works/piloface/logo-piloface.png"
                alt="Logo Piloface"
              ></img>
              <p className="text-[16px] leading-[140%] paragraph-text">
                January-March, 2022
              </p>
            </div>
            <h1 className="leading-[115%] tracking-[-0.01em] font-semibold text-[32px]">
              Digital Attendance for Students and Teachers
            </h1>
            <p className="text-[16px] leading-[140%] paragraph-text">
              Piloface is a mobile app for student attendance that uses face
              detection technology and provides course schedules.
            </p>

            <div className="Tags  pb-4 flex flex-wrap gap-2.5">
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                UI Design
              </div>
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                Mobile Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
