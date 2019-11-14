import React from 'react';
import './SliderPage.module.css';
import Slider from "./Slider/Slider";
import Slide from "./Slider/Slide/Slide";

const SliderPage = () => {
    return (
        <div>
            <Slider>
                <Slide />
                <Slide />
                <Slide />
            </Slider>
        </div>
    );
};

export default SliderPage;