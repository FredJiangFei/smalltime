import { render } from '@testing-library/react-native';
import Card from '../components/Card';

test('render card', () => {
  // Arrange
  const { getByText } = render(<Card desc="123" />);

  // Assert
  expect(getByText('123'));
});

test('render card snapshot', () => {
  // Arrange
  const card = render(
    <Card desc="123" imageUrl="https://picsum.photos/200/300" />
  );

  // Assert
  expect(card).toMatchSnapshot();
});
