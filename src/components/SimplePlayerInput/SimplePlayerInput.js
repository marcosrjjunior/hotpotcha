import React, { Component } from "react";
import { LinkButton } from "../Utils/Buttons";
import { TextBox } from "../Utils/Inputs";
import "./SimplePlayerInput.scss";
import { TitleText } from "../Utils/TitleText";

export class SimplePlayerInput extends Component {
    constructor() {
        super();
        this.state = { inputValues: [""] };
    }

    render() {
        let nextButton = '';
        if (this.state.inputValues.length > 2) {
            nextButton = <LinkButton to="rules" 
                    onClick={() => this.props.onPlayersSet(this.nonEmptyInputValues)}>Next</LinkButton>;
        }

        return (
            <div className="SimplePlayerInput">
                <TitleText className="title">Add Your Team Mates</TitleText>
                {this.state.inputValues.map((value, i) =>
                    <TextBox key={i}
                        value={value}
                        onChange={e => this.updateInputValue(e.target.value, i)}
                        placeholder={`Enter Player ${i + 1}`} />
                )}
                {nextButton}
                
            </div>
        )
    }

    updateInputValue(newValue, inputIndex) {
        let inputValues = this.state.inputValues;
        inputValues[inputIndex] = newValue;
        this.setState({ inputValues: [...inputValues] }); 

        let lastItemKey = inputValues.length-1;
        let lastItem = inputValues[lastItemKey];

        if (lastItem.length > 0) {
            this.setState({
                inputValues: [...inputValues, ""]
            }, () => {
                if (lastItem.length > 0) {
                    this.setState({ inputValues: [...inputValues, ""] });
                }
            })
        }
    }

    get nonEmptyInputValues() {
        return this.state.inputValues.filter(v => v);
    }
}
