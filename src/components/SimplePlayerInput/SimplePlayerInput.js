import React, { Component } from "react";
import ArrowLeft from "../Utils/ArrowLeft";
import { LinkButton } from "../Utils/Buttons";
import { TextBox } from "../Utils/Inputs";
import { TitleText } from "../Utils/TitleText";
import "./SimplePlayerInput.scss";

export class SimplePlayerInput extends Component {
    constructor() {
        super();
        this.state = { inputValues: [""] };
    }

    render() {
        let validValues = this.nonEmptyValues(this.state.inputValues);

        return (
            <div className="SimplePlayerInput">
                <ArrowLeft link='/' />

                <TitleText className="title">Add Your Team Mates</TitleText>
                {this.state.inputValues.map((value, i) =>
                    <TextBox key={i}
                        value={value}
                        onChange={e => this.updateInputValue(e.target.value, i)}
                        placeholder={`Enter Player ${i + 1}`} />
                )}
                {validValues.length >= 2 &&
                    <LinkButton to="rules" onClick={() => this.props.onPlayersSet(validValues)}>Next</LinkButton>}
            </div>
        )
    }

    updateInputValue(newValue, inputIndex) {
        let inputValues = this.state.inputValues;
        inputValues[inputIndex] = newValue;
        this.setState({ inputValues: [...this.nonEmptyValues(inputValues), ""] });
    }

    nonEmptyValues(values) {
        return values.filter(v => v);
    }
}
