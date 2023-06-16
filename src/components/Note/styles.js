import styled from "styled-components"

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
 
  width: 100%;
  border: none;
  padding: 22px;
 
  border-radius: 10px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

  }
  
  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`