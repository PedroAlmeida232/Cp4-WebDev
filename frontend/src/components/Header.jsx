import { useState } from "react";
import logo from "../assets/logo.png"; // Importação da imagem
import "./Header.css";


function Header() {
  const [mensagem, setMensagem] = useState("Nenhuma Mensagem do Servidor");
  const [endpointAtual, setEndPointAtual] = useState("");
  const [status, setStatus] = useState("");

  const busca = async (api) => {
    setEndPointAtual(api);
    setMensagem("Carregando...");
    setStatus("loading...");

    try {
      const resposta = await fetch(`http://localhost:5001${api}`);
      if (!resposta.ok) {
        console.log(`Erro na requisição ${resposta.status}`);
        setMensagem(`Erro na requisição: ${resposta.status}`); // Atualização aqui
        setStatus("Erro"); // Adicionado um status de erro
        return; // Sai da função para não executar o resto do código
      }
      const data = await resposta.text();
      setMensagem(data);
      setStatus("Sucesso");
    } catch (error) {
      console.log(`Erro ao buscar dados: ${error}`);
      setMensagem(`Erro ao conectar ao servidor: ${error.message}`); // Corrigido para .message
      setStatus("Erro"); // Adicionado um status de erro
    }
  };

  return (
    <header>
      <div>
        <img src={logo} alt="logo" /> {/* Uso da variável 'logo' */}
      </div>
      <nav>
        <ul>
          <li>
            <a>Início</a>
          </li>
          <li>
            <a onClick={() => busca("/carros")}>Carros</a>
          </li>
          <li>
            <a onClick={() => busca("/menu")}>Menu</a>
          </li>
          <li>
            <a onClick={() => busca("/sistema")}>Sistema</a>
          </li>
          <li>
            <a onClick={() => busca("/contato")}>Contato</a>
          </li>
        </ul>
        <p>{mensagem}</p>
        <p>Status do Servidor: {status}</p>
      </nav>
    </header>
  );
}

export default Header;