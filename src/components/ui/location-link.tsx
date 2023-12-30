import { useContext } from "react";
import ThemeContext from "../../context-provider/theme-context";
import { Globe } from "lucide-react";
import type { ThemeNames } from "../../data/themes";

const LocationLink = ({
    location,
}: {
    location: { city: string; countryCode: string };
}) => {
    const theme = useContext(ThemeContext);
    const selectedTheme = import.meta.env.PUBLIC_SELECTED_THEME as ThemeNames;

    return (
        <a
            className={theme[selectedTheme].location}
            target="_blank"
            href={
                "https://www.google.com/maps/place/" +
                location.countryCode
            }
        >
            <Globe width={12} />
            {location.city}, {location.countryCode}
        </a>
    );
};

export default LocationLink;
