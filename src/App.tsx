// import { Footer } from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { GlobalStyle } from "./styles/global.ts";


function App() {
  return (
    <>
     <GlobalStyle />
     <Header />
     <Section />
     <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
