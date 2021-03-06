import React from 'react';
import RegistrationForm from './RegistrationForm';

const Home = (): JSX.Element => {

	return (
		<div className='home'>
			<h1>Bienvenue dans Tic tac toe</h1>
			<RegistrationForm />
		</div>
	);
};

export default Home;
