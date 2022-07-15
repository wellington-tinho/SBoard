// import { Footer } from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './context/AppContextProvider';
import { Header } from './organisms/Header';
import { Home } from './pages/home/home';
import { GlobalStyle } from "./styles/global.ts";


function App() {
  return (
    <AppProvider >
      <>
        <GlobalStyle />
        <Header />
        <Home />
        <ToastContainer autoClose={3000} />
      </>
    </AppProvider>
  );
}

export default App;
