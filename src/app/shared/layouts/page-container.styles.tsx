import styled from "styled-components";

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  gap: 0.5rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.TABLET_LANDSCAPE_WIDTH}) {
    padding: 1.5rem;
    align-items: center;
  }
`;

export {PageContainer};