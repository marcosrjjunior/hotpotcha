import React, { Component } from "react";
import "./Inputs.scss";

export class TextBox extends Component {
    render() {
        return <div>
            <input type="text" className="textBox" {...this.props} />
        </div>
    }
}
