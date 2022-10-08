/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import CV from "./CV";
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import PersonalInfoForm from './PersonalInfoForm';
import uniqid from 'uniqid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {
                firstName: '',
                lastName: '',
                title: '',
                photo: '',
                address: '',
                phoneNumber: '',
                email: '',
                bio: '',
                key: uniqid(),
            },
            
            experiences: [
                {
                    title: '',
                    company: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                    index: 0,
                    key: uniqid(),
                },
            ],

            education: [
                {
                    schoolName: '',
                    location: '',
                    degree: '',
                    subject: '',
                    startDate: '',
                    endDate: '',
                    index: 0,
                    key: uniqid(),
                },
            ],
        }
        this.handleChange = this.handleChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
    }

    handleChange(e) {
        const section = e.target.parentNode.dataset.section;
        const ref = e.target.dataset.ref;
        console.log(ref);
        const state = this.state;
        if (section !== 'personalInfo') {
            const index = e.target.parentNode.dataset.number;
            state[section][index][ref] = e.target.value;
        } else {
            state[section][ref] = e.target.value;
            console.log(state[section][ref]);
        }
        this.setState({ state });
    }

    addExperience() {
        const state = this.state;
        const newExperience = {
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            index: state.experiences.length,    
        };
        state.experiences[state.experiences.length] = newExperience;
        this.setState({ state });
    }

    addEducation() {
        console.log('y');
        const state = this.state;
        const newEducation = {
            schoolName: '',
            location: '',
            degree: '',
            subject: '',
            startDate: '',
            endDate: '',
            index: state.education.length,    
        };
        state.education[state.education.length] = newEducation;
        this.setState({ state });
    }

    removeExperience() {

    }

    removeEducation() {

    }

    render() {
        const {personalInfo, experiences, education } = this.state;

        return (
            <div id="project-container">
                <form id="CVForm">
                    <PersonalInfoForm 
                        handleChange={this.handleChange} 
                        personalInfo={personalInfo} 
                    />
                    <ExperienceForm 
                        experienceList={this.state.experiences}
                        handleChange={this.handleChange} 
                        removeExperience={this.removeExperience} 
                        addExperience={this.addExperience} 
                    />
                    <EducationForm 
                        educationList={this.state.education}
                        handleChange={this.handleChange} 
                        addEducation={this.addEducation} 
                        removeEducation={this.removeEducation}
                    />
                </form>
            </div>
        )
    }
};

export default App;
