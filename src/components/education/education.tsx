import { useContext } from "react";
import ResumeContext from "../../context-provider/resume-context";
import Title from "../ui/title";
import EducationCard from "./education-card";
const Education = () => {
    const resume = useContext(ResumeContext);
    if (resume.education.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Education</Title>
            <EducationsWrapper />
        </section>
    );
};

export default Education;

const EducationsWrapper = () => {
    const resume = useContext(ResumeContext);
    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.education.map(education => (
                <EducationCard education={education} />
            ))}
        </aside>
    );
};
