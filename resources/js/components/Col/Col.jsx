import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const Col = ({ className, children }) => {
  const colClassName = classNames(
    'col',
    className,
  );
  return (
    <div className={colClassName}>
      {children}
    </div>
  );
};

Col.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Col.defaultProps = {
  className: null,
};

export default Col;
