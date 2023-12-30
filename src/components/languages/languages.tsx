import { useContext } from "react";
import Title from "../ui/title";
import ResumeContext from "../../context-provider/resume-context";
import LanguagesCard from "./languages-card";

const Languages = () => {
    const resume = useContext(ResumeContext);
    if (resume.languages.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Languages</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {resume.languages.map(language => (
                    <LanguagesCard language={language} />
                ))}
            </div>
        </section>
    );
};

export default Languages;
