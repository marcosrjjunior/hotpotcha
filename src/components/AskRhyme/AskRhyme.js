import React, { Component } from "react";
import { LinkButton } from "../Utils/Buttons";
import { TextBox } from "../Utils/Inputs";
import { TitleText } from "../Utils/TitleText";
import "./AskRhyme.scss";
import ArrowLeft from "../Utils/ArrowLeft";

export default class AskRhyme extends Component {
    constructor() {
        super();
        this.state = { textBoxValue: "" };
    }

    updateRhyme(textBoxValue) {
        this.setState({ textBoxValue });
    }

    render() {
        let nextButton = '';
        if (this.state.textBoxValue.length > 1) {
            nextButton = <LinkButton to="game-start" 
            onClick={() => this.props.onRhymeSet(this.state.textBoxValue)}>Begin</LinkButton>;
        }

        return (
            <div>
                <ArrowLeft link='/rules' />
                <TitleText>Choose a Word to Rhyme</TitleText>
                <TextBox onChange={e => this.updateRhyme(e.target.value)} />
                {nextButton}
            </div>
        )
    }
}
