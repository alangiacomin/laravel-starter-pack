import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useEffect, useRef } from 'react';
import { Types } from '../../utils/componentsHelper';
import { withForm } from '../Form/Form';

const Button = (props) => {
  const {
    disabled, autoFocus, children, outline, variety, onClick, submit, className,
  } = props;

  const ref = useRef();

  useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);

  const cn = classNames(
    'btn',
    variety && `btn${outline ? '-outline' : ''}-${variety}`,
    className,
  );

  return (
    <button
      ref={ref}
      type={submit ? 'submit' : 'button'}
      className={cn}
      disabled={disabled}
      onClick={onClick}
    >{children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  children: Types.children,
  outline: PropTypes.bool,
  submit: PropTypes.bool,
  variety: PropTypes.string,
  onClick: PropTypes.func,
  className: Types.className,
};

Button.defaultProps = {
  disabled: false,
  autoFocus: false,
  outline: false,
  variety: '',
  submit: false,
  onClick: null,
  children: null,
  className: null,
};

export default withForm(Button);
