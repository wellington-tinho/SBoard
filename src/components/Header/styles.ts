import styled from "styled-components";

export const Container = styled.header`

background: var(--bg);
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  height: 8vh;

  
  img{ 
      height: 3.5rem;
      margin: 0 2rem;
  }

  h1{ 
    font: 5rem 'Roboto Slab', 600;
  }


  @media (max-width: 1280px){
    height: 7vh;
    img{
      height: 2.5rem;
      margin: 0 2rem;
    }
   h1{ 
     font-size: 1.5rem;
   }
  }
`;
