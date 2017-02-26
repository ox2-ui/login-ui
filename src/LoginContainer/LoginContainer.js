import React, { Component, PropTypes } from 'react';

/**
 * LoginContainer Component
 */

class LoginContainer extends Component {
  static propTypes = {
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
  };

  state = {
    isActive: true,
  };

  handleChange = (options) => {
    console.log('👻', options); // eslint-disable-line no-console
  };

  render() {
    const { className } = this.props;

    return (
      <div className={className} >
        LoginContainer
      </div>
    );
  }
}

export default LoginContainer;
