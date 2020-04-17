import React from 'react';
import classes from './styles/App.module.scss';
import Search from './containers/Search';
import Results from './containers/Results';
import Pagination from './components/Pagination';

const App = () => (
    <div className={classes.wrap}>
        <div className={classes.sidebar}>
            <Search/>
        </div>
        <div className={classes.header}>
            <Pagination pages={5}/>
        </div>
        <div className={classes.work}>
            <div className={classes.work_content}>
                <Results/>
            </div>
        </div>
    </div>
);

export default App;
