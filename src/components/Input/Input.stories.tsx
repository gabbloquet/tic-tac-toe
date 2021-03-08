import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Classic = Template.bind({});
Classic.args = {
	id: '0',
	label: 'My wonderful label',
	name: 'myInput',
	placeholder: 'This is my placeholder',
};

export const WithHelper = Template.bind({});
WithHelper.args = {
	id: '0',
	label: 'My wonderful label',
	name: 'myInput',
	placeholder: 'This is my placeholder',
	helper: 'This is a helper'
};

export const WithNumberType = Template.bind({});
WithNumberType.args = {
	id: '0',
	label: 'My wonderful label',
	name: 'myInput',
	placeholder: 'This is my placeholder',
	type: 'number',
};


