/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-useless-constructor */

import { Component } from "react";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info;

        return (
            <div id="PersonalInfo">
                <h1 id="name">{info.firstName} {info.lastName}</h1>
                <div id="container">
                    <h2 id="contact">{info.address} // {info.phoneNumber} // {info.email}</h2>
                    <p id="bio">{info.bio}</p>
                </div>
            </div>
        );
    }
}

/*


Above => Class Component

Below => Function Component


*/

function PersonalInfoFn (props) {
    return (
        <div id="PersonalInfo">
            <h1 id="name">{props.info.firstName} {props.info.lastName}</h1>
            <div id="container">
                <h2 id="contact">{props.info.address} // {props.info.phoneNumber} // {props.info.email}</h2>
                <p id="bio">{props.info.bio}</p>
            </div>
        </div>
    );
}

export { PersonalInfo, PersonalInfoFn };