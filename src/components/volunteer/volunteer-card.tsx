import type { Volunteer } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";
const VolunteerCard = ({ volunteer }: { volunteer: Volunteer }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <a
                href={volunteer.url}
                target="_blank"
                className={theme[selectedTheme].heading.card}
            >
                {volunteer.organization}
            </a>
            <span className="flex items-center justify-between">
                <p className={theme[selectedTheme].paragraph.card}>
                    {volunteer.position}
                </p>
                <p className={theme[selectedTheme].paragraph.card}>
                    {volunteer.startDate.slice(0, 4)} -{" "}
                    {volunteer.endDate.slice(0, 4)}
                </p>
            </span>
            <p className={theme[selectedTheme].paragraph.default}>
                {volunteer.summary}
            </p>
        </article>
    );
};

export default VolunteerCard;
