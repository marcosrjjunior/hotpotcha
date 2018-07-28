import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as RootModule from "./Root";
import { RootModel } from './RootModel';

let Root = RootModule.Root;

let rootModel = new RootModel();

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    ReactDOM.render(
        <AppContainer>
            <Root model={rootModel} />
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./root', () => {
        Root = require<typeof RootModule>('./root').Root;
        renderApp();
    });
}
