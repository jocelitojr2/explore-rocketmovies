import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme}) => theme.COLORS.GRAY_300};

  border: ${({ theme, isnew }) => isnew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};
  
  border-radius: 10px;
  padding: 16px;
  height: 56px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  > input {
    height: 56px;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      width: 100%;
    }
  }
`;