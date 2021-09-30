import { PropTypes } from 'prop-types';
import { createContext, useCallback } from 'react';
import { Types } from '../../utils/componentsHelper';

const FormContext = createContext({ });

const Form = (props) => {
  const {
    data, setData, onSubmit, children,
  } = props;

  const setFormData = useCallback((name, value) => {
    setData({ ...data, [name]: value });
  }, [data, setData]);

  const handleSubmit = useCallback((event) => {
    onSubmit();
    event.preventDefault();
  }, [onSubmit]);

  return (
    <FormContext.Provider value={{ setFormData }}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

const withForm = (Wrapped) => {
  const WrappedConsumer = (props) => (
    <FormContext.Consumer>
      {(context) => (<Wrapped {...props} {...context} />)}
    </FormContext.Consumer>
  );
  return WrappedConsumer;
};

Form.propTypes = {
  data: PropTypes.shape({}),
  setData: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: Types.children.isRequired,
};

Form.defaultProps = {
  data: {},
};

export {
  Form as default,
  withForm,
};
