import { useState } from "react";
import styled from "styled-components";
import { CytoscapeContext } from "../../CytoscapeContext";
import { Aside } from "../Aside";
import { GraphArea } from "../GraphArea";

const Content = styled.div `
  display: flex;
  align-items: stretch;
  border: 1px solid var(--background);
  height: 100%;
  

  @media (max-width: 500px){
    flex-direction: column;
    align-items: center;
  }
`

export function Section(){
  const [cy, setCy] = useState<cytoscape.Core>()
  const [request, setRequest]= useState({})
  
  return(
    <CytoscapeContext.Provider value={[cy, setCy]}>
      <Content>
        <GraphArea setRequest={setRequest}/>
        <Aside request={request}/>
      </Content>
    </CytoscapeContext.Provider>

  );
}