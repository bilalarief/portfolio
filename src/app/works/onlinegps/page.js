import React from "react";
import Hero from "@/app/works/component/hero-onlinegps";
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
              Workspace Design - Theme 1{" "}
            </h5>
            <a href="/img/works/onlinegps/design-1.png" target="_blank">
              <img src="/img/works/onlinegps/design-1.png"></img>
            </a>
            <a href="/img/works/onlinegps/design-2.png" target="_blank">
              <img src="/img/works/onlinegps/design-2.png"></img>
            </a>
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              Workspace Design - Theme 2{" "}
            </h5>
            <a href="/img/works/onlinegps/design-3.png" target="_blank">
              <img src="/img/works/onlinegps/design-3.png"></img>
            </a>
            <a href="/img/works/onlinegps/design-4.png" target="_blank">
              <img src="/img/works/onlinegps/design-4.png"></img>
            </a>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
        </div>
      </section>
      <Footer />
    </main>
  );
}
