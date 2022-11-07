function Header() {
  return (
    <header>
      <a href="#" className="logo">
        <i className="fas fa-child"></i>kidzies
      </a>
      <div id="menu-bars" className="fas fa-bars"></div>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#about">about</a>
        <a href="#services">services</a>
        <a href="#teacher">teacher</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  );
}

export default Header;
