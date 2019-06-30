import React from 'react';
import ContactMe from './components/ContactMe';

const App = () => {
	return (
		<div className="container">
			<div className="hero">
				<div className="hero-body">
					<h1 className="title">Jorge Luis Beroisa</h1>
					<h2 className="subtitle">Web Developer</h2>
				</div>
			</div>
			<ContactMe />
		</div>
	);
};

export default App;
