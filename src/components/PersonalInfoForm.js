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
                        id="firstName" 
                        placeholder="First Name" 
                        onChange={this.props.handleChange}
                        value={this.props.personalInfo.firstName} 
                    />
                    <input 
                        type="text" 
                        id="lastName" 
                        placeholder="Last Name" 
                        onChange={this.props.handleChange}
                        value={this.props.personalInfo.lastName} 
                    />
                    <input 
                        type="text" 
                        id="address" 
                        placeholder="Address" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.address}
                    />
                    <input 
                        type="text" 
                        id="phoneNumber" 
                        placeholder="Phone Number" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.phoneNumber} 
                    />
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.email} 
                    />
                    <textarea  
                        id="bio" 
                        placeholder="Bio" 
                        onChange={this.props.handleChange} 
                        value={this.props.personalInfo.bio} 
                    />
                </div>
            </div>
        );
    }
}

/*


Above => Class Component

Below => Function Component


*/

function PersonalInfoFormFn (props) {
    return (
        <div id="personal-info-form">
            <h1>Personal Info</h1>
            <div id="personalInfo" data-section="personalInfo">
                <input 
                    type="text" 
                    id="firstName" 
                    placeholder="First Name" 
                    onChange={props.handleChange}
                    value={props.personalInfo.firstName} 
                />
                <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" 
                    onChange={props.handleChange}
                    value={props.personalInfo.lastName} 
                />
                <input 
                    type="text" 
                    id="address" 
                    placeholder="Address" 
                    onChange={props.handleChange} 
                    value={props.personalInfo.address}
                />
                <input 
                    type="text" 
                    id="phoneNumber" 
                    placeholder="Phone Number" 
                    onChange={props.handleChange} 
                    value={props.personalInfo.phoneNumber} 
                />
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    onChange={props.handleChange} 
                    value={props.personalInfo.email} 
                />
                <textarea  
                    id="bio" 
                    placeholder="Bio" 
                    onChange={props.handleChange} 
                    value={props.personalInfo.bio} 
                />
            </div>
        </div>
    );
}

export { PersonalInfoForm, PersonalInfoFormFn };