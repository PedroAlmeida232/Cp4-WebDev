import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header() {
  const [mensagem, setMensagem] = useState("Nenhuma Mensagem do Servidor");
  const [endpointAtual, setEndPointAtual] = useState("");
  const [status, setStatus] = useState("idle"); // Estado inicial 'idle'

  const busca = async (api) => {
    setEndPointAtual(api);
    setMensagem("Carregando...");
    setStatus("loading"); // Alterado para 'loading'

    try {
      const resposta = await fetch(`http://localhost:5001${api}`);
      if (!resposta.ok) {
        console.log(`Erro na requisição ${resposta.status}`);
        setMensagem(`Erro na requisição: ${resposta.status}`);
        setStatus("error"); // Alterado para 'error'
        return;
      }
      const data = await resposta.text();
      setMensagem(data);
      setStatus("success"); // Alterado para 'success'
    } catch (error) {
      console.log(`Erro ao buscar dados: ${error}`);
      setMensagem(`Erro ao conectar ao servidor: ${error.message}`);
      setStatus("error"); // Alterado para 'error'
    }
  };

  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a onClick={() => busca("/carros")}
              href="/carros"
            >Carros</a>
          </li>
          <li>
            <a onClick={() => busca("/loja")}
              href="/loja"
            >Loja</a>
          </li>
          <li>
            <a onClick={() => busca("/sobre")}
              href="/sobre"
            >Sobre</a>
          </li>
          <li>
            <a onClick={() => busca("/contato")}
              href="/contato"
            >Contato</a>
          </li>
          <li>
            <div className={`status-indicator ${status}`}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;