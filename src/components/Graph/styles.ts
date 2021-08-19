import styled from "styled-components";

export const NavOptions  = styled.nav`
  border-radius: 0.25rem;
  background-color: var(--bg);
  border: 1px solid var(--background);
  border-left: 0;
 
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
`

export const GraphContainer = styled.div`
  border-radius: 0.25rem;
  background-color: var(--bg);
  height: 100%;  
  `

export const Container = styled.div`
  width: 100%;
`