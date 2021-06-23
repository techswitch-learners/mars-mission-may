import { render, screen } from '@testing-library/react';
import { Timeline } from '../../components/Timeline';

test('renders Timeline', () => {
    render(<Timeline />);
    const timelineElement = screen.getByText("Timeline");
    expect(timelineElement).toBeInTheDocument();
});