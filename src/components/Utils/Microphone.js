import React, { Component } from "react";
import "./Microphone.scss";
import microphone from "../../images/microphone.svg"

export class Microphone extends Component {
    render() {
        return <img onContextMenu={e => e.preventDefault()} src={microphone} className="microphone-logo" alt="microphone" />
    }
}