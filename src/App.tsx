import { useEffect } from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { api } from "./Services";
import { GlobalStyle } from "./styles/global";

export function App() {

  // useEffect(()=>{
  //   fetch('/api').then(response => {
  //     if(response.ok){
  //       return response.json();
  //     }
  //   }).then(data=> console.log(data)); 
  // },[])


  useEffect(()=>{
    api.get('/api')
    .then(response=> console.log(response.data)); 
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

