import { ElementsDefinition } from "cytoscape";
import { useContext, useState } from "react";
import { IsGraphContext } from "../../context/IsGraph/isGraph";
import { CreateGraph } from "../CreateGraph";
import { GraphManipulation } from "../GraphManipulation";
import { UploadGraph } from "../UploadGraph";
import { GraphContainer } from "./styles";




export function StartGraph() {

  const [graph, setGraph] = useState({} as ElementsDefinition)
  const {isGraph, setIsGraph} = useContext(IsGraphContext);

  

  if (!isGraph) {
    return (
      <GraphContainer>
        <UploadGraph setGraph={setGraph} setIsGraph={setIsGraph}/>
        <CreateGraph setGraph={setGraph} setIsGraph={setIsGraph}/>
      </GraphContainer>
    )
  } else {
    return ( 
      < GraphManipulation grapJSON={graph}/>
    )
  }
}
