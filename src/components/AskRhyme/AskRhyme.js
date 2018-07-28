import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./AskRhyme.scss";

class AskRhyme extends Component {
    constructor(props) {
        super(props);
        this.state = {ryhme: null};

        this.handleChange = this.handleChange.bind(this);
    }

	handleChange(event) {
		this.setState({ryhme: event.target.value});
	}

	selectRhyme() {
        this.props.updateState('ryhme', this.state.ryhme);
        this.props.history.push('game-start');
	}

    render() {
        return <div>
            <p id ="title=text">Choose a Word to Ryhme</p>

            <input name="ryhme" onChange={this.handleChange} />

            <button onClick={() => this.selectRhyme()}>Begin</button>
        </div>
    }
}

export default withRouter(AskRhyme);
