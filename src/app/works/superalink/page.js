import React from "react";
import Hero from "@/app/works/component/hero-superalink";
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
              (UI) for a dashboard used to manage blog content or a Content
              Management System. This was my first attempt at creating a SaaS
              design. It was an invaluable experience with lots of lessons to be
              learned. While not starting from scratch, I transformed the
              current wireframes into high-fidelity designs, but some of the
              screens still need to be made, so those will also be my work too.
            </p>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="tasks grid gap-[80px]">
            <div className="responlibility gap-10 grid max-sm:w-[90vw] max-sm:px-4">
              <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
                The project's task
              </h5>
              <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
                So my goal in this project is to create a design from scratch
                (apart from the sidebar, which is already done), so I need to
                design only for the screens that have not yet been created. A
                table for the list of blogs (CMS), the Create Blog Screen, and
                the Preview Blog Screen provide the total number of screens that
                I need to design.<br></br> <br></br>I was also in responsible
                for designing the Create, Read, Update, Delete (CRUD) Screen, as
                well as others like Good Case Scenario and Bad Case Scenario to
                take off the design to the front-end developers and give them a
                better understanding of how the function
              </p>
            </div>
            <div className="explanation grid gap-[88px]">
              <div className="container gap-10 grid max-sm:w-[100vw] max-sm:px-4 place-items-center">
                <h5 className="text-[24px] leading-[140%] font-semibold w-full">
                  Gather as many reference designs as possible
                </h5>
                <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                  To begin with, I normally try to gather as many reference
                  designs as possible that are relevant to the project, such as
                  suggestions for what to include on the screen, how it should
                  work, and what components to include. Once I have an idea of
                  what has to be included, I look for design inspiration from
                  other designs that are similar to the project.
                </p>
                <a href="/img/works/superalink/reference.png" target="_blank">
                  <img src="/img/works/superalink/reference.png"></img>
                </a>
              </div>
              <div className="container gap-10 grid max-sm:w-[100vw] max-sm:px-4 place-items-center">
                <h5 className="text-[24px] leading-[140%] font-semibold w-full">
                  Create a wireframe and experiment with different layouts{" "}
                </h5>
                <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
                  I then create a wireframe, make variations to it, and try out
                  alternative layouts to see which works best.
                </p>
                <a href="/img/works/superalink/wireframe.png" target="_blank">
                  <img src="/img/works/superalink/wireframe.png"></img>
                </a>
              </div>
              <div className="container gap-10 grid max-sm:w-[100vw] max-sm:px-4 place-items-center">
                <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
                  For the Create/Edit blog screen, I built variants on the same
                  process as in the list of blog screens.
                </p>
                <a href="/img/works/superalink/wireframe-2.png" target="_blank">
                  <img src="/img/works/superalink/wireframe-2.png"></img>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="hifi grid gap-10 max-sm:w-[100vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold w-full">
              Turning the wireframe into High Fidelity Design{" "}
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
              After making some iterations of layouts, I transformed them into a
              High Fidelity design to ask for feedback from my supervisor on
              which one is the best match for the project. Instead of relying on
              my supervisor, I also share my opinion on which iteration fits the
              project.
            </p>
            <a href="/img/works/superalink/hifi.png" target="_blank">
              <img src="/img/works/superalink/hifi.png"></img>
            </a>
            <a href="/img/works/superalink/hifi-2.png" target="_blank">
              <img src="/img/works/superalink/hifi-2.png"></img>
            </a>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="hifi grid gap-10 max-sm:w-[100vw] max-sm:px-4 max-sm:place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold w-full">
              Design others function
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
              After receiving input from my supervisor and deciding on which
              design to use, I began designing additional functions such as the
              Create, Read, Update, Delete (CRUD) and good/bad case scenario.
            </p>
            <a href="/img/works/superalink/create-read.png" target="_blank">
              <img src="/img/works/superalink/create-read.png"></img>
            </a>
            <a href="/img/works/superalink/update-delete.png" target="_blank">
              <img src="/img/works/superalink/update-delete.png"></img>
            </a>
            <a href="/img/works/superalink/read.png" target="_blank">
              <img
                className="max-sm:w-full sm:w-[32vw]"
                src="/img/works/superalink/read.png"
              ></img>
            </a>
            <a href="/img/works/superalink/good-case.png" target="_blank">
              <img src="/img/works/superalink/good-case.png"></img>
            </a>
            <a href="/img/works/superalink/bad-case.png" target="_blank">
              <img src="/img/works/superalink/bad-case.png"></img>
            </a>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="responlibility gap-10 grid max-sm:w-[90vw] max-sm:px-4">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              Result{" "}
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
              Working on this project taught me a lot about designing from
              scratch, such as how to gather information for components to
              include in the design, how to manage what should be prioritized
              first, and, most importantly, how to create CRUD and good/bad case
              scenarios.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
