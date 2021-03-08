import React from 'react';
import './Input.css'

export type InputProps = {
  id: string,
  label: string,
  name: string,
  placeholder: string,
  type?: string,
  helper?: string,
  args?: Record<string, unknown>
}

export const Input = ({id, helper, label, name, placeholder, type, ...args}: InputProps): JSX.Element => {
	return (
		<div className='input-container'>
			<label className="input-component" htmlFor={id}>
				{label}
				<input id={id} name={name} placeholder={placeholder} type={type ?? 'text'} {...args}/>
			</label>
			<p>{ helper }</p>
		</div>
	);
};
