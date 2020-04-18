import React from 'react';
import classes from './styles/App.module.scss';
import Search from './containers/Search';
import Results from './containers/Results';
import Pagination from './containers/Pagination';
import Cancel from './containers/Cancel';
import ErrorLog from './containers/Log';

const App = () => (
    <div className={classes.wrap}>
        <div className={classes.sidebar}>
            {
                [<Search/>, <Cancel/>].map((component, index) => (
                    <div key={index} className={classes.sidebar_item}>{component}</div>
                ))
            }
            <ErrorLog />
        </div>
        <div className={classes.work}>
            <div className={classes.work_content}>
                <Results/>
            </div>
        </div>
        <div className={classes.footer}>
            <Pagination />
        </div>
    </div>
);

export default App;
