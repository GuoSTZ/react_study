import React from 'react';
import {Provider} from 'react-redux'

import App from './containers/index'
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