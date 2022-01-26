import { PackageJson } from 'type-fest';
import path from 'path';
import fs from 'fs';

export interface Template {
  name: string;
  directory: string;
  pkgJson: PackageJson;
}

/** A blacklist of examples that will not be included as templates */
export const blacklist = ['cra'];

export async function getTemplates(templatesFolder: string) {
  const ans: Template[] = [];
  for (const subFolder of fs.readdirSync(templatesFolder)) {
    if (blacklist.includes(subFolder)) continue;

    const templateFolder = path.join(templatesFolder, subFolder);
    const pkgJson: PackageJson = JSON.parse(fs.readFileSync(path.join(templateFolder, 'package.json')).toString());
    ans.push({
      directory: templateFolder,
      pkgJson,
      // `@speedy-js/vue2-example` -> vue2-example
      name: pkgJson.name?.replace(/^@.*\//, '') ?? '',
    });
  }
  return ans;
}
export async function renderTemplate(src: string, dest: string, pkgName?: string, dep = 0) {
  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    // skip node_module
    const basename = path.basename(src);
    if (basename === 'node_modules' || basename === 'dist' || basename === '.rush') {
      return;
    }

    // if it's a directory, render its subdirectories and files recursively
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      renderTemplate(path.resolve(src, file), path.resolve(dest, file), pkgName, dep + 1);
    }
    return;
  }

  if (src.endsWith('.log')) return;
  const filename = path.basename(src);

  if (filename.startsWith('_')) {
    // rename `_file` to `.file`
    dest = path.resolve(path.dirname(dest), filename.replace(/^_/, '.'));
  }

  fs.copyFileSync(src, dest);
}
