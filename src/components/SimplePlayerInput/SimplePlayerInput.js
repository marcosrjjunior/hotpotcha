import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SimplePlayerInput.scss";
import { TextBox } from "../Utils/Inputs";

export class SimplePlayerInput extends Component {
    render() {
        return <div>
            <TextBox placeholder="Player Name" />
            <TextBox placeholder="Player Name" />
            <TextBox placeholder="Player Name" />
            <TextBox placeholder="Player Name" />
            <TextBox placeholder="Player Name" />
            <Link to="rules">Rules</Link>
        </div>
    }
}
