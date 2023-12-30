import type { Certificate } from "../../data/data-interface";
import useTheme from "../../hooks/useTheme";

export const CertificatesCard = ({
    certificate,
}: {
    certificate: Certificate;
}) => {
    const { theme, selectedTheme } = useTheme();

    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <a
                href={certificate.url}
                target="_blank"
                className={theme[selectedTheme].heading.card_link}
            >
                {certificate.name}
            </a>
            <span className="flex items-center justify-between">
                <p className={theme[selectedTheme].paragraph.card}>
                    {certificate.issuer}
                </p>
                <p className={theme[selectedTheme].paragraph.card}>
                    {certificate.date.split("-").join("/")}
                </p>
            </span>
        </article>
    );
};

export default CertificatesCard;
