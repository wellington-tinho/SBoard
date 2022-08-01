import { createContext, ReactNode, useState, Dispatch} from "react";

interface IContextProps {
  isGraph: boolean;
  setIsGraph: Dispatch<React.SetStateAction<boolean>>,
}

interface IsGraphContextPros {
  children:ReactNode;
}

export const IsGraphContext = createContext({} as IContextProps )


export function IsGraphProvider({children}:IsGraphContextPros){
  const [isGraph, setIsGraph] = useState(false);

  return (
    <IsGraphContext.Provider value={{ isGraph, setIsGraph }}>
        {children}
    </IsGraphContext.Provider>
  )

}



