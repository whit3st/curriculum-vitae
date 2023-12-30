import { useContext } from "react";
import ResumeContext from "../../context-provider/resume-context";
import Title from "../ui/title";
import Paragraph from "../ui/paragraph";
import LocationLink from "../ui/location-link";
import SocialsLink from "../ui/socials-link";
import type { socialIconsMap } from "../../data/social-icons-map";
const PersonalInformation = () => {
    const resume = useContext(ResumeContext);
    return (
            <section className="flex gap-5 justify-between items-center">
                <aside className="flex flex-col gap-2">
                    <Title variant="name">{resume.basics.name}</Title>
                    <Paragraph variant="bio">{resume.basics.summary}</Paragraph>
                    {/* TODO: REDUCE THIS TO ONLY LOCATION PROP, DECONSTRUCT INSIDE THE COMPONENT */}
                    {/* <LocationLink location={resume.basics.location} /> */}
                    <SocialsWrapper />
                </aside>
                <ProfilePicture />
            </section>
    );
};

export default PersonalInformation;

//
//
//
//
//
//
//
//
//
//
//
//
const SocialsWrapper = () => {
    const resume = useContext(ResumeContext);
    type SocialIconType = keyof typeof socialIconsMap;

    return (
        <section className="flex gap-1 items-center">
            <SocialsLink
                type="phone"
                href=""
                information={resume}
            />
            <SocialsLink
                type="mail"
                href=""
                information={resume}
            />
            {resume.basics.profiles.map(profile => (
                <SocialsLink
                    key={profile.url}
                    type={profile.network.toLowerCase() as SocialIconType}
                    href={profile.url}
                    information={resume}
                />
            ))}
        </section>
    );
};

const ProfilePicture = () => {
    const resume = useContext(ResumeContext);
    return (
        <img
            src={resume.basics.image}
            alt={resume.basics.name}
            className="w-28 h-28 rounded-md shrink-0 aspect-square"
        />
    );
};
