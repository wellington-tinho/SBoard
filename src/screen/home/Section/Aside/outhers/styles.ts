import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .UploadJSON{
    border: 1px solid black;
    background-color: var(--background);
    
    justify-content: center;
    label{
      margin-left: 2rem;
      :hover{
        background-color: var(--white-2);
        cursor: pointer;
      }
    }
  }
`
