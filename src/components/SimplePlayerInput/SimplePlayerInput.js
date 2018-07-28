import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SimplePlayerInput.scss";

export class SimplePlayerInput extends Component {
    constructor() {
        super();
        this.state = { inputValues: ["", ""] };
    }

    render() {
        return <div>
            {this.state.inputValues.map((value, i) =>
                <div>
                    <input key={i}
                        type="text"
                        value={value}
                        onChange={e => this.updateInputValue(e.target.value, i)}
                        placeholder={`Enter Player ${i + 1}`} />
                </div>
            )}
            <button type="button" className="button">
                <Link to="rules" onClick={() => this.props.onPlayersSet(this.nonEmptyInputValues)}>Confirm</Link>
            </button>
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
