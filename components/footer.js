class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <h2 class="visually-hidden">Social Accounts</h2>
      <ul class="social-accounts">
          <li><a href="mailto:info@itlive.iq" target="_blank"><img src="./assets/icons/email.svg" alt="Email"></a></li>
          <li><a href="https://fb.com/itliveforum" target="_blank"><img src="./assets/icons/facebook.svg" alt="Facebook"></a></li>
          <li><a href="https://instagram.com/itlive.iq" target="_blank"><img src="./assets/icons/instagram.svg" alt="Instagram"></a></li>
      </ul>
      <p> &copy; IT.LIVE ${new Date().getFullYear()}</p>
      <p>Developed by <a href="https://bio.link/pilot_m5" target="_blank">Mohammed Mahdi</a></p>
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
