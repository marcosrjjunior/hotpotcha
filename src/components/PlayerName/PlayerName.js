import React, { Component }from "react";
import { Link } from "react-router-dom";
import "./PlayerName.scss";

export class PlayerName extends Component {
    render() {
        return <div>
            <p>Player name: <input type="text" /></p>
            <Link to="/rules">Rules</Link>
        </div>;
    }
}
