import React from 'react';
import { storiesOf } from '@kadira/storybook';
import LoginContainer from './LoginContainer';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('LoginContainer', module)
  .add('default', () => (
    <LoginContainer />
  ));
