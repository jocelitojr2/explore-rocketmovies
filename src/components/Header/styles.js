import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 123px;
  gap: 64px;

  border-bottom: 1px solid #3E3B47;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.BLUE };
  }
`;

export const Search = styled.div`
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  text-align: end;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;
    width: max-content;

    strong {
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Avatar = styled.div`
  position: relative;

  width: 66px;
  height: 66px;
  
  > img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }

  > .edit {
    width: 23px;
    height: 23px;

    background-color: ${({theme}) => theme.COLORS.BLUE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0px;
    right: 1px;

    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
      color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    }
  }
`;