// import { Footer } from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import { Header } from './organisms/Header';
import { Home } from './pages/home/home';
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
