# dile-pages

Simple iron-pages adaptation for LitElement. 

This element is used to show one of several "pages". The pages are the direct children elements of the component. In brief, this component only shows one of it's children elements, and is able to interchange the active children with a simple animation.

## Properties

You can use 2 properties to configure the current active page:

- selected: A string to select the active page.
- attrForSelected (optional): A string with the attribute name in the page elements to match with "selected" property.

If you don't provide a value to attrForSelected property, "selected" will be matched to the index of the page (selected=0 corresponds to the first page, selected=1 to the second... )

## Example

In the example bellow the active page will be the third: the div with the attribute name="page3".

```
<dile-pages selected="page3" attrforselected="name">
  <div name="page1">
    <h2>Page 1</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi atque, et quaerat vero saepe maiores, maxime dolore officiis earum cumque temporibus tenetur, possimus deserunt magni itaque! Reiciendis, assumenda quo?</p>
  </div>
  <div name="page2">
    <h2>Page 2</h2>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi atque, et quaerat vero saepe maiores, maxime dolore officiis earum cumque temporibus tenetur, possimus deserunt magni itaque! Reiciendis, assumenda quo?</p>
  </div>
  <div name="page3">
    <h2>Page three</h2>
    <p>Just another page</p>
  </div>
</dile-pages>
```

The next example will show the third children, the div element with the H2 heading "Page three". Note you can use any tag as page.

```
<dile-pages selected="2">
  <span>
    <h2>Page 1</h2>
  </span>
  <article>
    <h2>Page 2</h2>
  </article>
  <div>
    <h2>Page three</h2>
  </div>
</dile-pages>
```