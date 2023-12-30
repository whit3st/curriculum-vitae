import type { Language } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";

const LanguagesCard = ({ language }: { language: Language }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <p className={theme[selectedTheme].heading.card}>
                {language.language}
            </p>
            <p className={theme[selectedTheme].paragraph.card}>
                {language.fluency}
            </p>
        </article>
    );
};

export default LanguagesCard;
