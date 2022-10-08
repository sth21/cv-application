/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ExperienceForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="experience-form">
                <h1>Work Experiences</h1>
                {this.props.experienceList.map((experience, index) => {
                    return (
                        <div id="experience" data-experience-number={index} data-section="experiences">
                            <input 
                                type="text" 
                                id="position" 
                                placeholder="Position" 
                                onChange={this.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="company" 
                                placeholder="Company" 
                                onChange={this.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="city" 
                                placeholder="City" 
                                onChange={this.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="start-date" 
                                placeholder="From" 
                                onChange={this.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="end-date" 
                                placeholder="To" 
                                onChange={this.handleChange} 
                            />
                            <button type="button" id="remove-experience">Remove Experience</button>
                        </div>
                    )
                })}
                <button type="button" id="add-experience" onClick={this.props.addExperience}>Add Experience</button>
            </div>
        );
    }
}

export default ExperienceForm;