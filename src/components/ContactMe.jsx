import React from 'react';

const SocialLink = ({ href, icon, children }) => (
	<a className="button is-white" href={href}>
		<span class="icon">
			<i class={icon}></i>
		</span>
		<span>{children}</span>
	</a>
);

const ContactMe = () => (
	<section className="section">
		<div className="title is-4">Contact me</div>
		<ul>
			<li>
				<SocialLink href="mailto:jberoisa@gmail.com" icon="far fa-envelope">
					jberoisa@gmail.com
				</SocialLink>
			</li>
			<li>
				<SocialLink icon="fas fa-phone" href="tel:+542994184018">
					+54 299 4184018
				</SocialLink>
			</li>
			<li>
				<SocialLink
					icon="fab fa-linkedin-in"
					href="https://www.linkedin.com/in/jorge-luis-beroisa-8523b7141/"
				>
					/jorge-luis-beroisa
				</SocialLink>
			</li>
			<li>
				<SocialLink
					icon="fab fa-github"
					href="https://github.com/elpopisencio"
				>
					/elpopisencio
				</SocialLink>
			</li>
			<li>
				<SocialLink
					icon="fas fa-home"
					href="https://elpopisencio.github.io"
				>
					elpopisencio.github.io
				</SocialLink>
			</li>
			<li>
				<SocialLink
					icon="fab fa-twitter"
					href="https://twitter.com/elpopisencio"
				>
					@elpopisencio
				</SocialLink>
			</li>
		</ul>
	</section>
);

export default ContactMe;
