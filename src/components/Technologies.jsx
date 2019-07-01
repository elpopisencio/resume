import React from 'react';

const Icon = ({ icon }) => (
	<span class="icon is-large">
		<i class={icon + ' fa-2x'}></i>
	</span>
);

const Technologies = () => (
	<section className="section">
		<div class="title is-4">Technologies</div>
		<Icon icon="fab fa-react" />
		<Icon icon="fab fa-js" />
		<Icon icon="fab fa-node" />
		<Icon icon="fab fa-css3-alt" />
		<Icon icon="fab fa-html5" />
		<Icon icon="fab fa-npm" />
		<Icon icon="fab fa-sass" />
	</section>
);

export default Technologies;
