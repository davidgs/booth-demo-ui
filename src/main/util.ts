/* eslint-disable no-console */
/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import { URL } from 'url';
import path from 'path';

export let resolveHtmlPath: (htmlFileName: string) => string;

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;
  resolveHtmlPath = (htmlFileName: string) => {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    console.log('url', url.href);
    return url.href;
  };
} else {
  resolveHtmlPath = (htmlFileName: string) => {
    const p = path.resolve(__dirname, '../renderer/', htmlFileName);
    console.log('process.resourcesPath', { p });
    return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
  };
}
