import { useContext } from "react";
import ResumeContext from "../../context-provider/resume-context";
import PublicationsCard from "./publications-card";
import Title from "../ui/title";

const Publications = () => {
    const resume = useContext(ResumeContext);
    if (resume.publications.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Publications</Title>
            <PublicationsWrapper />
        </section>
    );
};

export default Publications;


const PublicationsWrapper = () => {
    const resume = useContext(ResumeContext);
    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.publications.map(publication => (
                <PublicationsCard publication={publication} />
            ))}
        </aside>
    );
}