import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Buttons.css";

class LinkButtonComponent extends Component {
    render() {
        return <Button onClick={() => this.onClickHandler()}>{this.props.children}</Button>;
    }

    onClickHandler() {
        let { to, onClick } = this.props;
        onClick && onClick();
        this.props.history.push(to);
    }
}

export const LinkButton = withRouter(LinkButtonComponent);

export class Button extends Component {
    render() {
        return <button type="button" className="button" {...this.props} />;
    }
}