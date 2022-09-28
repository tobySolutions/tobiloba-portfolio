import Tobiloba from "../../Assets/Me.png.jpg";
import Header from ".././base/Header";

// I want the pages I'm on to have the hover state on them in the navbar and the others wouldn't

function About() {
  return (
    <>
      <Header />
      <main className="about-section py-[3em] my-[1em] container">
        <div className="mb-[2em]">
          <h1 className="page-title">Hey, I'm Tobiloba Adedeji</h1>
          <p className="font-semibold mt-[.6em]">Frontend Engineer</p>
        </div>

        <div>
          <img src={Tobiloba} alt="tobiloba's photo" className="rounded-lg" />
          <div className="about-me py-[1em]">
            <h2 className="text-2xl font-medium">About Me</h2>
            <p className="my-[1em]">
              Hi there! I've been in tech for about a year now and I've worked
              on a couple of amazing scalable applications that you might find <strong>Mind-blowing</strong>
            </p>
          </div>
          {/* I can have like a reach out via linkedin, twitter here and a link to my resume */}
        </div>
      </main>
    </>
  );
}

export default About;
