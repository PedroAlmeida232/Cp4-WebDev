import Header from "./components/Header"
import Footer from "./components/Footer";
import Carros from "./components/Carros"
import Contato from "./components/Contato"
import Loja from "./components/Loja"
import Sobre from "./components/Sobre"

function App() {
  const caminhoAtual = window.location.pathname;

  const renderizarPagina = () => {
    switch (caminhoAtual) {
      case "/carros":
        return <Carros />;
      case "/loja":
        return <Loja />;
      case "/sobre":
        return <Sobre />;
      case "/contato":
        return <Contato />;
      default:
        
        return <div>Página não encontrada</div>;
    }
  };

  return (
    <>
      <Header />
      <main>
        {renderizarPagina()}
      </main>
      <Footer />
    </>
  );
}

export default App;