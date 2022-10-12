/* eslint-disable no-useless-constructor */

import { Component } from "react";

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info;

        return (
            <div id="Experience">
                <h1>Work Experience</h1>
                {info.map((experience) => {
                    return (
                        <div id="experience">
                            <h2>{experience.title} - {experience.company}</h2>
                            <h3>{experience.startDate} - {experience.endDate}</h3>
                            <p>{experience.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Experience;