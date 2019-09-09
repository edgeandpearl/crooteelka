import * as React from 'react';
import queryString from 'query-string';
import SliderViewer from './components/sliderViewer';
import classes from './sliderPage.module.scss';

const Slider = () => {
    const {count} = queryString.parse(window.location.search);
    return (
        <div className={classes.SliderWrapper}>
            <SliderViewer/>
        </div>
    )
};

export default Slider;
