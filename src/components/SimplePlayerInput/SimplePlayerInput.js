import React, { Component } from "react";
import { TextBox } from "../Utils/Inputs";
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
                    <TextBox key={i}
                        value={value}
                        onChange={e => this.updateInputValue(e.target.value, i)}
                        placeholder={`Enter Player ${i + 1}`} />
                </div>
            )}
            <LinkButton to="rules" onClick={() => this.props.onPlayersSet(this.nonEmptyInputValues)}>Rules</LinkButton>
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
