/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import LoginContainer from './LoginContainer';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <LoginContainer />
  );

  expect(wrapper).toMatchSnapshot();
});
