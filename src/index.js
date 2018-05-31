import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserProfile from './profile/UserProfile'
import NewsFeed from './newsfeed/newsfeed'

// ReactDOM.render(<UserProfile userId="1"/>, document.getElementById('root'));
ReactDOM.render(<NewsFeed/>, document.getElementById('root'));
registerServiceWorker();
