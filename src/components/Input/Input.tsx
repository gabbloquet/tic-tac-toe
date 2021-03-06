import React from 'react';

type InputType = {
  id: string,
  label: string,
  name: string,
  placeholder: string,
  type: string,
  args: Record<string, unknown>
}

const Input = ({id, label, name, placeholder, type, ...args}: InputType): JSX.Element => {
	return (
		<label className="input-component" htmlFor={id}>
			{label}
			<input id={id} name={name} placeholder={placeholder} type={type ?? 'text'} {...args}/>
		</label>
	);
};

export default Input;
