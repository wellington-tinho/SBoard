// import { Footer } from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import { Home } from './screen/home/home';
import { Header } from './screen/home/Section/Header';
import { GlobalStyle } from "./styles/global.ts";


function App() {
  return (
    <>
     <GlobalStyle />
     <Header />
     <Home />
     <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
