import { useEffect, useState } from "react";
import cytoscape,{Core} from "cytoscape";
import edgehandles from "cytoscape-edgehandles";
import type { EdgeHandlesInstance } from "cytoscape-edgehandles";


type UseInitCytoscapeExtensions = (cy: Core | undefined) => {
  edgeHandles: EdgeHandlesInstance | undefined;
};
cytoscape.use(edgehandles);

const useInitCytoscapeExtensions: UseInitCytoscapeExtensions = (cy) => {
  const [edgeHandles, setEdgeHandles] = useState<EdgeHandlesInstance>();
  
  // Initialise edgehandles instance
  useEffect(() => {
    if (cy === undefined) return;
    setEdgeHandles(cy.edgehandles());
  }, [cy]);

  return { edgeHandles };
};

export default useInitCytoscapeExtensions;