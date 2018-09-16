import React from 'react';
import './ArrowLeft.css';
import { Link } from "react-router-dom";

const ArrowLeft = (props) => (
    <div className="ArrowLeft">
        <Link to={props.link}> &lt; </Link>
    </div>
);

export default ArrowLeft;