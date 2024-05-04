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
                src="/img/works/superalink/logo-superalink.svg"
                alt="Logo Superalink"
              ></img>
              <p>•</p>
              <p className="text-xl leading-[140%] paragraph-text">
                January - February, 2024
              </p>
            </div>
            <h1 className="leading-[115%] tracking-[-0.01em] font-semibold	text-[44px]">
              Content Management System for Blog
            </h1>
            <p className="text-xl leading-[140%] paragraph-text">
              Supera Link offers electronic SIM cards (eSIM) to its customers
              who want to travel internationally. They have a blog page on their
              website with posts about travel and technology.
            </p>
            <a
              href="https://www.superalink.com/blog"
              target="_blank"
              className="w-max bg-[#F5F5F5] text-[#1D1D1D] text-[18px] leading-[140%] px-4 py-2 rounded-lg font-medium flex items-center w-fit"
            >
              Visit site
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4"
              >
                <path
                  d="M14.0306 9.03122L9.53063 13.5312C9.38973 13.6721 9.19863 13.7513 8.99938 13.7513C8.80012 13.7513 8.60902 13.6721 8.46813 13.5312C8.32723 13.3903 8.24807 13.1992 8.24807 13C8.24807 12.8007 8.32723 12.6096 8.46813 12.4687L11.6875 9.2506H2.5C2.30109 9.2506 2.11032 9.17158 1.96967 9.03093C1.82902 8.89028 1.75 8.69951 1.75 8.5006C1.75 8.30169 1.82902 8.11092 1.96967 7.97027C2.11032 7.82962 2.30109 7.7506 2.5 7.7506H11.6875L8.46937 4.5306C8.32848 4.3897 8.24932 4.19861 8.24932 3.99935C8.24932 3.80009 8.32848 3.60899 8.46937 3.4681C8.61027 3.3272 8.80137 3.24805 9.00062 3.24805C9.19988 3.24805 9.39098 3.3272 9.53187 3.4681L14.0319 7.9681C14.1018 8.03787 14.1573 8.12077 14.1951 8.21203C14.2329 8.3033 14.2523 8.40113 14.2522 8.49992C14.252 8.5987 14.2324 8.69649 14.1944 8.78767C14.1564 8.87885 14.1007 8.96162 14.0306 9.03122Z"
                  fill="#1D1D1D"
                />
              </svg>
            </a>
            <div className="Tags  pb-4 flex flex-wrap gap-2.5">
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                UI Design
              </div>
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                SaaS Design
              </div>
            </div>
          </div>
          <div className="col-start-9 col-span-4 rounded-[16px] w-full h-[393px] bg-cover bg-[url('/img/works/superalink/thumbnail.png')]"></div>
        </div>
        <div className="container max-w-[1180px] grid py-16 items-center my-auto sm:hidden">
          <div className="rounded-[16px] w-full h-[240px] bg-cover bg-[url('/img/works/superalink/thumbnail.png')]"></div>
          <div className="content mt-10 gap-8 grid ">
            <div className="container items-center gap-3 grid">
              <img
                src="/img/works/superalink/logo-superalink.svg"
                alt="Logo Superalink"
              ></img>
              <p className="text-[16px] leading-[140%] paragraph-text">
                January - February, 2024
              </p>
            </div>
            <h1 className="leading-[115%] tracking-[-0.01em] font-semibold text-[32px]">
              Content Management System for Blog
            </h1>
            <p className="text-[16px] leading-[140%] paragraph-text">
              Supera Link offers electronic SIM cards (eSIM) to its customers
              who want to travel internationally. They have a blog page on their
              website with posts about travel and technology.
            </p>
            <a
              href="https://www.superalink.com/blog"
              target="_blank"
              className="w-max bg-[#F5F5F5] text-[#1D1D1D] text-[18px] leading-[140%] px-4 py-2 rounded-lg font-medium flex items-center w-fit"
            >
              Visit site
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4"
              >
                <path
                  d="M14.0306 9.03122L9.53063 13.5312C9.38973 13.6721 9.19863 13.7513 8.99938 13.7513C8.80012 13.7513 8.60902 13.6721 8.46813 13.5312C8.32723 13.3903 8.24807 13.1992 8.24807 13C8.24807 12.8007 8.32723 12.6096 8.46813 12.4687L11.6875 9.2506H2.5C2.30109 9.2506 2.11032 9.17158 1.96967 9.03093C1.82902 8.89028 1.75 8.69951 1.75 8.5006C1.75 8.30169 1.82902 8.11092 1.96967 7.97027C2.11032 7.82962 2.30109 7.7506 2.5 7.7506H11.6875L8.46937 4.5306C8.32848 4.3897 8.24932 4.19861 8.24932 3.99935C8.24932 3.80009 8.32848 3.60899 8.46937 3.4681C8.61027 3.3272 8.80137 3.24805 9.00062 3.24805C9.19988 3.24805 9.39098 3.3272 9.53187 3.4681L14.0319 7.9681C14.1018 8.03787 14.1573 8.12077 14.1951 8.21203C14.2329 8.3033 14.2523 8.40113 14.2522 8.49992C14.252 8.5987 14.2324 8.69649 14.1944 8.78767C14.1564 8.87885 14.1007 8.96162 14.0306 9.03122Z"
                  fill="#1D1D1D"
                />
              </svg>
            </a>
            <div className="Tags  pb-4 flex flex-wrap gap-2.5">
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                UI Design
              </div>
              <div className="Tag px-4 py-1 text-[16px] leading-[140%] rounded-full border border-[#A6A6A6] paragraph-text">
                SaaS Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
