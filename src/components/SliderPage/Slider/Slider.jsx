import React from 'react';
import './Slider.module.css';
import Slide from "./Slide/Slide";

const Slider = (props) => {
    console.log(props.children[0].className);
    return (
        <div>
            <Slide />
        </div>
    );
};

export default Slider;