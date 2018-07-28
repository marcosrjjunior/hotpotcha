import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SimplePlayerInput.scss";

export class SimplePlayerInput extends Component {
    constructor() {
        super();
        this.state = { inputValues: ["", ""] }
    }

    render() {
        return <div>
            {this.state.inputValues.map((value, i) =>
                <input key={i} type="text" value={value} onChange={e => this.updateInputValue(e.target.value, i)} />
            )}
            <Link to="rules" onClick={() => this.props.onPlayersAdded(this.nonEmptyInputValues)}>Rules</Link>
        </div>
    }

    updateInputValue(newValue, inputIndex) {
        this.state.inputValues[inputIndex] = newValue;
        this.setState({ inputValues: [...this.nonEmptyInputValues, ""] });
    }

    get nonEmptyInputValues() {
        return this.state.inputValues.filter(v => v);
    }
}
