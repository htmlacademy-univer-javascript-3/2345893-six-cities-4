import { withHistory } from '../../utils/mockComponent';
import Page404 from "./index.tsx";
import { render, screen } from '@testing-library/react';

describe('Component: Page404', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404 Not Found';
    const expectedLinkText = 'Return to Main';

    render(withHistory(<Page404 />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
