import './Contato.css';

function Contato() {
  return (
    <div className="page-container contato-container">
      <div className="content-box">
        <h1>Fale Conosco</h1>
        <p>
          Tem alguma dúvida, sugestão ou precisa de ajuda? Entre em contato conosco preenchendo o formulário abaixo.
        </p>
        <form className="contato-form">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
          
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;