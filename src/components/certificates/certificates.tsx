import { useContext } from "react";
import ResumeContext from "../../context-provider/resume-context";
import CertificatesCard from "./certificates-card";
import Title from "../ui/title";

const Certificates = () => {
    const resume = useContext(ResumeContext);
    if (resume.certificates.length === 0) return null;
    return (
        <section className="flex flex-col gap-4">
            <Title variant="default">Certificates</Title>
            <CerfiticatesWrapper />
        </section>
    );
};

export default Certificates;

const CerfiticatesWrapper = () => {
    const resume = useContext(ResumeContext);
    return (
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.certificates.map(certificate => (
                <CertificatesCard certificate={certificate} />
            ))}
        </aside>
    );
};
