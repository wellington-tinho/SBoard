import { useEffect } from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { GlobalStyle } from "./styles/global";

export function App() {

  useEffect(()=>{
    fetch('/api').then(response => {
      if(response.ok){
        return response.json();
      }
    }).then(data=> console.log(data)); 
  },[])
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <Section />
    </>
  );
}

