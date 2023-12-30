import useTheme from "../../hooks/useTheme";
import type { Education } from "../../data/data-interface";
const EducationCard = ({ education }: { education: Education }) => {
    const { theme, selectedTheme } = useTheme();
    return (
        <article className="flex flex-col gap-1 border rounded-md p-2 shadow-md shadow-black/10">
            <a
                href={education.url}
                target="_blank"
                className={theme[selectedTheme].heading.card_link}
            >
                {education.institution}
            </a>
            <span className="flex items-center justify-between">
                <p className={theme[selectedTheme].paragraph.card}>
                    {education.area}
                </p>
                <p className={theme[selectedTheme].paragraph.card}>
                    {education.startDate.slice(0, 4)} -{" "}
                    {education.endDate.slice(0, 4)}
                </p>
            </span>
            <p className={theme[selectedTheme].paragraph.default}>
                {education.studyType}
            </p>
            <p className={theme[selectedTheme].paragraph.default}>
                {education.score.length > 0 ? "GPA " + education.score : ""}
            </p>
            {/* COURSES */}
            {/* <span className="flex gap-2">
                <p className={theme[selectedTheme].paragraph.card}>Courses:</p>
                <div className="flex flex-wrap gap-1">
                    {education.courses.map((course, index) => (
                        <p
                            key={index}
                            className={theme[selectedTheme].badge}
                        >
                            {course}
                        </p>
                    ))}
                </div>
            </span> */}
        </article>
    );
};

export default EducationCard;
