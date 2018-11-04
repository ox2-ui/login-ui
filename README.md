### Package is no longer maintaned.

# @ox2/login-ui
![NPM version](https://img.shields.io/badge/npm-private-orange.svg?style=flat)
<!-- ![NPM version](https://img.shields.io/npm/v/@ox2/login-ui.svg?style=flat) -->

Login ui component.


## Installation
Install using [npm](http://npmjs.com):
```sh
npm install @ox2/login-ui --save
```
Install using [yarn](http://yarnpkg.com):
```sh
yarn add @ox2/login-ui
```

## Usage
```js
import Login from '@ox2/login-ui/Login';

<Login
  loggingIn={false}
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

```

## Change Log
Changes are tracked in the [CHANGELOG.md](https://github.com/ox2/login-ui/blob/master/CHANGELOG.md)

## License
[MIT](https://github.com/ox2/login-ui/blob/master/LICENSE)
