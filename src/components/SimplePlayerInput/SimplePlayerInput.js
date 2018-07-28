import React, { Component } from "react";
import "./SimplePlayerInput.scss";
import { Link } from "react-router-dom";

export class SimplePlayerInput extends Component {
    render() {
        return <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <Link to="rules">Rules</Link>
        </div>
    }
}