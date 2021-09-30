import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const Container = ({ className, children }) => {
  const containerClassName = classNames(
    'container',
    className,
  );
  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Container.defaultProps = {
  className: null,
};

export default Container;
