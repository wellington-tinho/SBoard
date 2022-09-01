import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  button{
    padding: .5rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border: 1px solid var(--green-3);
    transition: transform 0.2s ease;
    font-weight: 600;
    color: var(--gray-4);

    :hover{
      background-color: var(--green-3);
      color: white;
      filter: brightness(0.9);
      transform: scale(1.1); 
    } 
  }

`
