import { createContext, ReactNode, useState } from "react";

export const RequestContext = createContext({} as any)

interface RequestContextPros {
  children:ReactNode;
}

export function RequestProvider({children}:RequestContextPros){
  const [request, setRequest] = useState({});
  console.log(request,'request (RequestProvider)');
  console.log(setRequest,'setRequest (RequestProvider)' );

  

  return (
    <RequestContext.Provider value={[request, setRequest]}>
        {children}
    </RequestContext.Provider>
  )

}