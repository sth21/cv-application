/* eslint-disable no-useless-constructor */

import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";

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

export default CV;