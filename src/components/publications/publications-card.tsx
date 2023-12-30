import type { Publication } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";

const PublicationsCard = ({ publication }: { publication: Publication }) => {
    const { theme, selectedTheme } = useTheme();

    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <a
                href={publication.url}
                target="_blank"
                className={theme[selectedTheme].heading.card_link}
            >
                {publication.name}
            </a>
            <span className="flex items-center justify-between">
                <p className={theme[selectedTheme].paragraph.card}>
                    {publication.publisher}
                </p>
                <p className={theme[selectedTheme].paragraph.card}>
                    {publication.releaseDate.split("-").join("/")}
                </p>
            </span>
            <p className={theme[selectedTheme].paragraph.default}>
                {publication.summary}
            </p>
        </article>
    );
};

export default PublicationsCard;
