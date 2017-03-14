/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Material UI
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const handler = () => true;

it('renders valid email with guest', () => {
  const wrapper = mount(
    <MuiThemeProvider>
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
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders valid code format', () => {
  const wrapper = mount(
    <MuiThemeProvider>
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
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders sending code', () => {
  const wrapper = mount(
    <MuiThemeProvider>
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
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders logging in', () => {
  const wrapper = mount(
    <MuiThemeProvider>
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
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
