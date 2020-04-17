import React from 'react';
import classes from './styles/App.module.scss';
import Search from './containers/Search';
import Results from './containers/Results';
import Pagination from './containers/Pagination';
import Cancel from './containers/Cancel';

const App = () => (
    <div className={classes.wrap}>
        <div className={classes.sidebar}>
            <Search/>
            <Cancel/>
        </div>
        <div className={classes.header}>
            <Pagination />
        </div>
        <div className={classes.work}>
            <div className={classes.work_content}>
                <Results/>
            </div>
        </div>
    </div>
);

export default App;
