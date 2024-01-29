import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border-radius: 16px;
  border: none;

  padding: 32px;
  margin-bottom: 24px;
  

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .stars {
    display: flex;
    margin-top: 8px;

    svg path {
      fill: ${({ theme }) => theme.COLORS.BLUE};
    }
  }

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical; 
    margin-top: 15px;

    text-align: justify;
    
    overflow: hidden;
    color: #999591;
    text-overflow: ellipsis;

    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
  }
`;