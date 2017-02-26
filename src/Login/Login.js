import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px 20px 10px;
  max-width: 320px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  user-select: none;
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
const Login = ({ logo, loggingIn, sendingCode, emailAccepted, codeSent, validCodeFormat, validEmail, guestLoginEnabled, onEmailSubmit, emailValue, codeValue, onCodeUpdate, onLogin, onEmailUpdate }) => (
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
              maxLength="5"
            />
            { validCodeFormat ?
              <button onClick={onLogin}>Login</button> : (
                <button>Disabled Login</button>
              )
            }
          </div>;
        } else {
          <div>
            <input
              value={emailValue}
              onChange={onEmailUpdate}
              type="email"
            />
            { validEmail ?
              <button onClick={onEmailSubmit}>Next</button> : (
                <button>Disabled Next</button>
              )
            }
            { guestLoginEnabled &&
              <div>Guest login</div>
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
  emailValue: PropTypes.string.isRequired,
  guestLoginEnabled: PropTypes.bool.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  logo: PropTypes.string,
  onCodeUpdate: PropTypes.func.isRequired,
  onEmailSubmit: PropTypes.func.isRequired,
  onEmailUpdate: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  sendingCode: PropTypes.bool.isRequired,
  validCodeFormat: PropTypes.bool.isRequired,
  validEmail: PropTypes.bool.isRequired,
};

export default Login;
