import * as React from "react";
import { Route, Router } from "react-router";
import { HelloWorld } from "../HelloWorld/HelloWorld";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export class Root extends React.Component {
    render() {
        return <Router history={history}>
            <Route path="/" component={HelloWorld} />
        </Router>
    }
}