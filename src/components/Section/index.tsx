import styled from "styled-components";
import { Aside } from "../Aside";
import { Graph } from "../Graph";

const Content = styled.div `
  display: flex;
  flex-direction: row;
`

export function Section(){
  return(
    <Content>
      <Graph/>
      <Aside/>
    </Content>
  );
}