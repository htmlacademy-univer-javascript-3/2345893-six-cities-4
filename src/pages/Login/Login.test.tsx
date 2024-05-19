import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mockComponent';
import Login from './index.tsx';

describe('Component: AuthScreen', () => {
  it('should render correctly', () => {
    const loginText = 'Email';
    const passwordText = 'Password';
    const { withStoreComponent } = withStore(<Login />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByPlaceholderText(loginText)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(passwordText)).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const emailElementTestId = 'emailElement';
    const passwordElementTestId = 'passwordElement';
    const expectedEmailValue = 'keks@keks.tu';
    const expectedPasswordValue = '123456';
    const { withStoreComponent } = withStore(<Login />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
