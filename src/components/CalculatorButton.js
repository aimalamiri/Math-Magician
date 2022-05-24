import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.PureComponent {
  render() {
    const { text } = this.props;
    return (
      <button className="btn" type="button">
        {text}
      </button>
    );
  }
}

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
};
