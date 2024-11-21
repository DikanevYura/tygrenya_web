/* eslint-disable node/handle-callback-err */
import * as fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { glob } from 'glob';
import pretty from 'pretty';
import SVGSpriter from 'svg-sprite';
import File from 'vinyl';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dest = path.join(__dirname);

const ICON_PREFIX = 'icon-';

const spriter = new SVGSpriter({
  dest,
  shape: {
    id: {
      // SVG shape ID related options
      separator: '--', // Separator for directory name traversal
      generator(svg) {
        return `${ICON_PREFIX}${svg.replace('.svg', '')}`;
      }, // SVG shape ID generator callback
      pseudo: '~', // File name separator for shape states (e.g. ':hover')
      whitespace: '_', // Whitespace replacement for shape IDs
    },
  },
  mode: {
    symbol: {
      inline: true,
      render: {
        css: true,
      },
    },
  },
});

const cwd = path.join(__dirname, './icons');

// Find SVG files recursively via `glob`
const files = glob.sync('**/*.svg', { cwd });

for (const file of files) {
  // Create and add a vinyl file instance for each SVG
  spriter.add(
    new File({
      path: path.join(cwd, file), // Absolute path to the SVG file
      base: cwd, // Base path (see `name` argument)
      contents: fs.readFileSync(path.join(cwd, file)), // SVG file contents
    }),
  );
}

const iconTmp = (tsTypes) => {
  const subsctrg = '`';
  const prefstring = `${subsctrg}#${ICON_PREFIX}\${name}${subsctrg}`;
  return `import React, { forwardRef } from 'react';

import { cn } from '@/libs/cn';

export type SvgProps = {
  name: ${tsTypes};
  size?: string | number;
  className?: string;
  strokeWidth?: string | number;
  absoluteStrokeWidth?: boolean;
};

const Icon = forwardRef<SVGSVGElement, SvgProps>(
  (
    { name, size = 16, strokeWidth = 2, absoluteStrokeWidth, className },
    ref,
  ) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      className={cn('', className)}
      strokeWidth={
        absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth
      }
      name={${prefstring}}
    >
      <use xlinkHref={${prefstring}} />
    </svg>
  ),
);

Icon.displayName = 'Icon';
export { Icon };
`;
};

const spriteTmp = (svgTmp) => {
  return `/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { FC } from 'react';
import React from 'react';

export type SpriteProps = {
  className?: string;
};

const svgIcon
  = '${svgTmp}';

export const Sprite: FC<SpriteProps> = ({ className }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgIcon }}
    />
  );
};
`;
};

const spriteJsTmp = (svgTmp) => {
  return `const svgIcon =
  '${svgTmp}';

export default svgIcon;
`;
};

const indexTmp = (name) => {
  return `export { Icon } from './Icon';
  export type { SvgProps } from './Icon';
export { ${name} } from './${name}';
`;
};

const componentsPath = path.join(__dirname, '../src/components');
const NAME = 'Sprite';

spriter.compile(async (error, result, data) => {
  // Get the sprite contents and convert it to a string
  const contents = result.symbol.sprite.contents.toString();

  const spriteDirPath = path.join(componentsPath, `${NAME}`);
  fs.mkdirSync(spriteDirPath, { recursive: true });

  // Create a new component with the generated sprite

  const { shapes } = data.symbol;
  const tsNames = shapes
    .map(shape => `'${shape.name.replace(ICON_PREFIX, '')}'`)
    .join(' | ');
  const iconPath = path.join(componentsPath, `${NAME}/Icon.tsx`);
  await fs.writeFileSync(iconPath, iconTmp(tsNames));

  // Create a new component with the generated sprite
  const spritePath = path.join(componentsPath, `${NAME}/${NAME}.tsx`);
  await fs.writeFileSync(spritePath, spriteTmp(contents));

  // Create a new index with the generated sprite exports
  const indexPath = path.join(componentsPath, `${NAME}/index.ts`);
  await fs.writeFileSync(indexPath, indexTmp(NAME));

  // Create a new js file with the generated sprite in simple variable (used in storybook)
  const jsPath = path.join(dest, `${NAME.toLowerCase()}.utils.ts`);
  await fs.writeFileSync(jsPath, spriteJsTmp(contents));

  // Create a new svg file with the generated sprite and pretty html
  const svgPath = path.join(dest, `${NAME.toLowerCase()}.read.svg`);
  await fs.writeFileSync(svgPath, pretty(contents));
});
