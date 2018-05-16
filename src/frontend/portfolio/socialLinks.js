import React from "react";



export default function SocialLinks() {
    return (
            <div className="row justify-content-between">
                <p className="float-left font-weight-light">
            		<a href="#personalinfo">||    About    |</a>
            		<a href="#projects">|    Projects    |</a>
            		<a href="#contact">|   Contacts    ||</a>
            	</p>

            	<p className="float-right font-weight-light">
            		<a href="http://github.com/leovcunha">github   /   </a>
            		<a href="http://twitter.com/leovcunha">twitter    /   </a>
            		<a href="http://linkedin.com/leovcunha">linkedin</a>
            	</p>
        	</div>
    );
}
