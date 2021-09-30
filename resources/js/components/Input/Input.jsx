import { PropTypes } from 'prop-types';
import { useCallback, useEffect, useRef } from 'react';
import { withForm } from '../Form/Form';

const Input = (props) => {
  const {
    setFormData, name, type, value, autoFocus,
  } = props;
  const ref = useRef();

  useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);

  const handleChange = useCallback(() => {
    setFormData(ref.current.name, ref.current.value);
  }, [setFormData]);

  return (
    <div className="form-group">
      <label htmlFor="myInput">Input {name}</label>
      <input
        ref={ref}
        className="form-control"
        name={name}
        type={type}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  setFormData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf([
    'text', 'submit', 'password',
  ]),
  autoFocus: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  type: 'text',
  autoFocus: false,
};

export default withForm(Input);
