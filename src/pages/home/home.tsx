import styled from "styled-components";
import { Aside } from "../../components/Aside";
import { GraphArea } from "../../components/GraphArea";

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
  // const [request, setRequest] = useState({})

  return (
      <Content>
        <GraphArea />
        <Aside />
      </Content>
  );
}