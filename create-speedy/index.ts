#!/usr/bin/env node
/* eslint-disable no-return-assign */

/**
 * References:
 *
 * 1. [create-vite](https://github.com/vitejs/vite/blob/main/packages/create-vite/)
 * 2. [create-vue](https://github.com/vuejs/create-vue)
 */
import minimist from 'minimist';
import prompts from 'prompts';
import fs from 'fs';
import { yellow, green, cyan, blue, magenta, red } from 'kolorist';
import path from 'path';
import { getTemplates, renderTemplate, Template } from './template';

const argv = minimist(process.argv.slice(2), { string: ['_'] });

const colors = [yellow, green, cyan, blue, magenta];

async function init() {
  const cwd = process.cwd();

  let targetDir = argv._[0];
  let template = argv.template || argv.t;
  let force = argv.force || argv.f;

  const defaultProjectName = !targetDir ? 'speedy-project' : targetDir;

  const templatesFolder = path.join(__dirname, 'templates');
  const templates = await getTemplates(templatesFolder);
  const templateNames = templates.map((t) => t.name);
  const templateName2Template: Record<string, Template> = {};
  for (const templateObj of templates) {
    templateName2Template[templateObj.name] = templateObj;
  }

  try {
    await prompts(
      [
        {
          type: targetDir ? null : 'text',
          name: 'projectName',
          message: 'Project name:',
          initial: defaultProjectName,
          onState: (state) =>
            (targetDir = state.value.trim() || defaultProjectName),
        },
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) || force
              ? null
              : 'confirm',
          name: 'force',
          message: () =>
            `${
              targetDir === '.'
                ? 'Current directory'
                : `Target directory "${targetDir}"`
            } is not empty. Remove existing files and continue?`,
          onState: (state) => (force = state.value),
        },
        {
          type: () => {
            if (force === false) {
              throw new Error(`${red('✖')} Operation cancelled`);
            }
            return null;
          },
          name: 'overwriteChecker',
        },
        {
          type: () => (isValidPackageName(targetDir) ? null : 'text'),
          name: 'packageName',
          message: 'Package name:',
          initial: () => toValidPackageName(targetDir),
          validate: (dir) =>
            isValidPackageName(dir) || 'Invalid package.json name',
        },
        {
          type: template && templateNames.includes(template) ? null : 'select',
          name: 'template',
          message:
            typeof template === 'string' && !templateNames.includes(template)
              ? `"${template}" isn't a valid template. Please choose from below: `
              : 'Select a template:',
          initial: 0,
          choices: templateNames.map((templateName, idx) => ({
            title: colors[idx % colors.length](templateName),
            value: templateName,
          })),
          onState: (state) => (template = state.value.trim() || template),
        },
      ],
      {
        onCancel: () => {
          throw new Error(`${red('✖')} Operation cancelled`);
        },
      },
    );

    const root = path.join(cwd, targetDir);
    console.log(`\nScaffolding project in ${root}...`);
    if (force) {
      emptyDir(targetDir);
    }
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const { directory, name: pkgName } = templateName2Template[template];
    renderTemplate(directory, targetDir, pkgName);
    fs.copyFileSync(
      path.join(__dirname, '_gitignore'),
      path.join(targetDir, '.gitignore'),
    );

    console.log('\nDone. Now run:\n');
    const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
    const pkgManager = pkgInfo ? pkgInfo.name : 'npm';
    if (root !== cwd) {
      console.log(green(`  cd ${path.relative(cwd, root)}`));
    }
    switch (pkgManager) {
      case 'yarn':
        console.log(green('  yarn'));
        console.log(green('  yarn dev'));
        break;
      default:
        console.log(green(`  ${pkgManager} install`));
        console.log(green(`  ${pkgManager} run dev`));
        break;
    }
    console.log();
  } catch (cancelled) {
    console.log((cancelled as Error).message);
  }
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent?: string) {
  if (!userAgent) return undefined;
  const pkgSpec = userAgent.split(' ')[0];
  const pkgSpecArr = pkgSpec.split('/');
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  };
}

function isValidPackageName(projectName: string) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName,
  );
}

function toValidPackageName(projectName: string) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-');
}

function isEmpty(filepath: string) {
  return fs.readdirSync(filepath).length === 0;
}

function postOrderDirectoryTraverse(
  dir: string,
  dirCallback: (dirpath: string) => void,
  fileCallback: (filepath: string) => void,
) {
  for (const filename of fs.readdirSync(dir)) {
    const fullpath = path.resolve(dir, filename);
    if (fs.lstatSync(fullpath).isDirectory()) {
      postOrderDirectoryTraverse(fullpath, dirCallback, fileCallback);
      dirCallback(fullpath);
      continue;
    }
    fileCallback(fullpath);
  }
}

function emptyDir(dir: string) {
  if (!fs.existsSync(dir)) {
    return;
  }

  postOrderDirectoryTraverse(
    dir,
    (dirpath: string) => fs.rmdirSync(dirpath),
    (filepath: string) => fs.unlinkSync(filepath),
  );
}

init().catch((e) => {
  console.error(e);
});
