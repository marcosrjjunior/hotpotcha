import React, { Component } from "react";
import "./SimplePlayerInput.scss";
import { Link } from "react-router-dom";

export class SimplePlayerInput extends Component {
    render() {
        return <div>
            <p id="title-text">Enter Player Names</p>
            <input type="text" placeholder="Enter Player One"/>
            <input type="text" placeholder="Enter Player Two"/>
            <input type="text" placeholder="Enter Player Two"/>
            <input type="text" placeholder="Enter Player Three"/>
            <input type="text" placeholder="Enter Player Four"/>
            <button type="button" className="button">
                <Link to="rules" >Confirm</Link>
            </button>
        </div>
    }
}