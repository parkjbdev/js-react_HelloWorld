import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component/DefaultApp/App';
// import Game from './component/TicTacToe/TicTacToe';
import MovieApp from './component/MovieApp/MovieApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <MovieApp />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
