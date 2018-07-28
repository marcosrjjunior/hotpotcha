import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "../Utils/Buttons";
import { TextBox } from "../Utils/Inputs";
import "./AskRhyme.scss";

class AskRhyme extends Component {
    constructor(props) {
        super(props);
        this.state = { ryhme: null };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ ryhme: event.target.value });
    }

    selectRhyme() {
        this.props.updateState('ryhme', this.state.ryhme);
        this.props.history.push('game-start');
    }

    render() {
        return <div>
            <p>Choose a Word to Ryhme</p>

            <TextBox name="ryhme" onChange={this.handleChange} />

            <Button onClick={() => this.selectRhyme()}>Begin</Button>
        </div>
    }
}

export default withRouter(AskRhyme);
