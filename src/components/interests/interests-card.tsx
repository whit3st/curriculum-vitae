import type { Interest } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";

const InterestsCard = ({ interest }: { interest: Interest }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-4 border rounded-md p-2 shadow-md shadow-black/10">
            <p className={theme[selectedTheme].heading.card}>{interest.name}</p>
            <div className="flex gap-2 flex-wrap">
                {interest.keywords.map((keyword, index) => (
                    <p
                        key={index}
                        className={theme[selectedTheme].badge}
                    >
                        {keyword}
                    </p>
                ))}
            </div>
        </article>
    );
};

export default InterestsCard;
