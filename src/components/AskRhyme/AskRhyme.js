import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AskRhyme.scss";

export class AskRhyme extends Component {
    render() {
        return <div>
            <p>What rhymes with Cat</p>
            <Link to="check-rhyme">Check</Link>
        </div>
    }
}
