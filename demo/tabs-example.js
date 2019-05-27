import { LitElement, html } from 'lit-element';

export class TabsExample extends LitElement {
  static get properties() {
    return {
      currentPage: { type: String }
    };
  }

  constructor() {
    super();
    this.currentPage = 'page3';
  }

  render() {
    return html`
    <nav>
      <button @click="${this.changePage}" data="page1">Page 1</button>
      <button @click="${this.changePage}" data="page2">Page 2</button>
      <button @click="${this.changePage}" data="page3">Page 3</button>
      <button @click="${this.changePage}" data="more">More...</button>
    </nav>
    <dile-pages selected="${this.currentPage}" attrforselected="name" id="pages">
    </dile-pages>
    `;
  }

  firstUpdated() {
    this.shadowRoot.getElementById('pages').initializeExternalPages(this.innerHTML);
  }

  changePage(e) {
    console.log(e.target.getAttribute('data')); 
    this.currentPage = e.target.getAttribute('data');
  }
}
customElements.define('tabs-example', TabsExample);