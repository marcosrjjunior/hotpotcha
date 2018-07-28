import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GameStart.scss";

export class GameStart extends Component {
    render() {
        return <div>
            <p>Start game!</p>
            <Link to="throw-phone">Throw phone</Link>
        </div>
    }
}
