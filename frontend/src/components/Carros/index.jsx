import { useState, useEffect } from 'react';
import './Carros.css';

function Carros() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchCarros = async () => {
      try {
        // Requisição para a rota de API
        const response = await fetch('http://localhost:5001/api/carros');
        const data = await response.json();
        setCarros(data);
      } catch (error) {
        console.error("Erro ao buscar os carros:", error);
      }
    };
    
    fetchCarros();
  }, []);

  return (
    <>
      {/* Banner da página */}
      <div id="banner-principal">
        <div id="titulo-banner">
          <h1>Encontre o Carro dos Seus Sonhos</h1>
        </div>
        <div id="subtitulo-banner">
          <p>
            Descubra nossa seleção premium de veículos novos e seminovos. Qualidade garantida e os melhores preços do mercado.
          </p>
        </div>
        <div id="botao-banner">
          <a href="/sobre">
          <button>Saiba mais</button>
          </a>
        </div>
      </div>

      {/* Seção de exibição dos carros */}
      <section className="carros-section">
        <h2>Carros em Destaque</h2>
        <div className="carros-grid">
          {carros.map((carro) => (
            <div key={carro.id} className="carro-card">
              <img 
                src={carro.imagem} 
                alt={carro.nome} 
                className="carro-imagem" 
              />
              <div className="carro-info">
                <h3>{carro.nome}</h3>
                <p className="carro-preco">{carro.preco}</p>
                <div className="carro-detalhes">
                  <span>{carro.ano}</span> | <span>{carro.combustivel}</span>
                  <p>{carro.assentos}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Carros;