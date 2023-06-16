import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  padding: 0 80px;
  
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 35px;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Logout = styled.button`
  background: none;
  border: none;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 24px;
  }
`