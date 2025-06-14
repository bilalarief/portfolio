import React from "react";
import Hero from "@/app/works/component/hero-printin";
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
          <div className="hifi grid gap-10 max-sm:w-[100vw] max-sm:px-4 place-items-center">
            <a href="/img/works/printin/mockup.png" target="_blank">
              <img className="w-full" src="/img/works/printin/mockup.png"></img>
            </a>
            <a href="/img/works/printin/Home.png" target="_blank">
              <img
                className="w-full sm:w-[36vw]"
                src="/img/works/printin/Home.png"
              ></img>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
