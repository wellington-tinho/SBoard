import { defaultGraph } from "../../util/defaulGraphJson";
import { Container } from "./styles";



interface CreateGraphProps{
  setGraph:React.Dispatch<React.SetStateAction<any>>,
}



export function CreateGraph({setGraph}:CreateGraphProps){
  
  return (
    <Container onClick={()=>setGraph(defaultGraph)}>
      <p>CreateGraph</p> 
    </Container>
  )
}
