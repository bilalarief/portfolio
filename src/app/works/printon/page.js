import React from "react";
import Hero from "@/app/works/component/hero-printon";
import Navbar from "@/app/navbar";
import Footer from "@/app/works/component/footer";

export default function Printon() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="py-40 sm:px-10 ">
        <div className="container max-w-[980px] gap-36 grid">
          <div className="brief gap-10 grid max-sm:w-[100vw] max-sm:px-4">
            <h5 className="text-[24px] leading-[140%] font-semibold">
              Most Indonesians, especially students, have a bad experience in
              using printing services
            </h5>
            <div className="container sm:grid sm:grid-cols-10 sm:flex sm:justify-between items-center">
              <p className="col-span-5 text-[16px] leading-[140%] font-normal">
                The majority of Indonesians don't own a printer so they go to a
                printing service to print their documents.<br></br>
                <br></br> Some people have different reasons why they don't buy
                a printer, but most people say that having a personal printer
                costs more to maintain and they don't need to print all the
                time.<br></br>
                <br></br> However, they have bad experiences when printing their
                documents at printing services, for example,{" "}
                <span className="font-bold">they find it difficult</span> to
                find the nearest printing service.<br></br>
                <br></br> So, my goal for this project is to make it more{" "}
                <span className="font-bold">flexible</span> and{" "}
                <span className="font-bold">easy</span> for people who want to
                use printing services.
              </p>

              <div className="container col-start-7 col-span-4 h-full">
                <div className="rounded-[16px] w-full h-[80vw] sm:h-full bg-cover bg-[url('/img/works/printon/illustration.png')] mb-4 max-sm:mt-8"></div>
                <a
                  className="underline btn-hover "
                  href="https://www.freepik.com/free-photo/women-holding-paper-high-angle_32078000.htm#fromView=search&page=1&position=31&uuid=e4b59c70-2f69-420d-99ff-e653cfe53c06"
                  target="_blank"
                >
                  Image by freepik
                </a>
              </div>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="challenges gap-10 max-sm:w-[100vw] max-sm:px-4 grid">
            <h5 className="text-[24px] leading-[140%] font-semibold">
              Overcoming Key Challenges in the Print Services Industry
            </h5>
            <div className="lists grid gap-12">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Understanding User Needs
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    One of the key challenges in the PrintOn project was gaining
                    a deep understanding of the specific needs and pain points
                    of users in the print services industry. Conducting user
                    research and gathering insights from potential users helped
                    identify the challenges they face when ordering printing
                    services and areas for improvement.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Streamlining the Order Process
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    Simplifying the ordering process and making it easier to use
                    was a significant challenge. The goal was to minimize the
                    time and effort required for users to place an order,
                    including selecting print options, uploading files, and
                    providing shipping details. Finding the right balance
                    between simplicity and customization was crucial to
                    enhancing the overall user experience.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Optimizing Online and Offline Integration
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    PrintOn aims to seamlessly integrate online and offline
                    experiences for users. This requires developing an efficient
                    online platform for order placement, tracking and payment,
                    while ensuring smooth coordination with offline print
                    service providers for order fulfillment. Ensuring a seamless
                    transition between online and offline processes is a
                    challenge that requires effective communication and
                    technology integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="research gap-10 grid max-sm:w-[100vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold w-full">
              Identify features that users need in this application{" "}
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
              Since most students use this service, I created a survey for
              research purposes for the application. In addition to the survey,
              I also conducted in-depth interviews with four students and asked
              them about their experiences regarding the printing service. The
              following are some of the answers from the survey and in-depth
              interviews
            </p>
            <iframe
              className="max-sm:w-full w-[652px]"
              height="367"
              src="https://www.youtube.com/embed/pJrqD7KE47s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <a href="/img/works/printon/sketch.png" target="_blank">
              <img src="/img/works/printon/sketch.png"></img>
            </a>

            <div className="lists grid gap-12">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Long queue for printing service{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    There are long queues when needed so people have to wait
                    their turn, in addition to long queues most printing
                    services have shortcomings in terms of queuing, for example
                    there are fewer seats so people have to wait while standing.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Lack of options to transfer files
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    The majority of printing services to transfer files other
                    than using Flashdisk, people have their documents on their
                    phones so the only options they are given are bluetooth and
                    through whatsapp messenger, and sometimes both options are
                    problematic so people think that this way is not practical.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="design gap-10 grid max-sm:w-[100vw] max-sm:px-4">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              Designing a fulfilling experience
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
              Creating a mobile app meets the needs of users and makes a user
              friendly design, instead of designing only by ordering print
              services, adding some features that will be used by users and
              taking the opportunity to make PrintOn used by many users.
            </p>
            <div className="gather-information max-sm:w-[100vw]">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid mb-10">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Gather Information
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    After conducting surveys and in-depth interviews, I
                    collected all the information from them and did design
                    research from the information, here are some of the behind
                    the scene
                  </p>
                </div>
              </div>
              <a href="/img/works/printon/user-persona.png" target="_blank">
                <img src="/img/works/printon/user-persona.png"></img>
              </a>
              <a href="/img/works/printon/others.png" target="_blank">
                <img src="/img/works/printon/others.png"></img>
              </a>
            </div>
            <div className="sketch grid place-items-center gap-6 max-sm:w-[100vw]">
              <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
                After doing some design research, I sketched out some crazy
                ideas I had in my mind and tried which one would work best for
                the layout, for this stage I just tried what layout would work
                best.
              </p>
              <a
                className="w-[578px] max-sm:w-[inherit]"
                href="/img/works/printon/sketch-ui.png"
                target="_blank"
              >
                <img src="/img/works/printon/sketch-ui.png"></img>
              </a>
            </div>
            <div className="wireframe grid place-items-center gap-6 max-sm:w-[100vw]">
              <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
                After sketching, I will proceed to convert the sketches into
                wireframes and adjust the layout of the sketches, and here are
                some initial wireframes
              </p>
              <a
                className="w-[578px] max-sm:w-[inherit]"
                href="/img/works/printon/wireframe.png"
                target="_blank"
              >
                <img src="/img/works/printon/wireframe.png"></img>
              </a>
            </div>
            <div className="hifi grid place-items-center gap-6 max-sm:w-[100vw]">
              <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
                After creating the wireframe, I proceeded to turn it into a
                high-fidelity design. During this phase, I experimented with
                colors, layouts, and shapes to find the optimal combination.
                Once I determined the most suitable design, I refined it further
                to ensure consistency across components and colors.
              </p>
              <a
                className="w-[578px] max-sm:w-[inherit]"
                href="/img/works/printon/hifi.png"
                target="_blank"
              >
                <img src="/img/works/printon/hifi.png"></img>
              </a>
            </div>
            <div className="prototype grid place-items-center gap-6 max-sm:w-[90vw]">
              <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
                The current high-fidelity design is completed. After that, I
                developed a prototype to conduct usability testing with
                participants
              </p>
              <h3 className="font-semibold text-[24px] leading-[140%] max-sm:w-[inherit]">
                Prototype
              </h3>
              <iframe
                className="w-[578px] max-sm:w-[inherit]"
                height="800"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgRQ42mPJHPJWXxK2noYubs%2FPrintOn%3Fpage-id%3D325%253A1348%26type%3Ddesign%26node-id%3D330-1358%26viewport%3D709%252C1274%252C0.23%26t%3Ds27lpFoGVHtRuqmg-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D344%253A9609%26mode%3Ddesign"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="testing gap-10 grid max-sm:w-[100vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              Conduct usability tests using Google Meet and Discord as media for
              remote testing
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
              Here are some photos during the usability test
            </p>
            <a
              className="w-[578px] max-sm:w-[inherit]"
              href="/img/works/printon/screenshot.png"
              target="_blank"
            >
              <img src="/img/works/printon/screenshot.png"></img>
            </a>
            <div className="feedback max-sm:w-[inherit]">
              <div className="lists grid gap-12 max-sm:w-[inherit]">
                <div className="list flex items-start max-sm:w-[inherit]">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold">
                      Feedback{" "}
                      <span className="font-medium	underline">
                        Clean and Modern User Interface
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                      Participants provided valuable feedback on the UI design,
                      expressing appreciation for the clean and trendy
                      aesthetics that contribute to a sleek and modern user
                      experience.
                    </p>
                  </div>
                </div>
                <div className="list flex items-start">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid place-items-center">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold w-full">
                      Iterate{" "}
                      <span className="font-medium	underline">
                        The layout on the order screen still need to be fix
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
                      Participants provided feedback on the layout that made
                      them a little confused on the order screen, especially the
                      positioning of the Delivery Options between the Payment
                      Methods. The position of the two components needs to be
                      repositioned in the layout. <br></br>
                      <br></br>I Improved the design by changing the position to
                      the bottom for the Payment method and I changed the width
                      of the Delivery Options
                    </p>
                    <a
                      className="w-full max-w-[798px]"
                      href="/img/works/printon/iterate-1.png"
                      target="_blank"
                    >
                      <img src="/img/works/printon/iterate-1.png"></img>
                    </a>
                  </div>
                </div>
                <div className="list flex items-start">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid place-items-center">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold w-full">
                      Iterate{" "}
                      <span className="font-medium	underline">
                        The Photocopy feature label needs to be changed to
                        Scanner
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
                      Participants gave feedback on the{" "}
                      <span className="font-bold">Photocopy </span>feature,
                      because it is not the name of the feature, participants
                      thought that this feature is not for scanning but for
                      actual photocopying, so they suggested changing it to
                      <span className="font-bold"> Scanner </span>to make it
                      more relevant.
                    </p>
                    <a
                      className="w-full max-w-[798px]"
                      href="/img/works/printon/iterate-2.png"
                      target="_blank"
                    >
                      <img src="/img/works/printon/iterate-2.png"></img>
                    </a>
                  </div>
                </div>
                <div className="list flex items-start">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid place-items-center w-full">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold w-full">
                      Iterate{" "}
                      <span className="font-medium	underline">
                        Change the location of the logout button to the bottom
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
                      Participants recommended moving the location of the logout
                      button to the bottom
                    </p>
                    <a
                      className="w-full max-w-[798px]"
                      href="/img/works/printon/iterate-3.png"
                      target="_blank"
                    >
                      <img src="/img/works/printon/iterate-3.png"></img>
                    </a>
                  </div>
                </div>
                <div className="list flex items-start">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold">
                      Feedback{" "}
                      <span className="font-medium	underline">
                        Add a list of claimed coupons{" "}
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                      Participants provided feedback to add a list of claimed
                      coupons.
                    </p>
                  </div>
                </div>
                <div className="list flex items-start">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold">
                      Feedback{" "}
                      <span className="font-medium	underline">
                        Add an option to specify the desired file format when
                        using the Scanner feature{" "}
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                      Participants suggested adding an option to specify the
                      desired file format in the Scanner feature
                    </p>
                  </div>
                </div>
                <div className="list flex items-start">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold">
                      Feedback{" "}
                      <span className="font-medium	underline">
                        Need to add an option for how many copies on the order
                        screen{" "}
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                      Participants provided feedback to include an option for
                      specifying the number of copies on the order screen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="challenges gap-10 grid">
            <h5 className="text-[24px] leading-[140%] font-semibold">
              Future Steps & Result{" "}
            </h5>
            <div className="lists grid gap-12">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    After conducting usability testing, I asked the participants
                    to fill out the SUS (System Usability Scale)
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    After collecting the completed SUS (System Usability Scale)
                    surveys from the participants, I meticulously calculated the
                    scores to assess the overall usability of the system. The
                    cumulative score resulted in an impressive{" "}
                    <span className="font-bold"> 85.63%</span>, indicating a
                    high level of user satisfaction and effectiveness in the
                    usability of the system.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Adding features of participant feedback suggestions{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    After conducting usability tests with participants, there
                    were some suggestions from participants that might be useful
                    for users for this mobile application, so I will add their
                    suggestions for future steps so that this application can be
                    used by more users.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Learn how to conduct design research{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    I learned something valuable from this project to improve my
                    skills in designing mobile apps, as a self-taught UI/UX
                    Designer, these skills make me more confident to take action
                    and make my workflow better in designing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
