import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Login from './Login';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('Login', module)
  .add('landing', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('landing with guest', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={true}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('valid email', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmailFormat={true}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('not authorized', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmailFormat={true}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={'Email not authorized'}
      loginValidationError={''}
    />
  ))
  .add('sending code', () => (
    <Login
      loggingIn={false}
      sendingCode={true}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('enter code', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('valid code format', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      validCodeFormat={true}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={'33221'}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('incorrect code', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      validCodeFormat={true}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={'33221'}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={'Incorrect code'}
    />
  ))
  .add('logging in', () => (
    <Login
      loggingIn={true}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ));
