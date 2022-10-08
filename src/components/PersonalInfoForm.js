/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class PersonalInfoForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="personal-info-form">
                <h1>Personal Info</h1>
                <div id="personalInfo" data-section="personalInfo">
                    <input 
                        type="text" 
                        data-ref="firstName" 
                        placeholder="First Name" 
                        onChange={this.props.handleChange}
                        value={this.props.personalInfo.firstName} 
                    />
                    <input 
                        type="text" 
                        data-ref="lastName" 
                        placeholder="Last Name" 
                        onChange={this.props.handleChange}
                        value={this.props.personalInfo.lastName} 
                    />
                    <input 
                        type="text" 
                        data-ref="title" 
                        placeholder="Position Title" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.title} 
                    />
                    <input 
                        type="file" 
                        data-ref="photo" 
                        placeholder="Personal Photo" 
                        onChange={this.props.handleChange} 
                    />
                    <input 
                        type="text" 
                        data-ref="address" 
                        placeholder="Address" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.address}
                    />
                    <input 
                        type="text" 
                        data-ref="phoneNumber" 
                        placeholder="Phone Number" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.phoneNumber} 
                    />
                    <input 
                        type="email" 
                        data-ref="email" 
                        placeholder="Email" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.email} 
                    />
                    <textarea  
                        data-ref="bio" 
                        placeholder="Bio" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.bio} 
                    ></textarea>
                </div>
            </div>
        );
    }
}

export default PersonalInfoForm;