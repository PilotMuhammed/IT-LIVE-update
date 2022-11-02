class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <nav>
        <a href="/" class="nav-logo">
            it.live
        </a>

        <div class="nav-items">
            <a class="nav-item" href="/">home</a>
                <a class="nav-item" href="./speakers.html">speakers</a>
                <a class="nav-item" href="./about.html">about</a>
        </div>

        <div class="nav-btns">
            <a href="./register.html" class="login prim txt btn">register</a>
            <label class="lang click btn" for="langClick">
                <input type="checkbox" id="langClick"/>
                <img src="./icon/world.svg" alt="world_icon" />
                    <!-- LANG LIST -->
                <ul class="lang-list">
                    <li><a href="#">عربي</a></li>
                    <li><a href="#">كوردي</a></li>
                    <li><a href="#">english</a></li>
                </ul>
            </label>
        </div>

        <!--    MOBILE NAV    -->
        <label class="mobil-nav">
            <input type="checkbox" class="mobile-nav-click"/>
            <div class="toggle">
                <span class="top_line common"></span>
                <span class="bottom_line common"></span>
            </div>
        
            <div class="mobil-nav-slide">
                <a href="./register.html" class="login prim txt btn">register</a>
                <span>
                <a class="nav-item" href="/">home</a>
                <a class="nav-item" href="./speakers.html">speakers</a>
                <a class="nav-item" href="./about.html">about</a>
                </span>
                <hr>
                <ul class="mobil-lang-list">
                    <li><a href="#">english</a></li>
                    <li><a href="#">كوردي</a></li>
                    <li><a href="#">عربي</a></li>
                </ul>

                <p class="copyrights">&copy; it.live 2023</p>
            </div>
        </label>
    </nav>
      `;
    }
  }

  customElements.define('header-component', Header);
