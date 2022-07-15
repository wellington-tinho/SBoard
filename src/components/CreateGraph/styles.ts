import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 6rem;



  margin: 0 auto;
  margin-right: 25%;
  width: 50%;

  border-radius: .25rem;
  border: 1px dashed var(--gray-3);
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--white-3);


  padding: 1.4rem .5rem;
  transition: transform 0.2s ease;
 
  :hover{
     background-color: var(--white-1);
     transform: scale(1.1); 
   }

   p{
    font-weight: 600;
    color: var(--gray-3);
    font-size: 1rem;


   }
  `

