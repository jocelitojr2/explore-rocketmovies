import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: start;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.BLUE};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;

    width: 100%;
    text-align: start;

    margin-bottom: 48px;
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_300};

    width: 100%;
    text-align: start;

    margin-bottom: 48px;
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  > button {
    margin-top: 24px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.40);
`;