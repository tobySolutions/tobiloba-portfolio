import Header from ".././base/Header";
import EducationComponent from "../base/helpers/EducationComponent";
import ProficientComponent from "../base/helpers/ProficientComponent";
import InterestsComponent from "../base/helpers/InterestsComponent";


function Skills() {

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
            <ProficientComponent/> 
          </div>
        </section>

        <section className="extra-skills my-[2.3em]">
          <h2 className="font-bold text-[1.4rem] text-center text-gray-700">
            Education and Certifications
          </h2>
          <div className="proficient-container bg-gray-900 opacity-[.7] p-[.6em] my-[1em]">
            <EducationComponent/>
          </div>
        </section>

        <section className="extra-skills my-[2.3em]">
          <h2 className="font-bold text-[1.4rem] text-center text-gray-700">
            Interests
          </h2>
          <div className="proficient-container bg-gray-900 opacity-[.7] p-[.6em] my-[1em]">
            <InterestsComponent/>
          </div>
        </section>
      </main>
    </>
  );
}




  

export default Skills;
