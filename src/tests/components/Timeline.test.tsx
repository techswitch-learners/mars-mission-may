import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Timeline } from '../../components/Timeline';

test('renders Timeline', () => {
    render(
        <Router>
            <Timeline />
            const timelineElement = screen.getByText("Timeline");
            expect(timelineElement).toBeInTheDocument();
        </Router>
    );
});