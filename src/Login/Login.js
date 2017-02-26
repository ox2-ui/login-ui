import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Button from '@ox2/button/Button';

const Wrapper = styled.div`
  padding: 25px 20px 10px;
  max-width: 320px;
  margin: 0 auto;
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
  margin-top: 20px;
  padding: 20px 0 0;
  text-align: center;
`;

const Section2 = styled.div`
  padding: 20px 0 0;
  text-align: center;
`;

const SectionTitle = styled.div`
  margin-top: 7px;
  margin-bottom: 5px;
  font-weight: 400;
  color: hsl(0, 0%, 30%);
  font-size: 15px;
`;

const SectionSubTitle = styled.div`
  margin-bottom: 7px;
  color: hsl(0, 0%, 55%);
  font-size: 15px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
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
const Login = ({ logo, loggingIn, sendingCode, emailAccepted, codeSent, validCodeFormat, validEmailFormat, guestLoginEnabled, onEmailSubmit, emailValue, codeValue, onCodeUpdate, onLogin, onEmailUpdate, emailValidationError, loginValidationError }) => (
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
            <input
              value={codeValue}
              onChange={onCodeUpdate}
              type="tel"
              maxLength="10"
            />
            <div>
              {loginValidationError}

            </div>
            { validCodeFormat ?
              <Button btn="brand raised" onClick={onLogin}>Login</Button> : (
                <Button btn="neutral-tint" disabled={true} >Login</Button>
              )
            }
            <Section2>
              <SectionTitle>Now check your email for the access code</SectionTitle>
              <SectionSubTitle>(Please ensure to check your SPAM folder)</SectionSubTitle>
              <SectionSubTitle>Entered email: <b className="text-color:brand">{'me@me.com'}</b></SectionSubTitle>
              <Button
                btn="neutral small outline"
                disabled={true}
                style={{marginRight: '7px'}}
              >Resending</Button>
              <Button
                btn="neutral small outline raised"
                style={{marginRight: '7px'}}
              >Resend Code</Button>
              <Button
                btn="neutral small outline raised"
              >Reset</Button>
            </Section2>
          </div>;
        } else {
          <div>
            <input
              value={emailValue}
              onChange={onEmailUpdate}
              type="email"
            />
            <div>
              {emailValidationError}
            </div>
            { validEmailFormat ?
              <Button btn="brand raised" onClick={onEmailSubmit}>Next</Button> : (
                <Button btn="neutral-tint" disabled={true}>Next</Button>
              )
            }
            { guestLoginEnabled &&
              <Section>
                <SectionTitle>If you login anonymously, you won't be able to access the same account on another device.</SectionTitle>
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
  sendingCode: PropTypes.bool.isRequired,
  validCodeFormat: PropTypes.bool.isRequired,
  validEmailFormat: PropTypes.bool.isRequired,
};

export default Login;
