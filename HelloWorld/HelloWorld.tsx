import React = require("react");
import { HelloWorldModel } from "./HelloWorldModel";
import { observer } from "mobx-react"

@observer
export class HelloWorld extends React.Component<{ model: HelloWorldModel}>  {
    render() {
        return <>
            <div>Hello World!</div>
            <div>Count: {this.props.model.count}</div>
            <button onClick={() => this.props.model.events.increment()}>Increment</button>
        </>
    }
}
