
import { useState } from "react";
import { CreateGraph } from "../CreateGraph";
import { GraphManipulation } from "../GraphManipulation";
import { UploadGraph } from "../UploadGraph";




export function StartGraph() {
  const [graph, setGraph] = useState()
 
  
  if (!graph) {
    return (
      <>
        <UploadGraph setGraph={setGraph} />
        <CreateGraph setGraph={setGraph} />
      </>
    )
  } else {

    return ( 
      < GraphManipulation grapJSON={graph}/>
    )
  }
}
