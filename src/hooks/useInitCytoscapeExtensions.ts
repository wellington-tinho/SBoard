import { useEffect, useState } from "react";

import cytoscape from "cytoscape";
import type Cy from "cytoscape";
// @ts-expect-error Module is not typed
import cytoscapeDomNode from "cytoscape-dom-node";
import edgehandles from "cytoscape-edgehandles";
import type { EdgeHandlesInstance } from "cytoscape-edgehandles";

cytoscape.use(cytoscapeDomNode);
cytoscape.use(edgehandles);

type UseInitCytoscapeExtensions = (cy: Cy.Core | undefined) => {
  edgeHandles: EdgeHandlesInstance | undefined;
};

const useInitCytoscapeExtensions: UseInitCytoscapeExtensions = (cy) => {
  const [edgeHandles, setEdgeHandles] = useState<EdgeHandlesInstance>();

  // Initialise domNode instance
  useEffect(() => {
    if (cy === undefined) return;
    // @ts-expect-error Module is not typed
    cy.domNode();
  }, [cy]);

  // Initialise edgehandles instance
  useEffect(() => {
    if (cy === undefined) return;
    setEdgeHandles(cy.edgehandles());
  }, [cy]);

  return { edgeHandles };
};

export default useInitCytoscapeExtensions;