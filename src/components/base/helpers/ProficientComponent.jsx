import { useState } from "react";
import { mySkills } from "../../../Data/data"

function ProficientComponent() {
  const slicedSkills = mySkills.proficient.slice(0, 3);

  const [seeMore, setSeeMore] = useState(false);
  
    const handleCardOpening = () => {
      setSeeMore(!seeMore);
    };
  

  return (
    <>
      {seeMore
        ? mySkills.proficient.map((skill) => (
            <div key={skill.id} className="skill-card">
              <img src={skill.logo} alt="html-logo" />
              <p className="skill-name">{skill.skillName}</p>
              <p>{skill.desc}</p>
            </div>
          ))
        : slicedSkills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <img src={skill.logo} alt="html-logo" />
              <p className="skill-name">{skill.skillName}</p>
              <p>{skill.desc}</p>
            </div>
          ))}
      <span onClick={handleCardOpening} className="text-white font-semibold">
        {seeMore ? "See Less" : "See More"}
      </span>
    </>
  );
}

export default ProficientComponent;
