import { mySkills } from "../../../Data/data"

function ProficientComponent({ seeMore }) {
  const slicedSkills = mySkills.proficient.slice(0, 3);

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
    </>
  );
}

export default ProficientComponent;
