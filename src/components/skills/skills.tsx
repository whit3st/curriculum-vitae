import { useContext } from "react";
import Title from "../ui/title";
import ResumeContext from "../../context-provider/resume-context";
import SkillsCard from "./skills-card";

const Skills = () => {
    const resume = useContext(ResumeContext);
    if (resume.skills.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Skills</Title>
            <SkillsWrapper />
        </section>
    );
};

export default Skills;


const SkillsWrapper = () => {
    const resume = useContext(ResumeContext);
    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.skills.map(skill => (
                <SkillsCard skill={skill} />
            ))}
        </aside>
    );
};