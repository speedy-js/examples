import path from 'path';
import execa from 'execa';
import fs from 'fs';
import { test } from 'uvu';
import { getTemplates } from '../template';

test('create-speedy', async () => {
  const templates = await getTemplates(path.join(__dirname, '../templates'));

  for await (const template of templates) {
    // generate outputs in packages folder to avoid Phantom dependencies
    process.chdir(path.join(__dirname, '../..'));
    const targetFolder = `speedy-demo-${template.name}.local`;
    await execa(
      'node',
      [
        'create-speedy/index.js',
        targetFolder,
        '--template',
        template.name,
        '--force',
      ],
      {
        stdio: 'inherit',
      },
    );
    process.chdir(targetFolder);
    await execa('pnpm', ['install', '.', '--lockfile=false'], { stdio: 'inherit' });
    await execa('pnpm', ['build'], { stdio: 'inherit' });
  }
});

test.run();
