import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
  "header"
  "section"
  "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  grid-area: content;
  margin: 0 123px;
  overflow-y: auto;
  padding-right: 8px;

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

export const NewNote = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 48px;
  flex-shrink: 0;
  padding: 16px 32px;
  gap: 8px;
  border-radius: 8px;
`;