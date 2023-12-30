import type { Work } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";
const WorkCard = ({ work }: { work: Work }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-1">
            <a
                href={work.url}
                target="_blank"
                className={theme[selectedTheme].heading.card_link}
            >
                {work.name}
            </a>
            <span className="flex items-center justify-between">
                <p className={theme[selectedTheme].paragraph.card}>
                    {work.position}
                </p>
                <p className={theme[selectedTheme].paragraph.card}>
                    {work.startDate.slice(0, 4)} - {work.endDate.slice(0, 4)}
                </p>
            </span>
            <p className={theme[selectedTheme].paragraph.default}>{work.summary}</p>
        </article>
    );
};

export default WorkCard;
