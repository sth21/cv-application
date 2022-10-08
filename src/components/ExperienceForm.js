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
                <div id="experiences">
                    <div id="experience" data-experience-number="1" data-section="experiences">
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
                    </div>
                </div>
                <div id="experience-control">
                    <button type="button" id="add-experience">Add Experience</button>
                    <button type="button" id="remove-experience">Remove Experience</button>
                </div>
            </div>
        );
    }
}

export default ExperienceForm;