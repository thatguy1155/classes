import {
  act, render, screen, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Components/AuthForm';

describe('My Login Form', () => {
  const callback = jest.fn();
  it('should enter login info', () => {
    const form = render(<Form mode="login" submit={callback} />);
    fireEvent.change(form.getByTestId('email'), {
      target: { value: 'thatguy1155@gmail.com' },
    });
    fireEvent.change(form.getByTestId('password'), {
      target: { value: '$RFV5tgb' },
    });
    act(() => {
      userEvent.click(form.getByTestId('button'));
    });
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ email: 'thatguy1155@gmail.com', password: '$RFV5tgb' });
  });
  it('should enter registration info', () => {
    const form = render(<Form mode="register" submit={callback} />);

    fireEvent.change(form.getByTestId('email'), {
      target: { value: 'thatguy1155@gmail.com' },
    });
    fireEvent.change(form.getByTestId('password'), {
      target: { value: '$RFV5tgb' },
    });
    fireEvent.change(form.getByTestId('verify'), {
      target: { value: '$RFV5tgb' },
    });
    act(() => {
      userEvent.click(form.getByTestId('button'));
    });
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ email: 'thatguy1155@gmail.com', password: '$RFV5tgb' });
  });
});
