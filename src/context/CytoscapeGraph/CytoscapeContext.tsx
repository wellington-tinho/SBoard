import { createContext, useState, ReactNode } from "react";
import { Core } from "cytoscape";

export const CytoscapeContext = createContext({} as any)

interface CytoscapeContextPros {
  children:ReactNode
}

export function CytoscapeProvider({children}:CytoscapeContextPros){
  const [cy, setCy] = useState<Core>();

  return (
    <CytoscapeContext.Provider value={[cy, setCy]}>
        {children}
    </CytoscapeContext.Provider>
  )

}