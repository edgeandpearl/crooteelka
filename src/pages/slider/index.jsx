import * as React from 'react';
import queryString from 'query-string';
import SliderViewer from './components/sliderViewer';
import Controllers from './components/controllers';
import classes from './sliderPage.module.scss';

const SliderPage = () => {
    const {count} = queryString.parse(window.location.search);
    return (
        <div className={classes.SliderPageWrapper}>
            <div className={classes.SliderContentWrapper}>
                <SliderViewer count={count}/>
                <Controllers />
            </div>
        </div>
    )
};

export default SliderPage;
