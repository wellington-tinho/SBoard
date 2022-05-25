import { Container } from "./styles";

export default function CreateGraph() {
  return (
    <Container onClick={()=>console.log('a')}>
      <p>CreateGraph</p> 
    </Container>
  )
}
