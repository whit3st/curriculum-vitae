import type { Award } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";

const AwardsCard = ({ award }: { award: Award }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <h2 className={theme[selectedTheme].heading.card}>{award.title}</h2>
            <span className="flex items-center justify-between">
                <p className={theme[selectedTheme].paragraph.card}>
                    {award.awarder}
                </p>
                <p className={theme[selectedTheme].paragraph.card}>
                    {award.date.split("-").join("/")}
                </p>
            </span>
            <p className={theme[selectedTheme].paragraph.default}>
                {award.summary}
            </p>
        </article>
    );
};

export default AwardsCard;
