import styled from "styled-components";

const Container = styled.div` 
  background-color: var(--bg);
  height: 1vh;
  width: 100%;
  /* position: absolute; */
  bottom: 0;
  display: flex;
  justify-content:center;
  border-top: 1px solid var(--background);
  font-size: .8rem;


  @media (max-width: 1280px){
    height: 1vh;
    font-size: .5rem;
    margin: 0;
  }
  
`

export function Footer(){
  return(
    <Container>
      {/* <span>
        Network Slice - UFPI
      </span> */}
    </Container>
  );
}