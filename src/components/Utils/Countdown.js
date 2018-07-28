import React, { Component } from "react";
import './Countdown.scss';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 10};
    }

    componentDidMount() {
        this.countId = setInterval(
            () => this.decrease(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.countId);
    }

    decrease() {
        this.setState({
            count: this.state.count -1
        }, () => {
            if (this.state.count === 0) {
                return this.props.end();
            }

            if (this.state.count <= 3) {
                navigator.vibrate([900, 100]);
            }
        })
    }

    render() {
        return (
            <div className="timer">
                <div className="circle-timer">
                    <div className="timer-slot">
                        <div className="timer-lt"></div>
                    </div>
                    <div className="timer-slot">
                        <div className="timer-rt"></div>
                    </div>

                    <div className="count">{this.state.count}</div>
                </div>
            </div>
        )
    }
}

export default Countdown;
