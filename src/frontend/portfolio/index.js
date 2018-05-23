import React from "react";
import SocialLinks from "./socialLinks";
import ProjectsHolder from "./projectsholder";
import PersonalInfo from "./personalinfo";
import ContactForm from "./contactform";

export default function Portfolio() {
    return (
        <div className="jumbotron portfolio">
            <SocialLinks/>
            <PersonalInfo/>
            <ProjectsHolder/>
            <ContactForm/>
        </div>
    );
}
