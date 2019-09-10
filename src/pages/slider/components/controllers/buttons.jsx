import React from 'react';
import cx from 'classnames';
import classes from './controllers.module.scss';

const ControllerButtons = () => {
    return (
        <div className={classes.ControllerWrapper}>
            <div className={cx(classes.Button, classes.ButtonLarge)}>
                Add square
            </div>
            <div className={classes.ButtonLine}>
                <div className={classes.Button}>Prev</div>
                <div className={classes.Button}>Next</div>
            </div>
        </div>
    )
};

export default ControllerButtons;
