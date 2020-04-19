import React from 'react';
import classes from './styles/App.module.scss';
import Search from './containers/Search';
import Results from './containers/Results';
import Pagination from './containers/Pagination';
import Cancel from './containers/Cancel';
import Log from './containers/Log';

const App = () => (
    <div className={classes.wrap}>
        <div className={classes.form}>
            {
                [<Search/>, <Cancel/>].map((component, index) => (
                    <div key={index} className={classes.form_item}>{component}</div>
                ))
            }
        </div>
        <div className={classes.log}>
            <div className={classes.log_content}>
                <Log/>
            </div>
        </div>
        <div className={classes.work}>
            <div className={classes.work_content}>
                <Results/>
            </div>
        </div>
        <div className={classes.pagination}>
            <Pagination/>
        </div>
    </div>
);

export default App;
