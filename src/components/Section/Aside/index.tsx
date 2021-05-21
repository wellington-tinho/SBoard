import { Components } from "./Components";
import { Aside as RightPart } from "./styled"; //Evitar conflito

export function Aside() {
  return (
      <RightPart>
        <header>  
          <strong>Requests</strong>
        </header>
        <Components />
      </RightPart>
  )
}