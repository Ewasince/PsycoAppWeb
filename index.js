const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('public/index.pug');

// Render a set of data
console.log(compiledFunction({
    name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
console.log(compiledFunction({
    name: 'Forbes'
}));
// "<p>Forbes's Pug source code!</p>"