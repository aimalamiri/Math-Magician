import React from 'react';
import CalculatorButton from './CalculatorButton';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="grid cols-4">
        <CalculatorButton text="AC" />
        <CalculatorButton text="+/-" />
        <CalculatorButton text="%" />
        <CalculatorButton className="bg-orange" text="÷" />
        <CalculatorButton text="7" />
        <CalculatorButton text="8" />
        <CalculatorButton text="9" />
        <CalculatorButton className="bg-orange" text="×" />
        <CalculatorButton text="4" />
        <CalculatorButton text="5" />
        <CalculatorButton text="6" />
        <CalculatorButton className="bg-orange" text="-" />
        <CalculatorButton text="1" />
        <CalculatorButton text="2" />
        <CalculatorButton text="3" />
        <CalculatorButton className="bg-orange" text="+" />
        <CalculatorButton className="span-2" text="0" />
        <CalculatorButton text="." />
        <CalculatorButton className="bg-orange" text="=" />
      </div>
    );
  }
}
