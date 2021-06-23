# Mars Mission

An educational website for inspiring interest in Mars.

You can view it at https://techswitch-mars-mission-may.herokuapp.com/
(or our staging environment at https://techswitch-mars-mission-may-st.herokuapp.com/)


Using the Card Component: 
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
