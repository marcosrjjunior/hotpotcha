import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CheckRhyme.scss";

export class CheckRhyme extends Component {
    render() {
        return <div>
            <p>Correct/Incorrect</p>
            <Link to="ask-rhyme">Ask again</Link>
        </div>
    }
}
