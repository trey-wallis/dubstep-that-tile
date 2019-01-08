/*
* React imports
*/
import React from 'react';
import ReactDOM from 'react-dom';

/*
* Css imports
*/
import './index.css';

/*
* Component imports
*/
import App from './react/App';
import AppProvider from './react/AppProvider';

/*
* Custom NPM package images
*/
import 'tachyons'

import * as serviceWorker from './serviceWorker';

//The AppProvider uses the React context API to make sure that the store props can be
//access by all components downstream
ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
