import { createContext, ReactNode, useState } from "react";

export const RequestContext = createContext({} as any)

interface RequestContextPros {
  children:ReactNode;
}

export function RequestProvider({children}:RequestContextPros){
  const [request, setRequest] = useState({});

  return (
    <RequestContext.Provider value={[request, setRequest]}>
        {children}
    </RequestContext.Provider>
  )

}