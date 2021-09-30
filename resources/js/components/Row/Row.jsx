import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const Row = ({ className, children }) => {
  const rowClassName = classNames(
    'row',
    className,
  );
  return (
    <div className={rowClassName}>
      {children}
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Row.defaultProps = {
  className: null,
};

export default Row;
