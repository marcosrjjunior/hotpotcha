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
        let { textBoxValue } = this.state;

        return <div>
            <TitleText>Choose a Word to Rhyme</TitleText>
            <TextBox onChange={e => this.updateRhyme(e.target.value)} />
            {textBoxValue.length > 1 &&
                <LinkButton to="throw-phone" onClick={() => this.props.onRhymeSet(textBoxValue)}>Begin</LinkButton>}
        </div>
    }
}
