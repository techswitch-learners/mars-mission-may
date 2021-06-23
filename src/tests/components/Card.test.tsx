import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Card } from '../../components/Card';

test('renders Card Title', () => {
    render(
        <Router>
            <Card 
                imageSrc="https://picsum.photos/id/237/200/300" 
                title="TestCardTitle"
                body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-" 
                href="https://reactjs.org/docs/components-and-props.html" 
                showInitialText={true} 
                textHideable={false} 
                imageOnRight={false} 
                isTimelineCard={false} />
        </Router>
    );
    const title = screen.getByText("TestCardTitle");
    expect(title).toBeInTheDocument();
});


test('renders Card Body', () => {
    render(
        <Router>
            <Card 
                imageSrc="https://picsum.photos/id/237/200/300" 
                title="TestCardTitle"
                body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-" 
                href="https://reactjs.org/docs/components-and-props.html" 
                showInitialText={true} 
                textHideable={false} 
                imageOnRight={false} 
                isTimelineCard={false} />
        </Router>
    );
    const title = screen.getByText("body-text-body-text-body-text-body-text-body-text-body-text-body-text-");
    expect(title).toBeInTheDocument();
});

