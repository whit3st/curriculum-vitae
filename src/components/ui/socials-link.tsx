import type { InformationProps } from "../../data/data-interface";
import { socialIconsMap } from "../../data/social-icons-map";
import useTheme from "../../hooks/useTheme";
type SocialIconType = keyof typeof socialIconsMap;
const SocialsLink = ({
    type,
    href,
    information,
}: {
    type: SocialIconType;
    href: string;
    information: InformationProps;
}) => {
    const { theme, selectedTheme } = useTheme();

    const Icon = socialIconsMap[type];
    if (type === "phone") {
        return (
            <a
                href={`tel:${information.basics.phone}`}
                aria-label={"tel:" + information.basics.phone}
                className={theme[selectedTheme].icon.link}
                target="_blank"
            >
                <Icon className={theme[selectedTheme].icon.icon} />
                <span className="sr-only">{information.basics.phone}</span>
            </a>
        );
    }
    if (type === "mail") {
        return (
            <a
                href={`mailto:${information.basics.email}`}
                aria-label={"mailto:" + information.basics.email}
                className={theme[selectedTheme].icon.link}
                target="_blank"
            >
                <Icon className={theme[selectedTheme].icon.icon} />
                <span className="sr-only">{information.basics.phone}</span>
            </a>
        );
    }
    return (
        <a
            href={href}
            aria-label={"go to " + href}
            className={theme[selectedTheme].icon.link}
            target="_blank"
        >
            <Icon className={theme[selectedTheme].icon.icon} />
            <span className="sr-only">{information.basics.phone}</span>
        </a>
    );
};

export default SocialsLink;
