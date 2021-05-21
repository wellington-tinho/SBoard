import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <Section />
    </>
  );
}

