import React, { Component } from "react";
import { LinkButton } from "../Utils/Buttons";
import { TextBox } from "../Utils/Inputs";
import "./AskRhyme.scss";

export default class AskRhyme extends Component {
    constructor() {
        super();
        this.state = { ryhme: "" };
    }

    updateRhyme(rhyme) {
        this.setState({ rhyme });
    }

    render() {
        return <div>
            <p id ="title=text">Choose a Word to Rhyme</p>
            <TextBox onChange={e => this.updateRhyme(e.target.value)} />
            <LinkButton to="game-start" onClick={() => this.props.onRhymeSet(this.state.rhyme)}>Begin</LinkButton>
        </div>
    }
}
