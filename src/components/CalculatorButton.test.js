import renderer from 'react-test-renderer';
import CalculatorButton from './CalculatorButton';

it('CalculatorButton renders correctly', () => {
  const handleClick = () => true;
  const tree = renderer.create(<CalculatorButton text="Submit" handleClick={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
