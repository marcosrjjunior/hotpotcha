import React, { Component } from "react";
import "./Inputs.scss";

export class TextBox extends Component {
    render() {
        return <div>
            <input type="text" className="text-box" {...this.props} />
        </div>
    }
}
