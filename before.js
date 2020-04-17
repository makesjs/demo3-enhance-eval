
global.escapeHTML = require('escape-html');
//

module.exports = async function() {
  console.log(`
==================================================================
This demo shows how to inject a function as Nodejs global variable
in the before task (before.js).

  global.escapeHTML = require('escape-html');

Because before.js is loaded before preprocessing all skeleton files,
this global function is then available in the @eval directive.

It's then used in common/index.html as

  <h1><!--  @eval escapeHTML(name) --></h1>
  <p><!-- @eval escapeHTML(description) --></p>

To test this behaviour, just hit return key to accept the default
value of next question on "description".
==================================================================
`);
};
