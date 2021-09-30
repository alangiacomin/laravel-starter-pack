import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { Types } from '../../utils/componentsHelper';
import Button from '../Button';
import './Modale.scss';

const Modale = (props) => {
  const {
    show, onCancel, onConfirm, children, cancelTitle, confirmTitle, title,
  } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  const handleCancel = useCallback(() => {
    setVisible(false);
    onCancel();
  }, [onCancel]);

  const handleConfirm = useCallback(() => {
    setVisible(false);
    onConfirm();
  }, [onConfirm]);

  const cn = classNames(
    'modal',
    { show: visible },
    { 'd-block': visible },
  );

  if (!visible) {
    return null;
  }
  return (
    <>
      <div className="modale__overlay" />
      <div className={cn}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <Button className="close" onClick={handleCancel}>
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              {cancelTitle
                && <Button variety="secondary" onClick={handleCancel}>{cancelTitle}</Button>}
              <Button variety="primary" autoFocus onClick={handleConfirm}>{confirmTitle}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modale.propTypes = {
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: Types.children.isRequired,
  cancelTitle: PropTypes.string,
  confirmTitle: PropTypes.string.isRequired,
};

Modale.defaultProps = {
  cancelTitle: null,
};

export default Modale;
