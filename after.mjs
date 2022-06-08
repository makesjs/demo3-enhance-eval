import path from 'path';
import fs from 'fs';

export default async function({here, properties}) {
  const {name} = properties;
  const indexFilePath = here ? 'index.html' : path.join(name, 'index.html');
  const index = fs.readFileSync(indexFilePath, 'utf8');

  console.log(`
==================================================================
The final generated index.html:

${index}
==================================================================
`);
};
