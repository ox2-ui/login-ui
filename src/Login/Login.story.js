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
      validEmail={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}
    />
  ))
  .add('landing with guest', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmail={false}
      guestLoginEnabled={true}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}

    />
  ))
  .add('valid email', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmail={true}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={'info@some.io'}

    />
  ))
  .add('sending code', () => (
    <Login
      loggingIn={false}
      sendingCode={true}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmail={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}

    />
  ))
  .add('enter code', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      validCodeFormat={false}
      validEmail={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}

    />
  ))
  .add('valid code', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      validCodeFormat={true}
      validEmail={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={'33221'}
      emailValue={''}

    />
  ))
  .add('logging in', () => (
    <Login
      loggingIn={true}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      validCodeFormat={false}
      validEmail={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      codeValue={''}
      emailValue={''}

    />
  ));
