import { useContext } from "react";
import Title from "../ui/title";
import ResumeContext from "../../context-provider/resume-context";
import InterestsCard from "./interests-card";
const Interests = () => {
    const resume = useContext(ResumeContext);
    if (resume.interests.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Interests</Title>
            <InterestsWrapper />
        </section>
    );
};

export default Interests;

const InterestsWrapper = () => {
    const resume = useContext(ResumeContext);
    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.interests.map(interest => (
                <InterestsCard interest={interest} />
            ))}
        </aside>
    );
};
