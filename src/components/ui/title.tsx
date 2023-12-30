import useTheme from "../../hooks/useTheme";
const Title = ({
    variant = "default",
    children,
}: {
    variant?: "name" | "default" | "card";
    children: React.ReactNode;
}) => {
    const { theme, selectedTheme } = useTheme();
    /* If you are using this component
     * to render you name, h1 will be used
     * otherwise h2 will be used as paragraph titles
     * why? because main title is 24px whereas
     * paragraph titles are 20px
     */
    return (
        <h2 className={theme[selectedTheme].heading[variant]}>{children}</h2>
    );
};

export default Title;
