import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { afterThrown } from "../../services/motion";
import "./ThrowPhone.scss";

class ThrowPhone extends Component {
    render() {
        afterThrown(() => this.props.history.push("ask-rhyme"))
        return <div>
            <p>Throw the phone</p>
            <Link to="ask-rhyme">Ask Rhyme</Link> {/* allow manual navigation too */}
        </div>
    }
}

export default withRouter(ThrowPhone);
