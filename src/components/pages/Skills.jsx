import { useState} from "react";
import Header from ".././base/Header";
import ProficientComponent from "../base/helpers/ProficientComponent";


function Skills() {
  //  React Icons has all the icons I need for skills.
  // I can just use png images to replace the icons.
    const [seeMore, setSeeMore] = useState(false);

  // I want three skills to be displayed and when the see more button is clicked, more skills can be shown
  
 
  const handleCardOpening = () => {
    setSeeMore(!seeMore);
  };


  return (
    <>
      <Header />
      <main className="skills-section py-[3em] my-[1em] container">
        <h1 className="page-title text-center">My Skills</h1>
        {/* Get the icons for the skills on this page */}
        <section className="professional-skills my-[2.3em]">
          <h2 className="font-bold text-[1.4rem] text-center text-gray-700">
            Proficiencies
          </h2>
          <div className="skills-container skills__proficient">
            <ProficientComponent seeMore={seeMore}/>
            <span onClick={handleCardOpening} className="text-white font-semibold">
              {seeMore ? "See Less" : "See More"}
            </span>
          </div>
        </section>

        <section className="extra-skills my-[2.3em]">
          <h2 className="font-bold text-[1.4rem] text-center text-gray-700">
            Education and Certifications
          </h2>
          <div className="proficient-container bg-gray-900 opacity-[.7] p-[.6em] my-[1em]">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quis, deserunt nisi impedit atque praesentium dolorem cupiditate
              eveniet quia odio!
            </p>
          </div>
        </section>

        <section className="extra-skills my-[2.3em]">
          <h2 className="font-bold text-[1.4rem] text-center text-gray-700">
            Interests
          </h2>
          <div className="proficient-container bg-gray-900 opacity-[.7] p-[.6em] my-[1em]">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quis, deserunt nisi impedit atque praesentium dolorem cupiditate
              eveniet quia odio!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}




  

export default Skills;
