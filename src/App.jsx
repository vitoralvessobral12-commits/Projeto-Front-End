import AppRoutes from "./routes/AppRoutes";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
