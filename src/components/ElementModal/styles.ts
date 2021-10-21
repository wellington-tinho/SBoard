import styled from 'styled-components';

export const Container = styled.form`

  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
   
    
      button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--green);
        color: var(--bg);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight:600;
        
        :hover{
          filter: brightness(0.9);
        }
      
    }

`;
