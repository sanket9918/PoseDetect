import { h, FunctionComponent } from 'preact';
import { Router, Route } from 'preact-router';

import Main from './main';
import Work from './work';

const App: FunctionComponent = () => {
	return (
		<div>
			<Router>
				<Route path='/' component={Main} />
				<Route path='/work' component={Work} />
			</Router>
		</div>
	)
}

export default App;
