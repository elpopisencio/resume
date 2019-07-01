import React from 'react';
import ContactMe from './components/ContactMe';
import Technologies from './components/Technologies';
import Summary from './components/Summary';
import './styles.css';

const App = () => {
	return (
		<div className="container">
			<div className="hero">
				<div className="hero-body">
					<h1 className="title">Jorge Luis Beroisa</h1>
					<h2 className="subtitle">Web Developer</h2>
				</div>
			</div>
			<div className="columns">
				<div className="column is-narrow">
					<ContactMe />
				</div>
				<div className="column">
					<Summary />
					<Technologies />
				</div>
			</div>
		</div>
	);
};

export default App;
