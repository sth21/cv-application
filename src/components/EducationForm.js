/* eslint-disable no-useless-constructor */

import React, { Component } from "react";

class EducationForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="education-form">
                <h1>Education</h1>
                {this.props.educationList.map((education, index) => {
                    return (
                        <div id="education" data-index={index} data-section="education">
                            <input 
                                type="text" 
                                id="schoolName" 
                                placeholder="School Name" 
                                onChange={this.props.handleChange}
                                value={education.schoolName || ''}  
                            />
                            <input 
                                type="text" 
                                id="degree" 
                                placeholder="Type of Degree" 
                                onChange={this.props.handleChange}
                                value={education.degree || ''} 
                            />
                            <input 
                                type="text" 
                                id="subject" 
                                placeholder="Subject of Degree" 
                                onChange={this.props.handleChange}
                                value={education.subject || ''} 
                            />
                            <input 
                                type="text" 
                                id="startDate" 
                                placeholder="From" 
                                onChange={this.props.handleChange}
                                value={education.startDate || ''} 
                            />
                            <input 
                                type="text" 
                                id="endDate" 
                                placeholder="To" 
                                onChange={this.props.handleChange}
                                value={education.endDate || ''} 
                            />
                            <textarea  
                                id="description" 
                                placeholder="Description" 
                                onChange={this.props.handleChange} 
                                value={education.description || ''} 
                            />
                            <button type="button" id="remove-education" onClick={this.props.removeEducation}>Remove Education</button>
                        </div>
                    )
                })}
                <button type="button" id="add-education" onClick={this.props.addEducation}>Add Education</button>
            </div>
        );
    }
}

/*


Above => Class Component

Below => Function Component


*/

function EducationFormFn (props) {
    return (
        <div id="education-form">
            <h1>Education</h1>
            {props.educationList.map((education, index) => {
                return (
                    <div id="education" data-index={index} data-section="education">
                        <input 
                            type="text" 
                            id="schoolName" 
                            placeholder="School Name" 
                            onChange={props.handleChange}
                            value={education.schoolName || ''}  
                        />
                        <input 
                            type="text" 
                            id="degree" 
                            placeholder="Type of Degree" 
                            onChange={props.handleChange}
                            value={education.degree || ''} 
                        />
                        <input 
                            type="text" 
                            id="subject" 
                            placeholder="Subject of Degree" 
                            onChange={props.handleChange}
                            value={education.subject || ''} 
                        />
                        <input 
                            type="text" 
                            id="startDate" 
                            placeholder="From" 
                            onChange={props.handleChange}
                            value={education.startDate || ''} 
                        />
                        <input 
                            type="text" 
                            id="endDate" 
                            placeholder="To" 
                            onChange={props.handleChange}
                            value={education.endDate || ''} 
                        />
                        <textarea  
                            id="description" 
                            placeholder="Description" 
                            onChange={props.handleChange} 
                            value={education.description || ''} 
                        />
                        <button type="button" id="remove-education" onClick={props.removeEducation}>Remove Education</button>
                    </div>
                )
            })}
            <button type="button" id="add-education" onClick={props.addEducation}>Add Education</button>
        </div>
    );
}

export { EducationForm, EducationFormFn };