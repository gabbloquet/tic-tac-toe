import React from 'react';
import {useForm} from 'react-hook-form';

type RegistrationFormType = {
  userOneUsername: string,
  userTwoUsername: string,
};

const RegistrationForm = (): JSX.Element => {

	const { register, handleSubmit, errors } = useForm<RegistrationFormType>();
	const onSubmit = (data: RegistrationFormType) => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name="userOneUsername" data-cy='userOneUsername' placeholder='username' ref={register({ required: true })} />
			{errors.userOneUsername && <span>Veuillez entrer le username du premier joueur</span>}

			<input name="userTwoUsername" data-cy='userTwoUsername' placeholder='username' ref={register({ required: true })} />
			{errors.userTwoUsername && <span>Veuillez entrer le username du second joueur</span>}

			<button type="submit">Ok</button>
		</form>
	);
};

export default RegistrationForm;
