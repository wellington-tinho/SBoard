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


export function Header(){

  return (
      <Container>
        <img loading="lazy" src={logoImg} alt="Logo" height={'37px'} width={'37px'}/>
        <h1>NSBoard</h1>
        <h2>Painel para gerenciamento de redes em fatias</h2>

       {/* <Particles 
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 600,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.2,
                },
              },
            },
            particles: {
              color: {
                value: "#00000060",
              },
              links: {
                color: "#00000065",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: 'top',
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 4,
              },
            },
            detectRetina: true,
          }}
        /> */}

      </Container>
  )
}