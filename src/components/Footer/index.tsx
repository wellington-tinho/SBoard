import styled from "styled-components";

const Container = styled.div`
  background-color: var(--bg);
  height: 2.5vh;
  width: 100%;
  /* position: absolute; */
  bottom: 0;
  display: flex;
  justify-content:center;
  border-top: 1px solid var(--background);
  
`

export function Footer(){
  return(
    <Container>
      <span>
        Network Slice - UFPI
      </span>
    </Container>
  );
}