import { LitElement, html } from 'lit-element';
import { DilePages } from '../dile-pages';

export class TabsExample extends DilePages {

  render() {
    return html`
    <nav>
      <button @click="${this.changePage}" data="page1">Page 1</button>
      <button @click="${this.changePage}" data="page2">Page 2</button>
      <button @click="${this.changePage}" data="page3">Page 3</button>
      <button @click="${this.changePage}" data="more">More...</button>
    </nav>
    <slot></slot>
    `;
  }

  
  changePage(e) {
    console.log(e.target.getAttribute('data')); 
    this.selected = e.target.getAttribute('data');
  }
}
customElements.define('tabs-example', TabsExample);