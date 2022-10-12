/* eslint-disable no-useless-constructor */

import { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info;

        return (
            <div id="Education">
                <h1>Education</h1>
                {info.map((education) => {
                    return (
                        <div id="education">
                            <h2>{education.schoolName}</h2>
                            <h3>{education.startDate} - {education.endDate}</h3>
                            <h3>{education.degree} in {education.subject}</h3>
                            <p>{education.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Education;