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
                        <div id="experience" data-index={index} data-section="experiences">
                            <input 
                                type="text" 
                                id="title" 
                                placeholder="Position" 
                                onChange={this.props.handleChange}
                                value={experience.title || ''} 
                            />
                            <input 
                                type="text" 
                                id="company" 
                                placeholder="Company" 
                                onChange={this.props.handleChange} 
                                value={experience.company || ''} 
                            />
                            <input 
                                type="text" 
                                id="startDate" 
                                placeholder="From" 
                                onChange={this.props.handleChange} 
                                value={experience.startDate || ''} 
                            />
                            <input 
                                type="text" 
                                id="endDate" 
                                placeholder="To" 
                                onChange={this.props.handleChange}
                                value={experience.endDate || ''}  
                            />
                            <textarea  
                                id="description" 
                                placeholder="Description" 
                                onChange={this.props.handleChange} 
                                value={experience.description || ''} 
                            />
                            <button type="button" id="remove-experience" onClick={this.props.removeExperience}>Remove Experience</button>
                        </div>
                    )
                })}
                <button type="button" id="add-experience" onClick={this.props.addExperience}>Add Experience</button>
            </div>
        );
    }
}

/*


Above => Class Component

Below => Function Component


*/

function ExperienceFormFn (props) {
    return (
        <div id="experience-form">
            <h1>Work Experiences</h1>
            {props.experienceList.map((experience, index) => {
                return (
                    <div id="experience" data-index={index} data-section="experiences">
                        <input 
                            type="text" 
                            id="title" 
                            placeholder="Position" 
                            onChange={props.handleChange}
                            value={experience.title || ''} 
                        />
                        <input 
                            type="text" 
                            id="company" 
                            placeholder="Company" 
                            onChange={props.handleChange} 
                            value={experience.company || ''} 
                        />
                        <input 
                            type="text" 
                            id="startDate" 
                            placeholder="From" 
                            onChange={props.handleChange} 
                            value={experience.startDate || ''} 
                        />
                        <input 
                            type="text" 
                            id="endDate" 
                            placeholder="To" 
                            onChange={props.handleChange}
                            value={experience.endDate || ''}  
                        />
                        <textarea  
                            id="description" 
                            placeholder="Description" 
                            onChange={props.handleChange} 
                            value={experience.description || ''} 
                        />
                        <button type="button" id="remove-experience" onClick={props.removeExperience}>Remove Experience</button>
                    </div>
                )
            })}
            <button type="button" id="add-experience" onClick={props.addExperience}>Add Experience</button>
        </div>
    );
}

export { ExperienceForm, ExperienceFormFn };