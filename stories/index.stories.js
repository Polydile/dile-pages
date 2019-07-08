import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import DilePages from '../dile-pages.js';
import '../dile-pages.js';

import readme from '../README.md';

storiesOf('dile-pages', module)
  .addDecorator(withKnobs)
  .add(
    'Select navigation',
    () => html`
      <select @change=${
        (e) => {
          let pages = document.getElementById('pages');
          pages.selected = e.target.value;
        }
      }>
        <option value="services">Services</option>
        <option value="products">Products</option>
        <option value="contact">Contact</option>
      </select>
      <dile-pages id="pages" attrForSelected="name" selected="services">
        <div name="services">
          <h1>Services page</h1>
          <p>This is the first section</p>
        </div>
        <div name="products">
          <h1>Our products</h1>
          <p>Web site second section</p>
        </div>
        <div name="contact">
          <h1>Contact</h1>
          <p>For support or for sending your satisfaction comments</p>
        </div>
      </dile-pages>
      `,
  )
  .add(
    'Links navigation',
    () => html`
      <a href="#" @click=${
        (e) => {
          e.preventDefault();
          document.getElementById('pages').selected = 'services';
        }
      }>Services</a> | 
      <a href="#" @click=${
        (e) => {
          e.preventDefault();
          document.getElementById('pages').selected = 'products';
        }
      }>Products</a> | 
      <a href="#" @click=${
        (e) => {
          e.preventDefault();
          document.getElementById('pages').selected = 'contact';
        }
      }>Contact</a> 
      <dile-pages id="pages" attrForSelected="name" selected="services">
        <div name="services">
          <h1>Services page</h1>
          <p>This is the first section</p>
        </div>
        <div name="products">
          <h1>Our products</h1>
          <p>Web site second section</p>
        </div>
        <div name="contact">
          <h1>Contact</h1>
          <p>For support or for sending your satisfaction comments</p>
        </div>
      </dile-pages>
      `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DilePages), { notes: { markdown: readme } })
