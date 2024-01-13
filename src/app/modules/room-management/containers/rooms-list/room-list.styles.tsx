import styled from "styled-components";

const PageTitle = styled.p`
  place-self: flex-start;
  font-weight: ${props => props.theme.typography.heading.fontWeight};
    padding: 0;
    margin: 0;
    font-size: clamp(0.7rem, 5cqw + 0.5rem, ${props => props.theme.typography.heading.fontSize});
    color: ${props => props.theme.typography.heading.color};
`;

const PageDescription = styled.p`
    place-self: flex-start;
    font-weight: ${props => props.theme.typography.heading.fontWeight};
    padding: 0;
    margin: 0;
    font-size: clamp(0.2rem, 3cqw + 0.5rem, 1.25rem);
    color: #9A9A9A;
`;

const RoomsList = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    gap: 1rem;
    grid-auto-rows: 18rem;
    margin-top: 2rem;

    @media only screen and (min-width: ${props => props.theme.breakpoints.MOBILE_PORTRAIT_WIDTH}) {  
      grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
    }
`;

const RoomDetails = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    container-type: inline-size;
    container-name: room-details;
`;

const RoomImage = styled.img`
    width: 100%;
    height: 1%;
    object-fit: cover;
    border-radius: 5px;
    flex-grow: 1;
`;

const RoomDetailsItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "roomName"
        "spotsLeft"
        "bookButton";
    gap: 5px;

    @media only screen and (min-width: ${props => props.theme.breakpoints.MOBILE_PORTRAIT_WIDTH}) {
      grid-template-columns: 1fr 0.5fr 1fr;
      grid-template-areas:
        "roomName . bookButton"
        "spotsLeft spotsLeft spotsLeft ";
      gap: unset;
    }
`;

const BookButton = styled.button`
    grid-area: bookButton;
    width: 100%;
    height: 1.85rem;
    border-style: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: clamp(0.2rem, 5cqw + 0.5rem, 0.8rem);
    background-color: ${props => props.theme.colors.primary.bg};
    color: ${props => props.theme.colors.primary.fg};
    cursor: pointer;
  
    &:hover {
      background-color: ${props => props.theme.colors.primary.fg};
      color: ${props => props.theme.colors.primary.bg};
      border: 1px solid ${props => props.theme.colors.primary.bg};
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.MOBILE_PORTRAIT_WIDTH}) {
      width: clamp(1.25rem, 40cqw + 1rem, 5.6rem);
      place-self: flex-end;
   }
`;

const RoomName = styled.span`
    grid-area: roomName;
    font-weight: 700;
    font-size: clamp(0.2rem, 5cqw + 0.5rem, 1.1rem);
    color: #222222;
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

export {
    PageTitle,
    PageDescription,
    RoomsList,
    RoomDetails,
    RoomImage,
    RoomName,
    RoomDetailsItemsWrapper,
    RemainingSpots,
    BookButton
};