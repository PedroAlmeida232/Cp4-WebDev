function Header() {
  return (
    <header>
      <div>
        {/* Nessa div ficara a logo da Insight  */}
      </div>
      <nav>
        <ul>
            {/* Cada href deve ter o caminho para cada pagina selecionada */}
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Carros</a>
          </li>
          <li>
            <a href="#">Lojas</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
