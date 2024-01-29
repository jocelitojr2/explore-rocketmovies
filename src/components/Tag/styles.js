import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  font-weight: 400;
  padding: 5px 14px;
  border-radius: 8px;
  margin-right: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;