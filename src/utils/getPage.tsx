import { getBundles } from 'react-loadable/webpack';
import React from 'react';
import { getScript, getStyle } from './bundle';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';

export default function getPage({
  store,
  url,
  Component,
  page
}) {
  const stats = require('../../dist/public/react-loadable.json');
  const manifest = require('../../dist/public/manifest.json');
  const mainjs = getScript(manifest[`${page}.js`]);
  const maincss = getStyle(manifest[`${page}.css`]);

  if(!Component && !store) {
    return {
      html: '',
      scripts: mainjs,
      styles: maincss,
      __INIT_PROPS__: '{}'
    }
  }

  let modules = [];

  const dom = (
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Component url={url} store={store} />
    </Loadable.Capture>
  );
    const html = renderToString(dom);let bundles = getBundles(stats, modules);
    const styles = bundles
      .filter(bundle => bundle && bundle.file.endsWith('.css'))
      .map(bundle => getStyle(bundle.publicPath))
      .concat(maincss)
      .join('\n');
    const scripts = bundles
      .filter(bundle => bundle && bundle.file.endsWith('.js'))
      .map(bundle => getScript(bundle.publicPath))
      .concat(mainjs)
      .join('\n');
    return {
      html,
      __INIT_PROPS__: JSON.stringify(store.getState()),
      scripts,
      styles
    };
} 