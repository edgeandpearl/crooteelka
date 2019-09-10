import React from 'react';
import classes from './sliderViewer.module.scss';

const Square = ({index}) => {
    return (
        <div className={classes.Square}>
            {index}
        </div>
    )
};

export default Square;
