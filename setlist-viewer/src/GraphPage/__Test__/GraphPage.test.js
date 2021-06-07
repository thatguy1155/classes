import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import GraphPage from '../GraphPage';

describe('My SearchPage', () => {
  const callback = jest.fn();
  const component = renderer.create(
    <GraphPage />,
  );

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  //   it('should show an altered name', () => {
  //     //await screen.findByText(/Signed in as/);
  //     render(<NameDisplay name={'Slim Shady'} setName={() => {}}/>);
  //     expect(screen.queryByText(/Searches for Slim Shady/)).toBeNull();

  //     userEvent.type(screen.getByRole('textbox'), 'Slim Shady');

  //     expect(
  //       screen.getByText(/my name is Slim Shady/),
  //     ).toBeInTheDocument();
  // });
});
