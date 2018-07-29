import React, { Component } from "react";
import { LinkButton } from "../Utils/Buttons";
import "./Rules.scss";
import ArrowLeft from "../Utils/ArrowLeft";

export class Rules extends Component {
    render() {
        return <div>
            <ArrowLeft link='/input-players' />
            <p>Rules here</p>
            <ol>
                <li>Choose a word to ryhme </li>
                <li>A player's name is called and the device is quickly thrown to them</li>
                <li>The player then has 10 seconds to say a word that ryhmes </li>
                <li>If they cant,
They are Eliminated</li>
                <li>If they can,
Another Name is called and the phone is quickly thrown them  </li>
                <li>The game ends when only 1 player is remaining </li>

            </ol>
            <LinkButton to="ask-rhyme">Play</LinkButton>
        </div>;
    }
}
