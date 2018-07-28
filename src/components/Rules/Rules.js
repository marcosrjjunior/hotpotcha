import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Rules.scss";

export class Rules extends Component {
    render() {
        return <div>
            <p>Rules here</p>

            <Link to="ask-rhyme">Next</Link>
        </div>;
    }    
}
