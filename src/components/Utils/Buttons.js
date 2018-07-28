import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Buttons.scss";

export class LinkButton extends Component {
    render() {
        let { to, children } = this.props;
        return <Button>
            <Link to={to}>{children}</Link>
        </Button>
    }
}

export class Button extends Component {
    render() {
        return <button type="button" className="button" {...this.props} />;
    }
}