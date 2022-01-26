import path from 'path';
import { getTemplates, renderTemplate } from './template';

const srcTemplatesFolder = '../apps';
getTemplates(srcTemplatesFolder).then((templates) => {
  const destTemplatesFolder = path.join(__dirname, 'templates');
  templates.forEach((template) =>
    renderTemplate(template.directory, path.join(destTemplatesFolder, path.basename(template.directory)))
  );
});
