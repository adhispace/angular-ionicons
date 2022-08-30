import * as fs from 'fs-extra';
import * as upperCamelCase from 'uppercamelcase';
import * as del from 'del';

const iconsSourceDir = 'node_modules/ionicons/dist/ionicons/svg';
const iconsDestDir = `projects/angular-ionicons/icons`;
const indexFile = `projects/angular-ionicons/src/lib/icons.ts`;
const componentTemplate = fs.readFileSync(`${__dirname}\\icon-template.tpl`, 'utf-8');

(async () => { 
  const removeFileExtension = (str: string) => {
    return str.substr(0, str.lastIndexOf('.'));
  }
  await del([iconsDestDir, indexFile]);
  await fs.mkdirSync(iconsDestDir)
  fs.readdirSync(`${iconsSourceDir}`).forEach((filename: string) => {
      'use strict';
      const iconName = removeFileExtension(filename);
      const exportName = upperCamelCase(iconName);

      const svgContent = fs.readFileSync(`${iconsSourceDir}/${filename}`);
      const payload = String(svgContent).match(/^<svg[^>]+?>(.+)<\/svg>$/) || [];

      let output = componentTemplate
        .replace(/__EXPORT_NAME__/g, `Ion${exportName}`)
        .replace(/__ICON_NAME__/g, iconName)
        .replace(/__PAYLOAD__/, payload[1]);

      fs.writeFileSync(`${iconsDestDir}/${iconName}.ts`, output, 'utf-8');

      fs.appendFileSync(
        indexFile,
        `export { Ion${exportName} } from '../../icons/${iconName}';\n`
      );
    });
})()