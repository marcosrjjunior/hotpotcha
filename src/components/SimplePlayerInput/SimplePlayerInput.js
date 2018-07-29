import React, { Component } from "react";
import { LinkButton } from "../Utils/Buttons";
import { TextBox } from "../Utils/Inputs";
import "./SimplePlayerInput.scss";
import { TitleText } from "../Utils/TitleText";

export class SimplePlayerInput extends Component {
    constructor() {
        super();
        this.state = { inputValues: ["", ""] };
    }

    render() {
        return <div>
            <TitleText>Add Your Team Mates</TitleText>
            {this.state.inputValues.map((value, i) =>
                <TextBox key={i}
                    value={value}
                    onChange={e => this.updateInputValue(e.target.value, i)}
                    placeholder={`Enter Player ${i + 1}`} />
            )}
            <LinkButton to="rules" onClick={() => this.props.onPlayersSet(this.nonEmptyInputValues)}>Rules</LinkButton>
        </div>
    }

    updateInputValue(newValue, inputIndex) {
        let inputValues = this.state.inputValues;
        inputValues[inputIndex] = newValue;
        this.setState({ inputValues: [...inputValues, ""] });
    }

    get nonEmptyInputValues() {
        return this.state.inputValues.filter(v => v);
    }
}
