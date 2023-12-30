import { useContext } from "react";
import ResumeContext from "../../context-provider/resume-context";
import ProjectsCard from "./projects-card";
import Title from "../ui/title";

const Projects = () => {
    const resume = useContext(ResumeContext);
    if (resume.projects.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Projects</Title>
            <ProjectsWrapper />
        </section>
    );
};

export default Projects;

const ProjectsWrapper = () => {
    const resume = useContext(ResumeContext);
    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.projects.map(project => (
                <ProjectsCard project={project} />
            ))}
        </aside>
    );
};
