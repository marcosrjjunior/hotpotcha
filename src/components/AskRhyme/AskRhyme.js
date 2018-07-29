import React, { Component } from "react";
import { LinkButton } from "../Utils/Buttons";
import { TextBox } from "../Utils/Inputs";
import { TitleText } from "../Utils/TitleText";
import "./AskRhyme.scss";

export default class AskRhyme extends Component {
    constructor() {
        super();
        this.state = { textBoxValue: "" };
    }

    updateRhyme(textBoxValue) {
        this.setState({ textBoxValue });
    }

    render() {
        return <div>
            <TitleText>Choose a Word to Rhyme</TitleText>
            <TextBox onChange={e => this.updateRhyme(e.target.value)} />
            <LinkButton to="game-start" onClick={() => this.props.onRhymeSet(this.state.textBoxValue)}>Begin</LinkButton>
        </div>
    }
}
