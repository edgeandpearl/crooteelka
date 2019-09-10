import React from 'react';
import cx from 'classnames';
import classes from './controllers.module.scss';

const ControllerFields = () => {
    return (
        <div className={classes.ControllerWrapper}>
            <input type="text" className={classes.Input} placeholder="Size"/>
            <div className={classes.InputWithMeasure}>
                <input type="text" className={cx(classes.Input)} placeholder="Corner radius"/>
            </div>
        </div>
    )
};

export default ControllerFields;
