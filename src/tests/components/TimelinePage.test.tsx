import { render, screen } from '@testing-library/react';
import { TimelinePage } from '../../components/TimelinePage';

test('renders Timeline Page', () => {
    render(<TimelinePage />);
    const helloWorldElement = screen.getByText("Timeline");
    expect(helloWorldElement).toBeInTheDocument();
});
