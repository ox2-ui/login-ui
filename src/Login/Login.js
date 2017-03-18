import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Button from '@ox2/button/Button';
import TextField from '@ox2/material-ui/TextField';
import { neutral_dark } from '@ox2/colors';

const styles = {
  underline: {
    borderColor: neutral_dark,
  },
  labelFocus: {
    color: neutral_dark,
  },
};

const Wrapper = styled.div`
  padding: 25px 20px 10px;
  max-width: 320px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: Roboto Condensed, sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  user-select: none;
`;

const Section = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const Section2 = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 7px;
  margin-bottom: 5px;
  font-weight: 400;
  color: hsl(0, 0%, 30%);
  font-size: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Subtitle = styled.div`
  margin-bottom: 7px;
  color: hsl(0, 0%, 55%);
  font-size: 15px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const FooterControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const InfoLabel = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

const Loader = styled.div`
  text-align: center;
  user-select: none;
  font-family: 'Roboto';
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 40px;
  color: '#ABABAB';
  cursor: default;
`;

/**
 * Login Component
 */
const Login = (
  {
    logo,
    loggingIn,
    sendingCode,
    emailAccepted,
    codeSent,
    validCodeFormat,
    validEmailFormat,
    guestLoginEnabled,
    onEmailSubmit,
    emailValue,
    codeValue,
    onCodeUpdate,
    onLogin,
    onEmailUpdate,
    emailValidationError,
    loginValidationError,
    onReset,
    resendingCode,
    onResendCode,
    resendingCodeDone,
    onCodeEnterKeyPress,
    onEmailEnterKeyPress,
  },
) => (
  <Wrapper>
    <Header>
      <Logo alt="logo" src={logo} />
    </Header>
    <div>
      {
        do {
          if (loggingIn) {
            <Loader>Logging in...</Loader>;
          } else if (sendingCode) {
            <Loader>Sending code...</Loader>;
          } else if (emailAccepted && codeSent) {
            <div>
              <TextField
                autoFocus={true}
                errorText={loginValidationError}
                floatingLabelFocusStyle={styles.labelFocus}
                floatingLabelText="Access code"
                id="loginCodeField"
                maxLength="10"
                onChange={onCodeUpdate}
                onKeyPress={onCodeEnterKeyPress}
                type="tel"
                underlineFocusStyle={styles.underline}
                value={codeValue}
              />
              <InputWrapper>
                {validCodeFormat
                  ? <Button
                      btn="brand raised"
                      className="animation:fadeIn animation:1s"
                      onClick={onLogin}
                      style={{ marginLeft: '10px', marginBottom: '10px' }}
                    >
                      Enter
                    </Button>
                  : <Button
                      btn="neutral-tint"
                      disabled={true}
                      style={{ marginLeft: '10px', marginBottom: '10px' }}
                    >
                      Enter
                    </Button>}
              </InputWrapper>
              <Section2>
                <Title>Now check your email for the access code</Title>
                <Subtitle>(Please ensure to check your SPAM folder)</Subtitle>
                <Subtitle>
                  Entered email:
                  {' '}
                  <b className="text-color:brand">{emailValue}</b>
                </Subtitle>
                <FooterControls>
                  {resendingCode
                    ? <div>
                        {
                          do {
                            if (resendingCodeDone) {
                              <InfoLabel className="text-color:action">
                                Sent
                              </InfoLabel>;
                            } else {
                              <InfoLabel className="text-color:positive">
                                Sending
                              </InfoLabel>;
                            }
                          }
                        }
                      </div>
                    : <Button
                        btn="neutral small outline raised"
                        onClick={onResendCode}
                        style={{ marginRight: '7px' }}
                      >
                        Resend Code
                      </Button>}
                  <Button btn="neutral small outline raised" onClick={onReset}>
                    Reset
                  </Button>
                </FooterControls>
              </Section2>
            </div>;
          } else {
            <div>
              <TextField
                autoFocus={true}
                errorText={emailValidationError}
                floatingLabelFocusStyle={styles.labelFocus}
                floatingLabelText="Login with your email"
                id="loginMailField"
                onChange={onEmailUpdate}
                onKeyPress={onEmailEnterKeyPress}
                type="email"
                underlineFocusStyle={styles.underline}
                value={emailValue}
              />
              <InputWrapper>
                {validEmailFormat
                  ? <Button
                      btn="brand raised"
                      className="animation:fadeIn animation:1s"
                      onClick={onEmailSubmit}
                      style={{ marginLeft: '10px', marginBottom: '10px' }}
                    >
                      Enter
                    </Button>
                  : <Button
                      btn="neutral-tint"
                      disabled={true}
                      style={{ marginLeft: '10px', marginBottom: '10px' }}
                    >
                      Enter
                    </Button>}
              </InputWrapper>
              {guestLoginEnabled &&
                <Section>
                  <Title>
                    If you login anonymously, you won't be able to access the same account on another device.
                  </Title>
                  <Button btn="neutral small outline">Login anonymously</Button>
                </Section>}
            </div>;
          }
        }
      }
    </div>
  </Wrapper>
);

Login.propTypes = {
  codeSent: PropTypes.bool.isRequired,
  codeValue: PropTypes.string.isRequired,
  emailAccepted: PropTypes.bool.isRequired,
  emailValidationError: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  guestLoginEnabled: PropTypes.bool.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  loginValidationError: PropTypes.string.isRequired,
  logo: PropTypes.string,
  onCodeEnterKeyPress: PropTypes.func.isRequired,
  onCodeUpdate: PropTypes.func.isRequired,
  onEmailEnterKeyPress: PropTypes.func.isRequired,
  onEmailSubmit: PropTypes.func.isRequired,
  onEmailUpdate: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onResendCode: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  resendingCode: PropTypes.bool.isRequired,
  resendingCodeDone: PropTypes.bool.isRequired,
  sendingCode: PropTypes.bool.isRequired,
  validCodeFormat: PropTypes.bool.isRequired,
  validEmailFormat: PropTypes.bool.isRequired,
};

export default Login;
