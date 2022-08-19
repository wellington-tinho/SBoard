// import { Container } from "./styles";
import styled from "styled-components";
import logoImg from '../../assets/Logo.png';




// import Particles from "react-tsparticles";
export const Container = styled.header`

  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border-top: 1px solid var(--green-3);
  height: 4rem;
  flex-grow: 0;
  background-color: var(--white-1);
  
  img{ 
    /* border-radius: 50%; */
    /* padding: 0.10rem; */

    height: 2.5rem;
    margin: 0 2rem;

  }
  
    h1{ 
      font: 5rem 'Roboto Slab', 700;
      /* color: var(--white-2) */
    }
  
    h2{
      margin-left:  2rem ;  
      font: 3rem 'Roboto Slab', 700;
      /* color: var(--white-2) */
    }
  

  @media (max-width: 1280px){
    height: 2.5rem;

    img{
      height: 2rem;
      margin: 0 2rem;
    }
   h1{ 
     font-size: 1.5rem;
   }
   h2{ 
     font-size: .8rem;
   }
  }
`;


export function Header() {

  return (
    <Container>
      <img src={logoImg} alt="Logo" loading="lazy" height={'37px'} width={'37px'} />
      <h1>SBoard</h1>
      <h2>Dashboard for managing sliced networks</h2>
    </Container>
  )
}