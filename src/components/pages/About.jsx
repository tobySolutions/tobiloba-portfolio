import Tobiloba from "../../Assets/Me.png.jpg";
import Header from ".././base/Header";

function About() {
  return (
    <>
      <Header />
      <section className="about-section py-[3em] my-[1em] container">
        <div className="mb-[2em]">
          <h1 className="font-bold text-[2.25rem]  text-gray-700 leading-[1.3em]">
            Hey, I'm Tobiloba Adedeji
          </h1>
          <p className="font-semibold mt-[.6em]">Frontend Engineer</p>
        </div>

        <div>
          <img src={Tobiloba} alt="tobiloba's photo" className="rounded-lg" />
          <div className="about-me py-[1em]">
            <h2 className="text-2xl font-medium">About Me</h2>
            <p className="my-[1em]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, culpa minima! Autem eius minima dolorum commodi quasi
              tempora, in quod!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
