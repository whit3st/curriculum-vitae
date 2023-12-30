import useTheme from "../../hooks/useTheme";
const Paragraph = ({
    variant = "default",
    children,
}: {
    variant?: "bio" | "default";
    children: React.ReactNode;
}) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <p className={theme[selectedTheme].paragraph[variant]}>{children}</p>
    );
};

export default Paragraph;
