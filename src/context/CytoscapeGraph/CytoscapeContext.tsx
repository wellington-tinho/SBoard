import { createContext, useState, ReactNode, Dispatch } from "react";
import { Core } from "cytoscape";


interface IContextProps {
  cy: Core | undefined;
  setCy: Dispatch<React.SetStateAction<Core | undefined>>,
}

export const CytoscapeContext = createContext({} as IContextProps)

interface CytoscapeContextPros {
  children:ReactNode
}

export function CytoscapeProvider({children}:CytoscapeContextPros){
  const [cy, setCy] = useState<Core>();
  return (
    <CytoscapeContext.Provider value={{cy, setCy}}>
        {children}
    </CytoscapeContext.Provider>
  )

}