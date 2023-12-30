import type { Reference } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";
const ReferencesCard = ({ reference }: { reference: Reference }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <h3 className={theme[selectedTheme].heading.card}>{reference.name}</h3>
            <p className={theme[selectedTheme].paragraph.card}>{reference.reference}</p>
        </article>
    );
};

export default ReferencesCard;
