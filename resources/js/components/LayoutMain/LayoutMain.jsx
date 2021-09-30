import { PropTypes } from 'prop-types';
import Container from '../Container';
import Navbar from '../Navbar';

const LayoutMain = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar
        colorSchema="dark"
        brand={{ to: '/', title: 'Mio Sito' }}
      />
      <Container>
        {children}
      </Container>
    </>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
