import React from 'react';
import classes from './controllers.module.scss';
import ControllerFields from './fields';
import ControllerButtons from './buttons';

const Controllers = () => {
    return (
        <div className={classes.Wrapper}>
            <ControllerFields />
            <ControllerButtons/>
        </div>
    )
};

export default Controllers;
