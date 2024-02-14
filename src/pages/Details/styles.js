import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 123px auto;
  grid-template-areas: 
  "header"
  "togoback"
  "content";

  > main {
    grid-area: content;
    margin: 0 123px;
    overflow-y: auto;
    padding-right: 16px;

    p {
      text-align: justify;
      margin: 16px 0;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.COLORS.BLUE};
      border-radius: 8px;
    }

    .tags {
      margin-bottom: 40px;
      
      span {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        padding: 8px 16px;
      }
    }
  }
`;

export const ToGoBack = styled.button`
  grid-area: togoback;
  margin: 40px 123px 40px 123px;

  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;

  color: ${({theme})=> theme.COLORS.BLUE};
  background: none;
  border: none;
`;

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25.5px;

  > h2 {
    font-size: 36px;
    font-weight: 500;
    margin-right: 9px;
  }

  > .stars svg {
    color: ${({theme}) => theme.COLORS.BLUE};
    width: 20px;
    height: 20px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;

  > img {
    width: 16px;
    height: 16px;

    border-radius: 35px;
    border: 1px solid #3E3B47;
  }

  > svg {
    color: ${({theme}) => theme.COLORS.BLUE};
  }
`;
