/* eslint-disable no-useless-constructor */

import React, { Component } from "react";
import {PersonalInfo, PersonalInfoFn} from "./PersonalInfo";
import {Experience, ExperienceFn} from "./Experience";
import {Education, EducationFn} from "./Education";

class CV extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="CV">
                <PersonalInfo info={ this.props.info.personalInfo } />
                <Experience info={ this.props.info.experiences } />
                <Education info={ this.props.info.education } />
            </div>
        );
    }
}

/*


Above => Class Component

Below => Function Component


*/

function CVFn (props) {
    return (
        <div id="CV">
            <PersonalInfoFn info={ props.info.personalInfo } />
            <ExperienceFn info={ props.info.experiences } />
            <EducationFn info={ props.info.education } />
        </div> 
    );
}

export { CV, CVFn };