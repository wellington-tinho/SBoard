import { defaultGraph } from "../../util/defaulGraphJson";
import { Container } from "./styles";



interface CreateGraphProps{
  setGraph:React.Dispatch<React.SetStateAction<any>>,
  setIsGraph: React.Dispatch<React.SetStateAction<boolean>>,
}



export function CreateGraph({setGraph, setIsGraph}:CreateGraphProps){

  function createDefaultGraph(){
    setGraph(defaultGraph)
    setIsGraph(true)
  }
  return (
    <Container onClick={createDefaultGraph}>
      <p>CreateGraph</p> 
    </Container>
  )
}
