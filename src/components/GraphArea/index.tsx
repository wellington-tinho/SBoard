import { Upload } from "../Upload"
import { NavOptions, GraphContainer, Container } from "./styles"

export function GraphArea(){
  return(
    <Container>
      <NavOptions>
        <ul>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
        </ul>
      </NavOptions>
      
    
      <GraphContainer>
          <Upload/>
      </GraphContainer>
    </Container>
  )
}