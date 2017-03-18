import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Theme from '@ox2/theme-wrapper/Theme';
import Login from './Login';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('Login', module)
  .addDecorator(getStory => (
    <Theme>
      {getStory()}
    </Theme>
  ))
  .add('landing', () => (
    <Login
      codeSent={false}
      codeValue={''}
      emailAccepted={false}
      emailValidationError={''}
      emailValue={''}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={false}
    />
  ))
  .add('valid email', () => (
    <Login
      codeSent={false}
      codeValue={''}
      emailAccepted={false}
      emailValidationError={''}
      emailValue={'info@some.io'}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={true}
    />
  ))
  .add('not authorized', () => (
    <Login
      codeSent={false}
      codeValue={''}
      emailAccepted={false}
      emailValidationError={'Email not authorized'}
      emailValue={'info@some.io'}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={true}
    />
  ))
  .add('landing with guest', () => (
    <Login
      codeSent={false}
      codeValue={''}
      emailAccepted={false}
      emailValidationError={''}
      emailValue={''}
      guestLoginEnabled={true}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={false}
    />
  ))
  .add('valid email with guest', () => (
    <Login
      codeSent={false}
      codeValue={''}
      emailAccepted={false}
      emailValidationError={''}
      emailValue={'info@some.io'}
      guestLoginEnabled={true}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={true}
    />
  ))
  .add('not authorized with guest', () => (
    <Login
      codeSent={false}
      codeValue={''}
      emailAccepted={false}
      emailValidationError={'Email not authorized'}
      emailValue={'info@some.io'}
      guestLoginEnabled={true}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={true}
    />
  ))
  .add('sending code', () => (
    <Login
      codeSent={false}
      codeValue={''}
      emailAccepted={false}
      emailValidationError={''}
      emailValue={''}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={true}
      validCodeFormat={false}
      validEmailFormat={false}
    />
  ))
  .add('enter code', () => (
    <Login
      codeSent={true}
      codeValue={''}
      emailAccepted={true}
      emailValidationError={''}
      emailValue={'info@some.io'}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={false}
    />
  ))
  .add('resending code', () => (
    <Login
      codeSent={true}
      codeValue={''}
      emailAccepted={true}
      emailValidationError={''}
      emailValue={'info@some.io'}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={true}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={false}
    />
  ))
  .add('resending code done', () => (
    <Login
      codeSent={true}
      codeValue={''}
      emailAccepted={true}
      emailValidationError={''}
      emailValue={'info@some.io'}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={true}
      resendingCodeDone={true}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={false}
    />
  ))
  .add('valid code format', () => (
    <Login
      codeSent={true}
      codeValue={'33221'}
      emailAccepted={true}
      emailValidationError={''}
      emailValue={'info@some.io'}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={true}
      validEmailFormat={false}
    />
  ))
  .add('incorrect code', () => (
    <Login
      codeSent={true}
      codeValue={'33221'}
      emailAccepted={true}
      emailValidationError={''}
      emailValue={'info@some.io'}
      guestLoginEnabled={false}
      loggingIn={false}
      loginValidationError={'Incorrect code'}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={true}
      validEmailFormat={false}
    />
  ))
  .add('logging in', () => (
    <Login
      codeSent={false}
      codeValue={''}
      emailAccepted={false}
      emailValidationError={''}
      emailValue={''}
      guestLoginEnabled={false}
      loggingIn={true}
      loginValidationError={''}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onCodeEnterKeyPress={handler}
      onCodeUpdate={handler}
      onEmailEnterKeyPress={handler}
      onEmailSubmit={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onResendCode={handler}
      onReset={handler}
      resendingCode={false}
      resendingCodeDone={false}
      sendingCode={false}
      validCodeFormat={false}
      validEmailFormat={false}
    />
  ));
