import { useContext } from "react";
import Title from "../ui/title";
import ResumeContext from "../../context-provider/resume-context";
import VolunteerCard from "./volunteer-card";
const Volunteer = () => {
    const resume = useContext(ResumeContext);
    if (resume.volunteer.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Volunteer Experience</Title>
            <VolunteerWrapper />
        </section>
    );
};

export default Volunteer;

const VolunteerWrapper = () => {
    const resume = useContext(ResumeContext);
    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.volunteer.map(volunteer => (
                <VolunteerCard volunteer={volunteer} />
            ))}
        </aside>
    );
};
