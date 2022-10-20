/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import React, { Component, useState, useEffect } from "react";
import { CV, CVFn } from "./CV";
import { EducationForm, EducationFormFn } from './EducationForm';
import {ExperienceForm, ExperienceFormFn } from './ExperienceForm';
import {PersonalInfoForm, PersonalInfoFormFn } from './PersonalInfoForm';
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

/*


Above => Class Component

Below => Function Component


*/

function AppFn() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        bio: '',
        key: uniqid(),
    });

    const [experiences, setExperiences] = useState([{
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        index: 0,
        key: uniqid(),
    }]);

    const [education, setEducation] = useState([{
        schoolName: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        description: '',
        index: 0,
        key: uniqid(),
    }]);

    function handleChange(e) {
        const ref = e.target.getAttribute('id');
        switch (e.target.parentNode.dataset.section) {
            case 'personalInfo' :
                const personalInfoRef = personalInfo;
                personalInfoRef[ref] = e.target.value;
                setPersonalInfo(personalInfoRef);
                break;

            case 'experiences' :
                const experiencesRef = experiences;
                const experiencesIndex = e.target.parentNode.dataset.index;
                experiencesRef[experiencesIndex][ref] = e.target.value;
                setExperiences(experiencesRef);
                break;

            case 'education' :
                const educationRef = education;
                const educationIndex = e.target.parentNode.dataset.index;
                educationRef[educationIndex][ref] = e.target.value;
                setEducation(educationRef);
                break;

            default:
                throw new Error('Error - Could Not Handle Change');
        }
    }

    function addToList(e) {
        switch (e.target.getAttribute('id')) {
            case 'add-experience' :
                const newExperience = [{
                    title: '',
                    company: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                    index: experiences.length,    
                }];
                setExperiences(experiences.concat(newExperience));
                break;

            case 'add-education' :
                const newEducation = [{
                    schoolName: '',
                    degree: '',
                    subject: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                    index: education.length,    
                }];
                setEducation(education.concat(newEducation));
                break;

            default :
                throw new Error('Error - Could Not Add To List');
        }
    }

    function removeFromList(e) {
        const element = e.target.parentNode;
        const section = element.dataset.section;
        const index = parseInt(element.dataset.index);
        let ref;
        switch (section) {
            case 'education' :
                ref = education;
                ref.splice(index, 1);
                for (let i = 0; i < ref.length; i += 1) {
                    ref[i].index = i;
                }
                setEducation(ref);
                break;

            case 'experiences' :
                ref = experiences;
                ref.splice(index, 1);
                for (let i = 0; i < ref.length; i += 1) {
                    ref[i].index = i;
                }
                setExperiences(ref);
                break;

            default :
                throw new Error('Error - Could Not Remove From List');
        }
    }

    const info = {
        personalInfo: personalInfo,
        experiences: experiences,
        education: education,
    };

    return (
        <div id="project-container">
            <form id="CVForm">
                <PersonalInfoForm 
                    handleChange={handleChange} 
                    personalInfo={personalInfo} 
                />
                <ExperienceForm 
                    experienceList={experiences}
                    handleChange={handleChange} 
                    removeExperience={removeFromList} 
                    addExperience={addToList} 
                />
                <EducationForm 
                    educationList={education}
                    handleChange={handleChange} 
                    addEducation={addToList} 
                    removeEducation={removeFromList}
                />
            </form>
            <CVFn info={info}/>
        </div>
    );
}

export { App, AppFn };
