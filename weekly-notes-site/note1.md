# Notes from Week 1

## HTML

- **Hyper Text Markup Language** (not a programming language — it's a markup language).
- A simple framework.
- Body should have `header`, `main`, and `footer`.
- `nav` element – contains menu links.
- `a` element – contains hyperlink.  
  Example: `<a href="index.html">Home</a>`

## CSS

- **Cascading Style Sheets** – language used to style a document.
- Can customize pages for different screen sizes.
- CSS selectors are patterns used to target HTML elements.  
  Example: `.greeting` targets `<p class="greeting">Hello, world!</p>`
- To use multiple selectors, just add a comma between them.
- **CSS Combinators** define relationships between selectors.  
  Example:
  - `div p` – selects all `<p>` inside any `<div>`  
  - `div > p` – selects only direct children
- **Pseudo Element** – targets element states or positions without needing a class.  
  Example: `:hover`, `:first-child`

## JavaScript

- JavaScript is usually called at the end of an HTML document, but you can defer it at the top.  
  Example:
  ```html
  <script type="text/javascript" src="chat-widget.js" defer></script>
  ```

## DOM (Document Object Model)

- A programming interface that represents the web page as a tree:
  - Root: `<html>`
  - Branches/leaves: `<body>`, `<div>`, `<p>`, etc.
- Lets developers:
  - Access/change HTML:  
    `document.getElementById("myDiv").textContent = "Hello!"`
  - Add/remove elements
  - Handle events (clicks, form submissions)
  - Dynamically change CSS

Example:

```html
<p id="demo">Hello</p>
<button onclick="changeText()">Click me</button>

<script>
  function changeText() {
    document.getElementById("demo").textContent = "You clicked the button!";
  }
</script>
```