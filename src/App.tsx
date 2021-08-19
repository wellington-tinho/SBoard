import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { GlobalStyle } from "./styles/global.ts";


function App() {
  return (
    <>
     <GlobalStyle />
     <Header />
     <Section />
     <Footer />
    </>
  );
}

export default App;
