import { Upload } from "../Upload"
import { NavOptions, GraphContainer, Container } from "./styles"

export function GraphArea(){
  return(
    <Container>
      <NavOptions>
        <ul>
          <li>Zoom</li>
          <li>More,Minus Spacing</li>
          <li>Undo,Redo</li>
          <li>Remove</li>
          <li>Append</li>
          <li>New Request</li>
          <li>Build</li>
          <li>Setup</li>
        </ul>
      </NavOptions>
      
    
      <GraphContainer>
          <Upload/>
      </GraphContainer>
    </Container>
  )
}