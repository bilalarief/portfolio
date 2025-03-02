import React from "react";
import Hero from "@/app/works/component/hero-d2l";
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
            <a href="/img/works/d2l/mockup.png" target="_blank">
              <img className="w-full" src="/img/works/d2l/mockup.png"></img>
            </a>
            <a href="/img/works/d2l/Home.png" target="_blank">
              <img
                className="w-full sm:w-[36vw]"
                src="/img/works/d2l/Home.png"
              ></img>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
