

let background = { background: 'black' }

const NavbarComponent = () => {
  return (
    <>
        <nav style={background} className="navbar navbar-expand-md navbar-dark">
            <div className="container">
                <img src="/images/logo.png" className="navbar-logo" alt="scott_logo"/>
                <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                    <span className="menu-icon-bar"></span>
                    <span className="menu-icon-bar"></span>
                    <span className="menu-icon-bar"></span>
                </button>
                <div id="main-nav" className="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li><a href="index.html" className="nav-item nav-link active">Inicio</a></li>
                        <li><a href="productos.html" className="nav-item nav-link">Productos</a></li>
                        <li><a href="contacto.html" className="nav-item nav-link">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default NavbarComponent;
