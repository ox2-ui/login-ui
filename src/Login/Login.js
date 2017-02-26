import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Button from '@ox2/button/Button';
import TextField from '@ox2/material-ui/TextField';


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
  align-items: flex-end;
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
const Login = ({ logo, loggingIn, sendingCode, emailAccepted, codeSent, validCodeFormat, validEmailFormat, guestLoginEnabled, onEmailSubmit, emailValue, codeValue, onCodeUpdate, onLogin, onEmailUpdate, emailValidationError, loginValidationError, onReset, resendingCode, onResendCode, resendingCodeDone }) => (
  <Wrapper>
    <Header>
      <Logo src={logo} alt="logo" />
    </Header>
    <div>
      { do {
        if (loggingIn) {
          <Loader>Logging in...</Loader>;
        } else if (sendingCode) {
          <Loader>Sending code...</Loader>;
        } else if (emailAccepted && codeSent) {
          <div>
            <InputWrapper>
              <TextField
                id="loginCodeField"
                floatingLabelText="Access code"
                value={codeValue}
                onChange={onCodeUpdate}
                type="tel"
                maxLength="10"
                errorText={loginValidationError}
              />
              { validCodeFormat ?
                <Button
                  style={{marginLeft: '10px', marginBottom: '10px'}}
                  className="animation:fadeIn animation:1s"
                  btn="brand raised"
                  onClick={onLogin}
                >Login</Button> : (
                  <Button
                    style={{marginLeft: '10px', marginBottom: '10px'}}
                    btn="neutral-tint"
                    disabled={true}
                  >Login</Button>
                )
              }
            </InputWrapper>
            <Section2>
              <Title>Now check your email for the access code</Title>
              <Subtitle>(Please ensure to check your SPAM folder)</Subtitle>
              <Subtitle>Entered email: <b className="text-color:brand">{emailValue}</b></Subtitle>
              <FooterControls>
                { resendingCode ? (
                  <div>
                    {do {
                      if (resendingCodeDone) {
                        <InfoLabel className="text-color:action">Sent</InfoLabel>;
                      } else {
                        <InfoLabel className="text-color:positive">Sending</InfoLabel>;
                      }
                    }}
                  </div>) : (
                    <Button
                      onClick={onResendCode}
                      btn="neutral small outline raised"
                      style={{marginRight: '7px'}}
                    >Resend Code</Button>
                  )
                }
                <Button
                  onClick={onReset}
                  btn="neutral small outline raised"
                >Reset</Button>
              </FooterControls>
            </Section2>
          </div>;
        } else {
          <div>
            <InputWrapper>
              <TextField
                id="loginMailField"
                floatingLabelText="Login with your email"
                value={emailValue}
                onChange={onEmailUpdate}
                type="email"
                errorText={emailValidationError}
              />
              { validEmailFormat ?
                <Button
                  style={{marginLeft: '10px', marginBottom: '10px'}}
                  className="animation:fadeIn animation:1s"
                  btn="brand raised"
                  onClick={onEmailSubmit}
                >Next</Button> : (
                  <Button
                    style={{marginLeft: '10px', marginBottom: '10px'}}
                    btn="neutral-tint"
                    disabled={true}
                  >Next</Button>
                )
              }
            </InputWrapper>
            { guestLoginEnabled &&
              <Section>
                <Title>If you login anonymously, you won't be able to access the same account on another device.</Title>
                <Button btn="neutral small outline">Login anonymously</Button>
              </Section>
            }
          </div>;
        }
      }}
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
  onCodeUpdate: PropTypes.func.isRequired,
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
