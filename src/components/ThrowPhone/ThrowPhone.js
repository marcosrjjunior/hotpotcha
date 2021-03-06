import React, { Component } from "react";
import { afterThrown } from "../../services/motion";
import "./ThrowPhone.css";
import { LinkButton } from "../Utils/Buttons";
import { withRouter } from "react-router-dom";

class ThrowPhone extends Component {
    constructor() {
        super();
        this.state = { showSkip: false };
        setTimeout(() => this.setState({ showSkip: true }), 3000);
    }

    render() {
        afterThrown(() => setTimeout(() => this.props.history.push("game-start"), 2000))
        return <div>
            <p>Throw the phone to {this.props.currentPlayer}</p>
            {this.state.showSkip && <LinkButton to="game-start">Skip</LinkButton>}
        </div>
    }
}

export default withRouter(ThrowPhone);
