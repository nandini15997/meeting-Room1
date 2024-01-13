import styled from "styled-components";

const PageTitle = styled.p`
    grid-area: roomTitle;
    font-weight: ${props => props.theme.typography.heading.fontWeight};
    padding: 0;
    margin: 0;
    font-size: clamp(0.7rem, 5cqw + 0.5rem, ${props => props.theme.typography.heading.fontSize});
    color: ${props => props.theme.typography.heading.color};
`;

const RoomDetailsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-template-areas:
        "roomTitle"
        "roomImage"
        "roomDescription"
        "spotsLeft"
        "bookRoom";
  gap: 1rem;
  max-width: 800px;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints.MOBILE_PORTRAIT_WIDTH}) {
      grid-template-columns: 3fr 1fr;
      grid-template-areas:
        "roomImage ."
        "roomImage roomTitle"
        "roomImage roomDescription"
        "roomImage spotsLeft"
        "roomImage bookRoom"
        "roomImage .";
  }
`;

const RemainingSpots = styled.span`
    grid-area: spotsLeft;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    font-size: clamp(0.2rem, 5cqw + 0.5rem, 1.1rem);
    color: ${props => props.theme.colors.primary.bg};
`;

const RoomImage = styled.img`
    grid-area: roomImage;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    max-height: 200px;

    @media only screen and (min-width: ${props => props.theme.breakpoints.MOBILE_PORTRAIT_WIDTH}) {
      max-height: 400px;
    }
`;

const RoomDescription = styled.p`
    grid-area: roomDescription;
    font-weight: ${props => props.theme.typography.heading.fontWeight};
    padding: 0;
    margin: 0;
    font-size: clamp(0.2rem, 3cqw + 0.5rem, 1.25rem);
    color: #9A9A9A;
`;

const BookButton = styled.button`
    grid-area: bookRoom;
    width: 100%;
    border-style: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: clamp(0.2rem, 5cqw + 0.5rem, 2rem);
    background-color: ${props => props.theme.colors.primary.bg};
    color: ${props => props.theme.colors.primary.fg};
    cursor: pointer;
  
    &:hover {
      background-color: ${props => props.theme.colors.primary.fg};
      color: ${props => props.theme.colors.primary.bg};
      border: 1px solid ${props => props.theme.colors.primary.bg};
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.MOBILE_PORTRAIT_WIDTH}) {
      place-self: center;
   }
`;


export {
    PageTitle,
    RoomDescription,
    RoomImage,
    RemainingSpots,
    RoomDetailsWrapper,
    BookButton
};