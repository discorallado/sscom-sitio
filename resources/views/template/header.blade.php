<div id="fh5co-header">
    <header id="fh5co-header-section">
        <div class="container">
            <div class="nav-header">
                <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
                <h1 id="fh5co-logo"><a href="index.html"><img src="images/logo.png" /></a></h1>
                <nav id="fh5co-menu-wrap" role="navigation">
                    <ul class="sf-menu" id="fh5co-primary-menu">
                        <li><a @if (request()->is('/')) class="active" @endif href="/">Inicio</a></li>
                        <li><a @if (request()->is('empresa')) class="active" @endif href="/empresa">Empresa</a></li>
                        <li><a @if (request()->is('servicios')) class="active" @endif href="/servicios">Servicios</a>
                        </li>
                        <li><a @if (request()->is('contacto')) class="active" @endif href="/contacto">Contacto</a>
                        </li>
                        <li><a href="#" class="call-to-action"><i class="icon-user"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</div>
