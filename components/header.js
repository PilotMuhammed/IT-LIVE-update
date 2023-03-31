class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <header>
        <h1 class="website-logo">
            <a href="/">it.live</a>
        </h1>
        <button class="menu-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="Menu">
            <span class="visually-hidden">Menu</span>
            <div class="hamburger" aria-hidden="true"></div>
        </button>
        <nav class="primary-menu" id="primary-navigation" data-state="closed">
            <ul class="primary-navigation">
                <li class="menu-item"><a href="/">home</a></li>
                <li class="menu-item"><a href="./news.html">news</a></li>
                <li class="menu-item"><a href="./about.html">about</a></li>
            </ul>

            <a href="./register.html" class="login prim txt btn">register</a>

            <div class="website-languages">
                <button class="languages-toggle" aria-expanded="false" aria-controls="languages-list" aria-label="Languages">
                    <span class="visually-hidden">Languages</span>
                    <img src="./icon/world.svg" alt="world icon" />
                </button>
                <ul class="languages-list" id="languages-list" data-state="closed">
                    <li><a href="">عربي</a></li>
                    <li><a href="">كوردي</a></li>
                    <li><a href="">english</a></li>
                </ul>
            </div>

            <p class="copyrights">&copy; it.live ${new Date().getFullYear()}</p>
        </nav> 
    </header>
      `;
    }
  }

  customElements.define('header-component', Header);
