# Mars Mission

An educational website for inspiring interest in Mars.

You can view it at https://techswitch-mars-mission-may.herokuapp.com/
(or our staging environment at https://techswitch-mars-mission-may-st.herokuapp.com/)

## Environment Variables
Copy .env.template.ts as a new file named .env.ts in the same directory.
Change the value of `NASA_API_KEY` to your API key.

### Instructions for getting NASA Api Key

Go to https://api.nasa.gov/
Create an account.
Copy the API key for your account into .env.ts

############### Instructions for using the Card Component: 

1) The properties for use are as below: 
Props: 1 object of type CardProps - which is defined in the card component but is recreated below for clarity:

CardProps {
    imageSrc: string; - this is the image URL
    href: string; - this is the link to another page if applicable eg "/spirt". If there is no link set it to "".
    title: string; - The title of the post.
    body: string; - the body text of the post.
    showInitialText: boolean; - if true text (title and body) will be seen on initial render of the page.
    textHideable: boolean; - if true the text can be shown and hidden on click. Note that this should not be used for the desktop version. 
    imageOnRight: boolean; - if true the image with the card will be on the right hand side and text on the left. 
    isTimelineCard: boolean; - if true this will shrink the card size for use within the timeline. 
}

2) Enclosing the element:
The width of the card is set to 100% of its enclosing object so wrap it in a div and size and position the div as needed. See below for an example from the timeline.tsx: 

            <div className="information-card-holder">
                <Card imageSrc="https://picsum.photos/id/237/200/300" title="First Title" body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-" href="" showInitialText={true} textHideable={true} imageOnRight={false} isTimelineCard={false} />
                <Card imageSrc="https://picsum.photos/id/237/200/300" title="First Title" body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-" href="/spirit" showInitialText={true} textHideable={true} imageOnRight={true} isTimelineCard={false} />
                <Card imageSrc="https://picsum.photos/id/237/200/300" title="First Title" body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-" href="/opportunity" showInitialText={true} textHideable={true} imageOnRight={false} isTimelineCard={false} />
            </div>

The height of the card is set from on a constant located within the Card.scss file. There is an assumption for desktop and for mobile. If this size does not work then raise a ticket. 
