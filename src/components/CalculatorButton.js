import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.PureComponent {
  render() {
    const { text, className } = this.props;
    return (
      <button className={`btn ${className}`} type="button">
        {text}
      </button>
    );
  }
}

CalculatorButton.defaultProps = {
  className: '',
};

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
