import { useState } from "react"

function Header() {
  // HOOK - useState - manipula o estado da variável
    const[mensagem, setMensagem]=useState("Nenhuma Mensagem do Servidor");
    const[endpointAtual, setEndPointAtual] =useState("");
    const[status, setStatus]=useState("");

    // Criando a função busca

    const busca= async(api)=>{
        setEndPointAtual(api); //Define o End point atual
        setMensagem("Carregando..."); //Mensagem de carregando
        setStatus("loading..."); //Define o status do carregamento

        //tratamento de erros
        try {
            //Fazendo uma requisição de get no endpoint usando a função fetch
            const resposta = await fetch(`http://localhost:5001${api}`);
            //Verifica se a resposta esta ok
            if(!resposta.ok){
                console.log(`Erro na requisição ${resposta.status}`);
            }
            //Converter a resposta para texto
            const data = await resposta.text();
        setMensagem(data); //Atualiza a mensagem com a respota do servidor 
            setStatus("Sucesso")
        } catch (error) {
            console.log(`erroa o buscar dados ${error}`);
            setMensagem(`Erro ao conectar ao servidor ${error.mensagem}`);
            setStatus("Sucesso");
        }
    }

  return (
    <header>
      <div>
        {/* Nessa div ficara a logo da Insight  */}
      </div>
      <nav>
        <ul>
            {/* Cada href deve ter o caminho para cada pagina selecionada */}
          <li>
            <a>Início</a>
          </li>
          <li>
            <a onClick={()=>busca("/carros")}>Carros</a>
          </li>
          <li>
            <a onClick={()=>busca("/menu")}>Menu</a>
          </li>
          <li>
            <a onClick={()=>busca("/sistema")}>Sistema</a>
          </li>
          <li>
            <a onClick={()=>busca("/contato")}>Contato</a>
          </li>
        </ul>
        <p>{mensagem}</p>
        <p>Status do Servidor: {status}</p>
      </nav>
    </header>
  );
}

export default Header;
