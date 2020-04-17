# demo3-enhance-eval

    npx makes makesjs/demo3-enhance-eval

This demo shows how to inject a function as Nodejs global variable
in the before task (before.js).

```js
global.escapeHTML = require('escape-html');
```

> Note you need a `package.json` file with `escape-html` npm module
in the `"dependencies"`, not `"devDependencies"`. Because this skeleton
needs that npm module at runtime.

Because before.js is loaded before preprocessing all skeleton files,
this global function is then available in the @eval directive.

It's then used in common/index.html as

```html
<h1><!--  @eval escapeHTML(name) --></h1>
<p><!-- @eval escapeHTML(description) --></p>
```
