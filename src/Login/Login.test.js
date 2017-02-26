/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Login from './Login';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Login />
  );

  expect(wrapper).toMatchSnapshot();
});
