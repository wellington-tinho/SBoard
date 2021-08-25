import styled from "styled-components";
import { Aside } from "../Aside";
import { GraphArea } from "../GraphArea";

const Content = styled.div `
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  flex-basis: auto;
  height: 88.5vh;
  border: 1px solid var(--background);



`

export function Section(){
  return(
    <Content>
      <GraphArea/>
      <Aside/>
    </Content>
  );
}