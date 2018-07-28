import * as React from "react";
import { Route, Router } from "react-router";
import { HelloWorld } from "../HelloWorld/HelloWorld";
import { createBrowserHistory } from "history";
import { RootModel } from "./RootModel";

const history = createBrowserHistory();

export class Root extends React.Component<{model: RootModel}> {
    render() {
        return <Router history={history}>
            <Route path="/" component={() => <HelloWorld model={this.props.model.helloWorldModel} />} />
        </Router>
    }
}