import { render, screen } from '@testing-library/react';

import { Main } from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
    expect(
      screen.getByRole('heading', { name: /nextjs template/i }),
    ).toBeInDocument();
  });
});
