import { useState } from "react";
import logo from "../assets/insight-logo.png";
import "../styles/Header.css";

function Header() {
  const [mensagem, setMensagem] = useState(".");
  const [endpointAtual, setEndPointAtual] = useState("");
  const [status, setStatus] = useState("idle");

  const busca = async (api) => {
    setEndPointAtual(api);
    setMensagem("Carregando...");
    setStatus("loading");

    try {
      const resposta = await fetch(`http://localhost:5001${api}`);
      if (!resposta.ok) {
        console.log(`Erro na requisição ${resposta.status}`);
        setMensagem(`Erro na requisição: ${resposta.status}`);
        setStatus("error");
        return;
      }
      const data = await resposta.text();
      setMensagem(data);
      setStatus("success");
    } catch (error) {
      console.log(`Erro ao buscar dados: ${error}`);
      setMensagem(`Erro ao conectar ao servidor: ${error.message}`);
      setStatus("error");
    }
  };

  return (
    <header>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo da Insight Carros" />
          <span className="logo-text">Insight</span>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a onClick={() => busca("/carros")} href="/carros">Carros</a>
          </li>
          <li>
            <a onClick={() => busca("/loja")} href="/loja">Loja</a>
          </li>
          <li>
            <a onClick={() => busca("/sobre")} href="/sobre">Sobre</a>
          </li>
          <li>
            <a onClick={() => busca("/contato")} href="/contato">Contato</a>
          </li>
        </ul>
        <p className={`status-text ${status}`}>{mensagem}</p>
      </nav>
    </header>
  );
}

export default Header;