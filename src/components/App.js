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
                    startDate: '',
                    endDate: '',
                    description: '',
                    index: 0,
                    key: uniqid(),
                },
            ],

            education: [
                {
                    schoolName: '',
                    degree: '',
                    subject: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                    index: 0,
                    key: uniqid(),
                },
            ],
        }
        this.handleChange = this.handleChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.removeList = this.removeList.bind(this);
    }

    handleChange(e) {
        const section = e.target.parentNode.dataset.section;
        const ref = e.target.getAttribute('id');
        const state = this.state;
        if (section !== 'personalInfo') {
            const index = e.target.parentNode.dataset.index;
            state[section][index][ref] = e.target.value;
        } else {
            state[section][ref] = e.target.value;
        }
        this.setState({ state });
    }

    addExperience() {
        const state = this.state;
        const newExperience = {
            title: '',
            company: '',
            startDate: '',
            endDate: '',
            description: '',
            index: state.experiences.length,    
        };
        state.experiences[state.experiences.length] = newExperience;
        this.setState({ state });
    }

    addEducation() {
        const state = this.state;
        const newEducation = {
            schoolName: '',
            degree: '',
            subject: '',
            startDate: '',
            endDate: '',
            description: '',
            index: state.education.length,    
        };
        state.education[state.education.length] = newEducation;
        this.setState({ state });
    }

    removeList(e) {
        const element = e.target.parentNode;
        const section = element.dataset.section;
        const index = parseInt(element.dataset.index);
        const state = this.state;
        state[section].splice(index, 1);
        for (let i = 0; i < state[section].length; i += 1) {
            state[section][i].index = i;
        }
        this.setState({ state });
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
                        removeExperience={this.removeList} 
                        addExperience={this.addExperience} 
                    />
                    <EducationForm 
                        educationList={this.state.education}
                        handleChange={this.handleChange} 
                        addEducation={this.addEducation} 
                        removeEducation={this.removeList}
                    />
                </form>
                <CV info={this.state}/>
            </div>
        )
    }
};

export default App;
