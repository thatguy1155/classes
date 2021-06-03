import {
  act, render, screen, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Components/DataForm';

describe('My Data Form', () => {
  const callback = jest.fn();
  it('should submit the data', () => {
    const form = render(<Form submit={callback} selectedData="" />);
    fireEvent.change(form.getByTestId('fieldOne'), {
      target: { value: 'foo' },
    });
    fireEvent.change(form.getByTestId('fieldTwo'), {
      target: { value: 'bar' },
    });
    fireEvent.change(form.getByTestId('fieldThree'), {
      target: { value: 'the game' },
    });
    act(() => {
      userEvent.click(form.getByTestId('button'));
    });
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ fieldOne: 'foo', fieldTwo: 'bar', fieldThree: 'the game' });
  });
  it('edit the data', () => {
    const data = {
      fieldOne: 'foo',
      fieldTwo: 'bar',
      fieldThree: 'the game',
    };
    const form = render(<Form submit={callback} selectedData={data} />);
    fireEvent.change(form.getByTestId('fieldThree'), {
      target: { value: 'the game is to be sold, not to be told' },
    });
    act(() => {
      userEvent.click(form.getByTestId('button'));
    });
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ fieldOne: 'foo', fieldTwo: 'bar', fieldThree: 'the game is to be sold, not to be told' });
  });
});
