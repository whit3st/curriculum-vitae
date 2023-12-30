import type { Project } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";
const ProjectsCard = ({ project }: { project: Project }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <span className="flex items-center justify-between">
                <a
                    href={project.url}
                    target="_blank"
                    className={theme[selectedTheme].heading.card_link}
                >
                    {project.name}
                </a>
                <p className={theme[selectedTheme].paragraph.card}>
                    {project.startDate.slice(0, 4)} -{" "}
                    {project.endDate.slice(0, 4)}
                </p>
            </span>
            <p className={theme[selectedTheme].paragraph.card}>
                {project.description}
            </p>
            <ul className="list-disc list-outside ml-4">
                {project.highlights.map(highlight => (
                    <li className={theme[selectedTheme].paragraph.default}>
                        {highlight}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default ProjectsCard;
