import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './containers/App'
import store from './redux/store'

export default class ReduxTest extends React.Component{
	render(){
		return(
			<div className="App">
				<Provider store={store}>
					<App/>
				</Provider>
			</div>
		);
	}
}