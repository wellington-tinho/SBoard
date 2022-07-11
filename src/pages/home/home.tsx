import { useState } from "react";
import styled from "styled-components";
import { CytoscapeContext } from "../../context/CytoscapeContext";
import { Aside } from "../../organisms/Aside";
import { GraphArea } from "../../organisms/GraphArea";
import { Core } from "cytoscape";

const Content = styled.div`
  display: flex;
  /* align-items: stretch; */
  border: 1px solid var(--background);
  height: calc( 100vh - 4rem ); 

  
  @media (max-width: 1280px){
    height: calc( 100vh - 2.5rem ); 
  }
  
  @media (max-width: 500px){
    flex-direction: column;
    align-items: center;
  }
`
export function Home() {
  const [cy, setCy] = useState<Core>()
  const [request, setRequest] = useState({})

  return (
    <CytoscapeContext.Provider value={[cy, setCy]}>
      <Content>
        <GraphArea setRequest={setRequest} />
        <Aside request={request} />
        {/* <Footer /> */}
      </Content>
    </CytoscapeContext.Provider>

  );
}