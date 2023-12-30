import { createContext } from "react";
import type { Resume } from "../data/data-interface";
import ResumeData from "../data/data.json";

const ResumeContext = createContext<Resume>(ResumeData);

export default ResumeContext;
