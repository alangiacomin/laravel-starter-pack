import { PropTypes } from 'prop-types';
import LayoutMain from '../../components/LayoutMain';
import { upperFirst } from '../../utils/stringHelper';

const Errore = (props) => {
  const { errorCode } = props;
  const getDescription = (code) => {
    switch (code) {
      case 403:
        return upperFirst('unauthorized');
      case 404:
        return upperFirst('page_not_found');
      default:
        return upperFirst('undefined_error');
    }
  };
  return (
    <LayoutMain>
      <h1>ERRORE</h1>
      <div className="col-xl-9 mx-auto">
        <h2 className="mb-5">
          {getDescription(errorCode)}
        </h2>
      </div>
    </LayoutMain>
  );
};

Errore.propTypes = {
  errorCode: PropTypes.number,
};

Errore.defaultProps = {
  errorCode: 0,
};

export default Errore;
