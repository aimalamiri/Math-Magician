import renderer from 'react-test-renderer';
import TextInput from './TextInput';

it('Home renders correctly', () => {
  const tree = renderer.create(<TextInput value={43} />).toJSON();
  expect(tree).toMatchSnapshot();
});
