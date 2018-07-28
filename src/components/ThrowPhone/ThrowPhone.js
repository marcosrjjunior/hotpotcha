import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ThrowPhone.scss";

export class ThrowPhone extends Component {
    render() {
        return <div>
            <p>Throw the phone</p>
            <Link to="ask-rhyme">Ask Rhyme</Link>
        </div>
    }
}
