import styled from 'styled-components';

export const Container = styled.div`

  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
    
  /* display: flex;
  align-items: column; */

    
  button{
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    background: #e7e9ee;
    border: 1px solid var(--green-3);
    border-radius: 0.25rem;
    /* border: 1; */
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight:600;
    input{
      display: none !important;
    }
    
    :hover{
      background-color: var(--green-3);
      color: white;
      border: 1px solid black;
      filter: brightness(0.9);
    }
  }

   
`;
