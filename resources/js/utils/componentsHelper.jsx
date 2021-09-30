import { PropTypes } from 'prop-types';
import { lazy, Suspense } from 'react';

const Types = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const lazyLoadElement = (func, fallback) => {
  setTimeout(func, 1000);
  const LoadedComponent = lazy(func);
  return (props) => (
    <Suspense fallback={fallback || null}>
      <LoadedComponent {...props} />
    </Suspense>
  );
};

const lazyComponent = (indexPath, fallback) => {
  const currentDirPath = indexPath.replace('/index.jsx', '');
  const currentDirName = currentDirPath.substring(currentDirPath.lastIndexOf('/') + 1);
  const func = () => import(`@components/${currentDirName}/${currentDirName}`);
  return lazyLoadElement(func, fallback);
};

const lazyPage = (pageName, fallback) => {
  const func = () => import(`@pages/${pageName}/${pageName}`);
  return lazyLoadElement(func, fallback);
};

export {
  Types,
  lazyComponent,
  lazyPage,
};
