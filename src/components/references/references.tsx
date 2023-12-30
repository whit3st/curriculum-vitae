import { useContext } from "react";
import Title from "../ui/title";
import ResumeContext from "../../context-provider/resume-context";
import ReferencesCard from "./references-card";
const References = () => {
    const resume = useContext(ResumeContext);
    if (resume.references.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">References</Title>
            <ReferencesWrapper />
        </section>
    );
};

export default References;

const ReferencesWrapper = () => {
    const resume = useContext(ResumeContext);
    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.references.map(reference => (
                <ReferencesCard reference={reference} />
            ))}
        </aside>
    );
};
