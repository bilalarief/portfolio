import React from "react";
import Hero from "@/app/works/component/hero-beliesim";
import Navbar from "@/app/navbar";
import Footer from "@/app/works/component/footer";

export default function Printon() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="py-40 sm:px-10 ">
        <div className="container max-w-[980px] gap-36 grid">
          {" "}
          <div className="responlibility gap-10 grid max-sm:w-[90vw] max-sm:px-4">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              Project Responsibility
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
              In this project, I was in charge of creating the user interface
              (UI) for a landing page for users interested in becoming Beliesim
              product affiliates. Aside from creating landing pages, I also
              design website components, such as pop-up announcements for one of
              the websites.
            </p>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="tasks grid gap-[80px]">
            <div className="responlibility gap-10 grid max-sm:w-[90vw] max-sm:px-4">
              <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
                The project's task
              </h5>
              <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
                So my goal for this project is to create a landing page from
                scratch, as well as a responsive website that works on desktop,
                tablet, and mobile devices, with the goal of attracting users to
                become affiliates.
                <br></br>
                <br></br>
                After gathering references from other websites that were
                comparable to this one, I created a list of everything I wanted
                to include on the website in order to gain the users' trust.
                <br></br>
                <br></br>
                After deciding what content to include on the landing page, I
                usually look for inspiration designs that are similar to the
                website.
              </p>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="hifi grid gap-10 max-sm:w-[100vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold w-full">
              The design{" "}
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
              After gathering a ton of ideas, I then start to design. I start
              with the desktop version and ask my design lead for feedback in
              order to improve the design once I've finished it.
            </p>
            <a href="/img/works/beliesim/design-1.png" target="_blank">
              <img
                className="w-full sm:w-[36vw]"
                src="/img/works/beliesim/design-1.png"
              ></img>
            </a>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
              After discussing with my design lead and accepting the current
              design with nothing to improve, I began designing the responsive
              including the tablet and mobile versions.
            </p>
            <a href="/img/works/beliesim/design-2.png" target="_blank">
              <img
                className="w-full sm:w-[36vw]"
                src="/img/works/beliesim/design-2.png"
              ></img>
            </a>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="design-assets grid gap-10 max-sm:w-[100vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold w-full">
              Mockups{" "}
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
              Here are some of the mockups
            </p>
            <a href="/img/works/beliesim/mockup-1.png" target="_blank">
              <img
                className="w-full"
                src="/img/works/beliesim/mockup-1.png"
              ></img>
            </a>
            <div className="sm:flex sm:justify-between">
              <a
                className=" mr-8"
                href="/img/works/beliesim/mockup-2.png"
                target="_blank"
              >
                <img
                  className="w-full"
                  src="/img/works/beliesim/mockup-2.png"
                ></img>
              </a>{" "}
              <a href="/img/works/beliesim/mockup-3.png" target="_blank">
                <img
                  className="w-full"
                  src="/img/works/beliesim/mockup-3.png"
                ></img>
              </a>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="mockup grid gap-10 max-sm:w-[100vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold w-full">
              Design assets{" "}
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
              In addition to creating the landing, I also create illustrations
              for the login page for the affiliate website and pop-up
              announcements for the beliesim website; below are some of the
              iteration designs and the final design.{" "}
            </p>
            <a href="/img/works/beliesim/design-assets-1.png" target="_blank">
              <img
                className="w-full"
                src="/img/works/beliesim/design-assets-1.png"
              ></img>
            </a>
            <a href="/img/works/beliesim/design-assets-2.png" target="_blank">
              <img
                className="w-full"
                src="/img/works/beliesim/design-assets-2.png"
              ></img>
            </a>
            <a href="/img/works/beliesim/design-assets-3.png" target="_blank">
              <img
                className="w-full"
                src="/img/works/beliesim/design-assets-3.png"
              ></img>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
