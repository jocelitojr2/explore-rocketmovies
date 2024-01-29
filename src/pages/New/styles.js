import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content auto;
  grid-template-areas: 
  "header"
  "togoback"
  "content";
`;

export const ToGoBack = styled(Link)`
  grid-area: togoback;
  margin: 40px 123px 40px 123px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({theme})=> theme.COLORS.BLUE};
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  padding-right: 16px;

  margin: 0 123px;
  padding-bottom: 93px;

  > Section {
    margin: 0;
    margin-bottom: 40px;
    h2 {
      font-size: 36px;
      font-weight: 500;
    }
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
`;

export const Form = styled.form`

  > .inputs-w50 {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  > Section {
    display: flex;
    flex-direction: column;
    margin: 40px 0px;

    h2 {
      font-size: 20px;
      color: #999591;
      margin-bottom: 24px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 16px;
      gap: 24px;

      background: ${({theme})=> theme.COLORS.BACKGROUND_900};
      border-radius: 8px;
    }
  }

  > .buttons {
    display: flex;
    gap: 40px;

    .black {
      background: ${({theme}) => theme.COLORS.BACKGROUND_900};
      color: ${({theme}) => theme.COLORS.BLUE};
    }
  }
`;