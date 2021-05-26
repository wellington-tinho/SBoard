interface GraphProps {
  graph: {
  nodes: Array<{
    Country: String, 
    Internal: number,
    Latitude: number,
    Longitude: number,
    id: String,
    label: String,
    modularitygroup: number
  }>;
  links: Array<{
    LinkLabel: String,
    key: number,
    source: String,
    target: String
  }>;
  }
}

export function GraphSigma(props: GraphProps) {
 
  return( 
    <>
    <h1>{props}</h1>
    </>
  );
}