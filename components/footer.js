class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
      <div>
          <a href="mailto:info@itlive.iq" target="_blank">info@itlive.iq</a>
          <a href="https://fb.com/itliveforum" target="_blank">facebook</a>
          <a href="https://instagram.com/itlive.iq" target="_blank">instagram</a>
      </div>
      <div>developed by <a href="https://bio.link/pilot_m5" target="_blank">muhammed mahdi</a></div>
      </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);