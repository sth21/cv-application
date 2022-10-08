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
                        <div id="education" data-education-number={index} data-section="education">
                            <input 
                                type="text" 
                                id="schoolName" 
                                placeholder="School Name" 
                                onChange={this.props.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="city" 
                                placeholder="City" 
                                onChange={this.props.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="degree" 
                                placeholder="Type of Degree" 
                                onChange={this.props.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="subject" 
                                placeholder="Subject of Degree" 
                                onChange={this.props.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="startDate" 
                                placeholder="From" 
                                onChange={this.props.handleChange} 
                            />
                            <input 
                                type="text" 
                                id="endDate" 
                                placeholder="To" 
                                onChange={this.props.handleChange} 
                            />
                        </div>
                    )
                })}
                <div id="education-control">
                    <button type="button" id="add-education" onClick={this.props.addEducation}>Add Education</button>
                    <button type="button" id="remove-education" onClick={this.props.removeEducation}>Remove Education</button>
                </div>
            </div>
        );
    }
}

export default EducationForm;