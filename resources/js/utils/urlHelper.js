import { trimStart } from './stringHelper';

const absoluteUrl = (path) => `${window.baseurl}/${trimStart(path, '/')}`;

const assetsUrl = (path) => `${absoluteUrl('assets')}/${trimStart(path, '/')}`;

export {
  absoluteUrl,
  assetsUrl,
};
