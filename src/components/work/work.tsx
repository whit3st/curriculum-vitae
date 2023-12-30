import { useContext } from "react";
import ResumeContext from "../../context-provider/resume-context";
import WorkCard from "./work-card";
import Title from "../ui/title";
const Work = () => {
    const resume = useContext(ResumeContext);
    if (resume.work.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Work Experience</Title>
            {resume.work.map(work => (
                <WorkCard work={work} />
            ))}
        </section>
    );
};

export default Work;
