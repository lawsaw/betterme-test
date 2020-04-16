import React from 'react';
import './styles/layout.scss';
import Search from './containers/Search';
import List from './components/List';
import Pagination from './components/Pagination';

const LIST_DEMO = [
    {
        title: 'demo_repo1',
        stars: 5,
    }, {
        title: 'demo_repo2',
        stars: 3,
    }, {
        title: 'demo_repo3',
        stars: 4,
    }, {
        title: 'demo_repo4',
        stars: 1,
    },
];

const App = () => (
    <div className="wrap">
        <div className="sidebar">
            <Search />
        </div>
        <div className="work">
            <Pagination pages={5}/>
            <List data={LIST_DEMO}/>
        </div>
    </div>
);

export default App;
