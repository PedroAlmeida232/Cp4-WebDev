import './Loja.css';

function Loja() {
  return (
    <div className="page-container loja-container">
      <div className="content-box">
        <h1>Nossa Loja</h1>
        <p>
          Explore nossa seleção de produtos e acessórios. Tudo o que você precisa para o seu carro, com a qualidade Insight.
        </p>
        <div className="product-grid">
          <div className="product-card">
            <h3>Acessório A</h3>
            <p>Descrição do acessório. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="product-card">
            <h3>Acessório B</h3>
            <p>Descrição do acessório. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="product-card">
            <h3>Acessório C</h3>
            <p>Descrição do acessório. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja;