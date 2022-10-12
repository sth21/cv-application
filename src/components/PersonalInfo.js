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
                <div id="container">
                    <h1 id="name">{info.firstName} {info.lastName}</h1>
                    <h2 id="contact">{info.address} // {info.phoneNumber} // {info.email}</h2>
                    <p id="bio">{info.bio}</p>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;