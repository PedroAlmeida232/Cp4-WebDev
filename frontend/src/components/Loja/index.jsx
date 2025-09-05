import './Loja.css';

function Loja() {
  return (
    <div className="page-container loja-container">
      <div className="content-box">
        <h1>Visite Nossa Loja</h1>
        <p>
          Em nosso showroom em <b>São Paulo</b>, você não apenas explora nossa coleção, mas vive a paixão pelos carros clássicos. Oferecemos uma seleção exclusiva de acessórios e produtos de alta qualidade para cuidar do seu veículo.
        </p>
        <p className="loja-endereco">
          <b>Endereço:</b> Rua das Clássicas, 123 - Centro, São Paulo.
        </p>

        <h2>Acessórios em Destaque</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Kit de Polimento Premium</h3>
            <p>Restaure o brilho original da pintura com nossa fórmula exclusiva.</p>
          </div>
          <div className="product-card">
            <h3>Capa de Proteção sob Medida</h3>
            <p>Proteja seu carro de poeira e arranhões com uma capa feita para o seu modelo.</p>
          </div>
          <div className="product-card">
            <h3>Peças de Reposição Genuínas</h3>
            <p>Garanta a autenticidade e performance com peças diretamente de fornecedores.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja;