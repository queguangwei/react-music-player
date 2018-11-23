import React, { render } from 'react';
import Header from './components/header';
import Player from './pages/player';

let Root = React.createClass({
	render() {
		return (
			<Header />
			<Player />
		);
	}
});

export default Root;