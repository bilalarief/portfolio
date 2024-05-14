"use client";
import { useState } from "react";
import Navbar from "@/app/navbar";
import Works from "@/app/works";
import Footer from "@/app/works/component/footer";

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState(
    "/img/home/default-pict.png"
  );

  const handleHover = (newImage) => {
    setHoveredImage(newImage);
  };
  return (
    <main>
      <Navbar />
      <section id="hero">
        <div className="absolute bg-noise z-[-3] h-[100vh]"></div>
        <div className="px-10 flex min-h-screen flex-col items-center justify-between bg-cover bg-[url('/img/home/bg-hero.png')] ">
          <div className="container max-w-[1180px] grid grid-cols-12 flex justify-between items-center my-auto max-sm:hidden">
            <div className="content col-span-7">
              <h1 className="text-[44px] tracking-[-1px] leading-[115%] mb-[24px] white-text">
                I'm Bilal Arief a
                <span className="font-bold"> UI/UX Designer</span>
              </h1>
              <p className="text-[20px] leading-[140%] paragraph-text">
                Hello there! 👋 I'm a dedicated UI/UX Designer, driven by a year
                of hands-on experience in the field. Passionate about my craft,
                I thrive in the dynamic world of design, constantly seeking to
                evolve alongside emerging trends and technologies. Scroll down
                to discover more about me and my work.
              </p>
            </div>
            <div className="card-profile col-start-9 col-span-4 px-[12px] pt-[12px] pb-[32px] rounded-[16px]">
              <div className="w-full bg-cover bg-[url('/img/home/profile-hero.png')] h-[347px] rounded-[8px] mb-[16px]"></div>
              <div className="body flex px-[8px] grid grid-cols-4">
                <div className="text text-[16px] leading-[130%] gray-text col-span-2">
                  UI/UX Design
                  <p className="text-[24px] leading-[130%] white-text mt-[8px]">
                    Bilal Arief
                  </p>
                </div>
                <div className="navigation flex justify-end col-span-2 items-end gap-2">
                  <a
                    className="btn-hover"
                    href="mailto:bilalarief7@gmail.com"
                    target="_blank"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.666 10.6673L15.9993 17.334L5.33268 10.6673V8.00065L15.9993 14.6673L26.666 8.00065M26.666 5.33398H5.33268C3.85268 5.33398 2.66602 6.52065 2.66602 8.00065V24.0007C2.66602 24.7079 2.94697 25.3862 3.44706 25.8863C3.94716 26.3864 4.62544 26.6673 5.33268 26.6673H26.666C27.3733 26.6673 28.0515 26.3864 28.5516 25.8863C29.0517 25.3862 29.3327 24.7079 29.3327 24.0007V8.00065C29.3327 7.29341 29.0517 6.61513 28.5516 6.11503C28.0515 5.61494 27.3733 5.33398 26.666 5.33398Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bilalarief/"
                    target="_blank"
                    className="btn-hover"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container max-w-[1180px] w-full items-center my-16 sm:hidden">
            <div className="card-profile px-[12px] pt-[12px] pb-[32px] rounded-[16px] mb-10">
              <div className="w-full bg-center bg-cover bg-[url('/img/home/profile-hero.png')] h-[347px] rounded-[8px] mb-[16px]"></div>
              <div className="body px-[8px] grid">
                <div className="text text-[16px] leading-[130%] gray-text col-span-2">
                  UI/UX Design
                  <p className="text-[24px] leading-[130%] white-text mt-[8px]">
                    Bilal Arief
                  </p>
                </div>
                <div className="navigation flex  col-span-2 items-end mt-4">
                  <a
                    className="btn-hover"
                    href="mailto:bilalarief7@gmail.com"
                    target="_blank"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.666 10.6673L15.9993 17.334L5.33268 10.6673V8.00065L15.9993 14.6673L26.666 8.00065M26.666 5.33398H5.33268C3.85268 5.33398 2.66602 6.52065 2.66602 8.00065V24.0007C2.66602 24.7079 2.94697 25.3862 3.44706 25.8863C3.94716 26.3864 4.62544 26.6673 5.33268 26.6673H26.666C27.3733 26.6673 28.0515 26.3864 28.5516 25.8863C29.0517 25.3862 29.3327 24.7079 29.3327 24.0007V8.00065C29.3327 7.29341 29.0517 6.61513 28.5516 6.11503C28.0515 5.61494 27.3733 5.33398 26.666 5.33398Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bilalarief/"
                    target="_blank"
                    className="btn-hover"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="content col-span-7">
              <h1 className="text-[32px] tracking-[-1px] leading-[115%] mb-[24px] white-text">
                I'm Bilal Arief a
                <span className="font-bold"> UI/UX Designer</span>
              </h1>
              <p className="text-[18px] leading-[140%] paragraph-text">
                Hello there! 👋 I am a dedicated UI/UX Designer, driven by three
                years of hands-on experience in the field. Passionate about my
                craft, I thrive in the dynamic world of design, constantly
                striving to evolve with emerging trends and technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="works">
        <Works />
      </section>

      <section id="experience">
        <div className="absolute bg-noise z-[-3] w-full sm:h-[100vh]"></div>
        <div className="px-10 flex min-h-screen flex-col items-center justify-between bg-cover bg-[url('/img/home/bg-experience.png')]">
          <div className="container max-w-[1180px] sm:grid sm:grid-cols-12 sm:flex sm:justify-between items-center sm:my-auto my-12">
            <div
              className="bg-center bg-cover col-span-4 h-[377px] rounded-lg mb-8"
              style={{
                backgroundImage: `url(${hoveredImage})`,
                transition: "background-image 0.3s ease-in-out",
              }}
            ></div>
            <div className="content col-start-6 col-span-7 gap-6 grid">
              <div
                className="list sm:flex sm:justify-between py-4 border-b border-[#3F3F3F]"
                onMouseEnter={() => handleHover("/img/home/auroraweb.png")}
                onMouseLeave={() => handleHover("/img/home/default-pict.png")}
              >
                <div className="roles">
                  <p className="text-[24px] font-semibold	sm:flex grid text-white">
                    UI/UX Designer
                    <span className="paragraph-text-scnd font-normal sm:ml-2">
                      Freelance
                    </span>
                  </p>
                  <p className="text-[20px] leading-[140%] paragraph-text-scnd">
                    Aurora Web
                  </p>
                  <p className="text-[16px] leading-[140%] paragraph-text-scnd">
                    Bandung, West Java, Indonesia
                  </p>
                </div>
                <p className="leading-[140%] text-[20px] paragraph-text-scnd max-sm:mt-4">
                  January 2021 - Present
                </p>
              </div>
              <div
                className="list sm:flex sm:justify-between py-4 border-b border-[#3F3F3F]"
                onMouseEnter={() => handleHover("/img/home/cakeplabs.png")}
                onMouseLeave={() => handleHover("/img/home/default-pict.png")}
              >
                <div className="roles">
                  <p className="text-[24px] font-semibold	sm:flex grid text-white">
                    UI/UX Designer
                    <span className="paragraph-text-scnd font-normal sm:ml-2">
                      Internship
                    </span>
                  </p>
                  <p className="text-[20px] leading-[140%] paragraph-text-scnd">
                    Cakeplabs
                  </p>
                  <p className="text-[16px] leading-[140%] paragraph-text-scnd">
                    Denpasar, Bali, Indonesia
                  </p>
                </div>
                <p className="leading-[140%] text-[20px] paragraph-text-scnd max-sm:mt-4">
                  November 2023 - March 2024
                </p>
              </div>
              <div
                className="list sm:flex sm:justify-between py-4 border-b border-[#3F3F3F]"
                onMouseEnter={() => handleHover("/img/home/birutekno.png")}
                onMouseLeave={() => handleHover("/img/home/default-pict.png")}
              >
                <div className="roles">
                  <p className="text-[24px] font-semibold	sm:flex grid text-white">
                    UI Developer
                    <span className="paragraph-text-scnd font-normal sm:ml-2">
                      Internship
                    </span>
                  </p>
                  <p className="text-[20px] leading-[140%] paragraph-text-scnd">
                    Birutekno Inc.
                  </p>
                  <p className="text-[16px] leading-[140%] paragraph-text-scnd">
                    Bandung, West Java, Indonesia
                  </p>
                </div>
                <p className="leading-[140%] text-[20px] paragraph-text-scnd max-sm:mt-4">
                  April - September 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
