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
        loggingIn={false}
        sendingCode={false}
        emailAccepted={false}
        codeSent={false}
        resendingCode={false}
        resendingCodeDone={false}
        validCodeFormat={false}
        validEmailFormat={true}
        guestLoginEnabled={true}
        logo={'http://i.imgur.com/aNF7yFO.gif'}
        onEmailSubmit={handler}
        onCodeUpdate={handler}
        onEmailUpdate={handler}
        onLogin={handler}
        onReset={handler}
        onResendCode={handler}
        onCodeEnterKeyPress={handler}
        onEmailEnterKeyPress={handler}
        codeValue={''}
        emailValue={'info@some.io'}
        emailValidationError={''}
        loginValidationError={''}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders valid code format', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <Login
        loggingIn={false}
        sendingCode={false}
        emailAccepted={true}
        codeSent={true}
        resendingCode={false}
        resendingCodeDone={false}
        validCodeFormat={true}
        validEmailFormat={false}
        guestLoginEnabled={false}
        logo={'http://i.imgur.com/aNF7yFO.gif'}
        onEmailSubmit={handler}
        onCodeUpdate={handler}
        onEmailUpdate={handler}
        onLogin={handler}
        onReset={handler}
        onResendCode={handler}
        onCodeEnterKeyPress={handler}
        onEmailEnterKeyPress={handler}
        codeValue={'33221'}
        emailValue={'info@some.io'}
        emailValidationError={''}
        loginValidationError={''}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders sending code', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <Login
        loggingIn={false}
        sendingCode={true}
        emailAccepted={false}
        codeSent={false}
        resendingCode={false}
        resendingCodeDone={false}
        validCodeFormat={false}
        validEmailFormat={false}
        guestLoginEnabled={false}
        logo={'http://i.imgur.com/aNF7yFO.gif'}
        onEmailSubmit={handler}
        onCodeUpdate={handler}
        onEmailUpdate={handler}
        onLogin={handler}
        onReset={handler}
        onResendCode={handler}
        onCodeEnterKeyPress={handler}
        onEmailEnterKeyPress={handler}
        codeValue={''}
        emailValue={''}
        emailValidationError={''}
        loginValidationError={''}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders logging in', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <Login
        loggingIn={true}
        sendingCode={false}
        emailAccepted={false}
        codeSent={false}
        resendingCode={false}
        resendingCodeDone={false}
        validCodeFormat={false}
        validEmailFormat={false}
        guestLoginEnabled={false}
        logo={'http://i.imgur.com/aNF7yFO.gif'}
        onEmailSubmit={handler}
        onCodeUpdate={handler}
        onEmailUpdate={handler}
        onLogin={handler}
        onReset={handler}
        onResendCode={handler}
        onCodeEnterKeyPress={handler}
        onEmailEnterKeyPress={handler}
        codeValue={''}
        emailValue={''}
        emailValidationError={''}
        loginValidationError={''}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
