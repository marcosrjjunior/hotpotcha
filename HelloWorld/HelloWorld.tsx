import React = require("react");

export class HelloWorld extends React.Component<{}, { model: HelloWorldModel }> {
    constructor(props: {}) {
        super(props);
        this.state = { model: new HelloWorldModel() };
    }

    render() {
        return <>
            <div>Hello world</div>
            <div>Count: {this.state.model.count}</div>
            <button onClick={() => this.setState({ model: { count: ++this.state.model.count } })}>Increment</button>
        </>
    }
}

class HelloWorldModel {
    count = 1;
}
