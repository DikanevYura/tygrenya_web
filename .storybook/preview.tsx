/* eslint-disable @next/next/no-page-custom-font */
import '../src/styles/global.css';

import type { Preview } from '@storybook/react';
import React from 'react';

import { Toaster } from '@/components';

import { Sprite } from '../src/components/Sprite';

export const GlobalStyleDecorator = (Story: any) => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.cdnfonts.com/css/adlery-pro" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />

    <style>
      {`
        :root {
          --font-openSans: 'OpenSans', sans-serif;
        }

        body {
          font-family: var(--font-openSans);
        }

      `}
    </style>
    <Story />
  </>
);
const preview: Preview = {
  globals: {
    locales: {
      en: 'English',
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    GlobalStyleDecorator,
    Story => (
      <div>
        <Sprite />
        <Toaster />
        <Story />
      </div>
    ),
  ],
};

export default preview;
