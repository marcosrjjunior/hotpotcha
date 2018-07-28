import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PlayerName.scss";
import { TextBox } from "../Utils/Inputs";

export class PlayerName extends Component {
    render() {
        return <div>
            <p><TextBox placeholder="Player Name"/></p>
            <Link to="/rules">Rules</Link>
        </div>;
    }
}
