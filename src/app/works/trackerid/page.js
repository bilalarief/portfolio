import React from "react";
import Hero from "@/app/works/component/hero-trackerid";
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
          <div className="hifi grid gap-10 max-sm:w-[100vw] max-sm:px-4 max-sm:place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              Preview{" "}
            </h5>
            <iframe
              src="https://drive.google.com/file/d/1tybJLyIygUCJPoJ-3bxTwr6ZzjDqMdmV/preview"
              width="100%"
              height="900px"
            ></iframe>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
        </div>
      </section>
      <Footer />
    </main>
  );
}
