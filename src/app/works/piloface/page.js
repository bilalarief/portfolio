import React from "react";
import Hero from "@/app/works/component/hero-piloface";
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
          <div className="brief gap-10 grid max-sm:w-[90vw] max-sm:px-4">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              The person in charge and the teachers find it difficult to track
              attendance for students as they still rely on paper.{" "}
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
              The majority of Indonesian schools still rely on this method for
              student attendance.
              <br></br>
              <br></br>
              However, it is highly impractical due to the significant paper
              usage, requiring a new sheet every week.
              <br></br>
              <br></br>
              Additionally, teachers find it challenging to recap students'
              attendance at the end of the school day.
              <br></br>
              <br></br>
              In this project, our goal is to{" "}
              <span className="font-bold">
                facilitate attendance tracking and recap for teachers and
                students while preventing attendance fraud.
              </span>
              <br></br>
              <br></br>
              Students will have access to their daily schedule and will only be
              able to attend classes when they are within the school premises,
              ensuring that they cannot attend when outside the school area.
            </p>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="challenges gap-10 max-sm:w-[100vw] max-sm:px-4 grid">
            <h5 className="text-[24px] leading-[140%] font-semibold">
              Designing the interface for mobile apps is not as simple as
              tapping a button on a screen.{" "}
            </h5>
            <div className="lists grid gap-12">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Making the interface easy to use{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    Obviously, this is a crucial aspect when developing a mobile
                    app or website, especially considering that the majority of
                    users may not have a quick understanding of how to use it.
                    Therefore, my task is to make the interface as familiar as
                    possible. I conduct research on similar apps to this project
                    so that users can learn how to use the app more easily.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Empathy towards front-end developers
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    As a UI/UX Designer, I need to ensure that the design can be
                    developed by the front-end team. This involves understanding
                    and considering the challenges, limitations, and
                    requirements that front-end developers face when
                    implementing the design. By doing so, I can create designs
                    that are not only visually appealing and user-friendly but
                    also practical and feasible to implement.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Operating System{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    We don’t have budget to make the mobile apps for IOS, so for
                    this project we developed just for android. Since we can't
                    make IOS version we around it by making website for IOS but
                    has limited feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="research gap-10 grid max-sm:w-[100vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold w-full">
              Identifying a valuable feature to implement in this app
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
              As a student in my school, apart from using paper for attendance,
              some teachers utilize Google Forms or even WhatsApp to track
              attendance. However, using WhatsApp for attendance poses problems
              as it allows for attendance falsification and can be challenging
              when multiple students are typing simultaneously. I find this
              method to be cumbersome.
              <br></br>
              <br></br>
              On the teacher's side, they have to create a separate Google Form
              for each class session to record attendance. This process becomes
              more complicated for students as they need to switch between apps
              to mark their attendance. Additionally, students can manipulate
              their attendance by exploiting the Google Forms system.
            </p>
            <a href="/img/works/piloface/illustration.png" target="_blank">
              <img src="/img/works/piloface/illustration.png"></img>
            </a>

            <div className="lists grid gap-12">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    How do students attend their classes?{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    With the <span className="font-bold">face detection</span>{" "}
                    feature,{" "}
                    <span className="font-bold">
                      students are unable to falsify their attendance
                    </span>{" "}
                    for classes, addressing teachers' concerns regarding
                    students deceiving their presence in the classroom. The
                    implementation of this feature ensures precise attendance
                    records, establishing a dependable and trustworthy system
                    for tracking student participation.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Can students attend the class when they are not in school?{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    Before proceeding to the face detection phase,{" "}
                    <span className="font-bold">
                      the app needs to verify if the student is within the
                      school premises.
                    </span>{" "}
                    If not, they cannot proceed to the next step for class
                    attendance. This mechanism ensures that students cannot
                    bypass the attendance process and directly move to the face
                    detection phase. By implementing this check, we ensure the
                    integrity and accuracy of the attendance system, promoting
                    accountability and preventing any attempts to circumvent the
                    process.
                  </p>
                </div>
              </div>
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    There are numerous independent apps available{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    Before proceeding to the face detection phase,{" "}
                    <span className="font-bold">
                      the app needs to verify if the student is within the
                      school premises.
                    </span>{" "}
                    In my school, <span className="font-bold">Google Form</span>{" "}
                    and <span className="font-bold">Google Calendar</span> are
                    being used as separate apps. As a solution,{" "}
                    <span className="font-bold">
                      we have developed a single app that combines the features
                      of both,
                    </span>{" "}
                    including class schedules. The primary purpose of this app
                    is to streamline the attendance process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="design gap-10 grid max-sm:w-[90vw] max-sm:px-4">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              Creating a modern design with a user-friendly experience{" "}
            </h5>
            <p className="paragraph-text text-[16px] font-medium leading-[140%] max-sm:w-[inherit]">
              When I give opportunity to work in this project as a UI/UX
              Designer I give my best shot for the design and try exploring
              modern mobile app design, in this case it’s my first time
              designing mobile apps from scratch. I do have designing mobile
              apps before this project but not from scratch it’s like
              redesigning and design some pages of other mobile apps not from
              scratch.
            </p>
            <div className="gather-information max-sm:w-[90vw]">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid mb-10">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Don't be an uninformed designer{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    As a designer, before entering the design phase, I need to
                    define the user flow, establish an informative architecture,
                    and consider other relevant aspects. Regardless of the
                    project's size, these elements provide valuable insights and
                    help me stay organized in my design work. They guide me in
                    generating ideas for the future and prevent me from getting
                    stuck on which screen to design first. <br></br>
                    <br></br>For this project, personally, it is not very
                    complicated because the app will not have a lot of screens
                    that need to be designed.
                  </p>
                </div>
              </div>
              <a href="/img/works/piloface/sitemap.png" target="_blank">
                <img src="/img/works/piloface/sitemap.png"></img>
              </a>
              <a
                href="/img/works/piloface/information-architecture.png"
                target="_blank"
              >
                <img src="/img/works/piloface/information-architecture.png"></img>
              </a>{" "}
              <a href="/img/works/piloface/user-flow.png" target="_blank">
                <img src="/img/works/piloface/user-flow.png"></img>
              </a>
            </div>
            <div className="gather-information max-sm:w-[90vw]">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid mb-10">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    If it's not wireframed, it won't be well-framed.{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    Before diving into the design process, I always create a
                    wireframe first to ensure that the layout is a perfect fit.
                    Wireframing not only streamlines my workflow when designing
                    but also speeds up the overall process.
                    <br></br>
                    <br></br>
                    Here are some of the wireframes:
                  </p>
                </div>
              </div>
              <a href="/img/works/piloface/wireframe.png" target="_blank">
                <img src="/img/works/piloface/wireframe.png"></img>
              </a>
            </div>
            <div className="gather-information max-sm:w-[90vw]">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid mb-10">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Style guide in place, design finds its grace{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    After creating the wireframe, I developed a comprehensive
                    style guide to streamline the design process and maintain
                    consistency. In this project, the primary color palette
                    revolves around shades of blue, which has been chosen based
                    on its universal appeal and psychological impact. Blue is
                    known for evoking a sense of calmness, trust, and
                    reliability. For further insights on the psychology of blue,
                    you can refer to this informative article{" "}
                    <a
                      href="https://www.verywellmind.com/the-color-psychology-of-blue-2795815"
                      target="_blank"
                      className="underline"
                    >
                      The Color Blue: Meaning and Color Psychology
                    </a>
                  </p>
                </div>
              </div>
              <a href="/img/works/piloface/style-guide.png" target="_blank">
                <img src="/img/works/piloface/style-guide.png"></img>
              </a>
            </div>
            <div className="gather-information max-sm:w-[90vw]">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid mb-10">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Straightforward attendance status{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    Majority of students in Indonesia face challenges in
                    learning to use new mobile apps, primarily due to limited
                    access to cell phones and the inability to afford internet
                    data plans necessary for internet connectivity. A study
                    conducted by Frontiers in Education highlights these
                    difficulties in more detail{" "}
                    <a
                      href="https://www.frontiersin.org/articles/10.3389/feduc.2021.753776/full"
                      target="_blank"
                      className="underline"
                    >
                      The Struggle Is Real: Constraints of Online Education in
                      Indonesia During the COVID-19 Pandemic.
                    </a>
                    <br></br>
                    <br></br>
                    However, it is worth noting that the landscape has changed
                    amidst the COVID-19 pandemic. Not only students but also
                    individuals in general have demonstrated an increased
                    inclination to enhance their technological literacy and
                    knowledge.
                    <br></br>
                    <br></br>
                    So, I have implemented a{" "}
                    <span className="font-bold">
                      straightforward approach to the attendance status
                    </span>{" "}
                    within the app. When students open the app, the first thing
                    they encounter is a prominent attendance status. This
                    ensures that attendance information is immediately visible
                    and easily accessible to both students and teachers,
                    fostering a seamless and efficient attendance management
                    system.
                    <a
                      href="https://www.verywellmind.com/the-color-psychology-of-blue-2795815"
                      target="_blank"
                      className="underline"
                    >
                      The Color Blue: Meaning and Color Psychology
                    </a>
                  </p>
                </div>
              </div>
              <a href="/img/works/piloface/status.png" target="_blank">
                <img src="/img/works/piloface/status.png"></img>
              </a>
            </div>
            <div className="gather-information max-sm:w-[90vw]">
              <div className="list flex items-start">
                <img src="/img/works/printon/ic-list.svg"></img>
                <div className="content ml-4 gap-3 grid mb-10">
                  <p className="paragraph-text text-[20px] font-medium leading-[140%] ">
                    Right placement, clear indication{" "}
                  </p>
                  <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                    For this particular feature, the attendance button takes
                    center stage as the primary function of the app. I have
                    strategically positioned it in the middle of the navigation
                    and distinguished it with a distinct color from other
                    buttons.
                    <br></br>
                    <br></br>
                    This deliberate design choice ensures that users immediately
                    recognize the button's purpose for attending classes.
                  </p>
                </div>
              </div>
              <a href="/img/works/piloface/navigation.png" target="_blank">
                <img src="/img/works/piloface/navigation.png"></img>
              </a>
              <p className="paragraph-text text-[16px] font-medium leading-[140%] my-10">
                Here is the full flow when a user tries to fill the attendance :
              </p>
              <a href="/img/works/piloface/flow.png" target="_blank">
                <img src="/img/works/piloface/flow.png"></img>
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
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPO3dhvdtAikJaaxAsXcwJB%2FPiloface-Prototype%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D0-1%26viewport%3D796%252C-223%252C0.59%26scaling%3Dmin-zoom%26starting-point-node-id%3D1%253A406"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="testing gap-10 grid max-sm:w-[90vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              Conducted a usability test with a group of students and teachers,
              using Google Meet as the medium for remote testing
            </h5>
            <div className="feedback max-sm:w-[inherit]">
              <div className="lists grid gap-12 max-sm:w-[inherit]">
                <div className="list flex items-start max-sm:w-[inherit]">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold">
                      Problem{" "}
                      <span className="font-medium	underline">
                        Improving the accuracy of location tracking{" "}
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                      Although this issue pertains more to the development of
                      the app rather than the design, it is worth mentioning.
                      During the attendance filling process, there is a
                      possibility for students to bypass the location tracking
                      when they are outside the school area, which should not be
                      allowed.
                    </p>
                  </div>
                </div>
                <div className="list flex items-start">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid place-items-center">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold w-full">
                      Problem{" "}
                      <span className="font-medium	underline">
                        The attendance recap cannot be exported{" "}
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
                      Due to the tight deadline, I didn't have enough time to
                      design the screen for the crucial feature meant for
                      teachers. Therefore, this app is solely focused on
                      students, while the teacher's functionality is limited to
                      the website version. Although I understand the importance
                      of designing for the website, the constraints of the
                      project's timeline prevented me from doing so.
                    </p>
                  </div>
                </div>
                <div className="list flex items-start">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid place-items-center">
                    <p className="paragraph-text text-[20px] leading-[140%] font-bold w-full">
                      Feedback
                      <span className="font-medium	underline">
                        "Great User Interface Design"
                      </span>
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] w-full">
                      Our team's mobile app UI design received high praise from
                      the teacher, and we achieved the highest score among all
                      the teams. The teacher appreciated the attention to
                      detail, intuitive user experience, and visually appealing
                      elements. This positive feedback motivates us to continue
                      delivering exceptional design solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#252523] max-sm:mx-4"></hr>
          <div className="lesson gap-10 grid max-sm:w-[90vw] max-sm:px-4 place-items-center">
            <h5 className="text-[24px] leading-[140%] font-semibold max-sm:w-[inherit]">
              lesson learned
            </h5>
            <div className="feedback max-sm:w-[inherit]">
              <div className="lists grid gap-12 max-sm:w-[inherit]">
                <div className="list flex items-start max-sm:w-[inherit]">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid">
                    <p className="paragraph-text text-[20px] leading-[140%]">
                      Unfortunately, the app is not used by the school due to
                      the absence of a large database for face detection.
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                      Unfortunately, despite the positive reception and praise
                      from teachers, the app was unable to be implemented by the
                      school due to the absence of a large database for face
                      detection. This limitation prevented the app from
                      fulfilling its intended purpose of accurately tracking
                      attendance.
                      <br></br>
                      <br></br>
                      However, the recognition and feedback we received from the
                      teachers served as a validation of our efforts and the
                      quality of our user interface design.
                    </p>
                  </div>
                </div>{" "}
                <div className="list flex items-start max-sm:w-[inherit]">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid">
                    <p className="paragraph-text text-[20px] leading-[140%]">
                      Neglect user research, forever you'll be stuck, Designing
                      blind, without a single luck{" "}
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                      This project marks my first foray into designing from
                      scratch, and it has been a valuable learning experience in
                      user research, information architecture, and more. It's a
                      wonderful opportunity for me to grow as a professional
                      UI/UX Designer while simultaneously gaining practical
                      experience. I consider it a win-win situation, and I am
                      grateful to be part of this project, as it has highlighted
                      the crucial importance of these foundational aspects
                      before diving into the design process.
                    </p>
                  </div>
                </div>
                <div className="list flex items-start max-sm:w-[inherit]">
                  <img src="/img/works/printon/ic-list.svg"></img>
                  <div className="content ml-4 gap-3 grid">
                    <p className="paragraph-text text-[20px] leading-[140%]">
                      Strong communication, unlocks collaboration's elation
                    </p>
                    <p className="paragraph-text text-[16px] font-medium leading-[140%] ">
                      After completing this project, I gained valuable
                      experience in effectively communicating and collaborating
                      with developers. By engaging in regular discussions with
                      front-end developers, I ensured seamless implementation of
                      my component designs. Additionally, I created prototypes
                      to provide them with a clear vision of the app's
                      appearance and functionality, resulting in a faster and
                      more refined workflow.
                    </p>
                  </div>
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
