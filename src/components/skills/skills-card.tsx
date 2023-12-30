import type { Skill } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";

const SkillsCard = ({ skill }: { skill: Skill }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <p className={theme[selectedTheme].heading.card}>{skill.name}</p>
            <p className={theme[selectedTheme].paragraph.card}>{skill.level}</p>
            <div className="flex gap-2 flex-wrap">
                {skill.keywords.map((keyword, index) => (
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

export default SkillsCard;
