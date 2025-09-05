import Header from "./components/Header"
import Footer from "./components/Footer";
import Carros from "./components/Carros"
import Contato from "./components/Contato"
import Loja from "./components/Loja"
import Sobre from "./components/Sobre"

function App() {
  return (
    <>
      <Header />
      <main>
        <Carros />
        <Contato />
        <Loja />
        <Sobre />
      </main>
      <Footer />
    </>
  );
}

export default App
