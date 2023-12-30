import { useContext } from "react";
import ResumeContext from "../../context-provider/resume-context";
import AwardsCard from "./awards-card";
import Title from "../ui/title";
const Awards = () => {
    const resume = useContext(ResumeContext);
    if (resume.awards.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Awards</Title>
            <AwardsWrapper />
        </section>
    );
};

export default Awards;

const AwardsWrapper = () => {
    const resume = useContext(ResumeContext);

    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.awards.map(award => (
                <AwardsCard award={award} />
            ))}
        </aside>
    );
};
