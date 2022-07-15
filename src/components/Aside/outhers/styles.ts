import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  

  button,label{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    background: var(--white-2-1);
    border: 1px solid var(--green-3);
    border-radius: 0.25rem;
    /* border: 1; */
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight:600;
    text-align: center;
    :hover{
      background-color: var(--green-3);
      color: white;
      border: 1px solid black;
      filter: brightness(0.9);
    }
  }
 

`
