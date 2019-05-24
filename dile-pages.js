import { LitElement, html } from 'lit-element';

export class DilePages extends LitElement {
  static get properties() {
    return {
      attrForSelected: { type: String },
      selected: { type: String },
    };
  }
  render() {
    return html`
    <slot></slot>
    `;
  }

  constructor() {
    super();
    this.transitionTime = 1000;
    this.selected = 0;
    this._pageInitialization();
  }

  _pageInitialization() {
    this.pages = [];
    console.log(this.transitionTime, `opacity ${this.transitionTime}ms`);

    let pages = this.children;
    for (let ele of pages) {
      ele.style.display = 'none';
      ele.style.transition = `opacity ${this.transitionTime}ms`;
      ele.style.opacity = '0';
      this.pages.push(ele);
    }
  }

  firstUpdated() {
    let page = this._selectPage(this.selected, this.attrForSelected);
    if(page) {
      page.style.display = 'block';
    }
  }

  updated(changedProperties) {
    console.log(changedProperties);
    if(this._updatedAndNotUndefined(changedProperties, 'selected') || this._updatedAndNotUndefined(changedProperties, 'attrForSelected') ) {
      let lastSelected = this._getLastValueProperty(changedProperties, 'selected');
      let lastAttrForSelected = this._getLastValueProperty(changedProperties, 'attrForSelected');
      this.hidePage(lastSelected, lastAttrForSelected);
    }
    this._showCurrentPage();
  }

  _selectPage(selected, attrForSelected) {
    let page;
    if(!attrForSelected) {
      page = this.pages[selected];
    } else {
      for(let ele of this.pages) {
        if(ele.getAttribute(attrForSelected) == selected) {
          page = ele;
          break;
        }
      }
    }
    return page;
  }

  _showCurrentPage() {
    let page = this._selectPage(this.selected, this.attrForSelected)
    console.log('updatePages', this.attrForSelected, this.selected, page);
    if(page) {
      page.style.display = 'block';
      setTimeout(() => {
        page.style.opacity = '1';
      }, 50);
    }
  }

  hidePage(selected, attrForSelected) {
    let page = this._selectPage(selected, attrForSelected)
    if(page) {
      page.style.display = 'none';
      page.style.opacity = '0';
    }
  }
  
  _updatedAndNotUndefined(changedProperties, field) {
    console.log('_updatedNotUndefined:', field, changedProperties.has(field), changedProperties.get(field))
    return (changedProperties.has(field) && changedProperties.get(field) != undefined)
  }

  _getLastValueProperty(changedProperties, field) {
    return (changedProperties.has(field)) ? changedProperties.get(field) : this[field];
  }
}
customElements.define('dile-pages', DilePages);