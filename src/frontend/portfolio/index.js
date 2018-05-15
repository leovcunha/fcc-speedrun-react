import React from "react";
import SocialLinks from "./socialLinks";
import ProjectsHolder from "./projectsholder";
import PersonalInfo from "./personalinfo";
import ContactForm from "./contactform"

export default function Portfolio() {
    return (
        <div className="jumbotron portfolio">
        	<SocialLinks/>
            <h2 className="text-center"> Portfolio </h2>
            <PersonalInfo/>
            <ProjectsHolder/>
            <ContactForm/>
        </div>
    );
}
