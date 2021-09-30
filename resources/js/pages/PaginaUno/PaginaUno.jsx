import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/LayoutMain';
import Modale from '../../components/Modale';
import routes from '../../config/routes';

const PaginaUno = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState('');

  const apriModale = () => {
    setMessage('');
    setOpenModal(true);
  };

  const confermaModale = () => {
    setMessage('Hai confermato la modale');
    setOpenModal(false);
  };

  const annullaModale = () => {
    setMessage('Hai annullato la modale');
    setOpenModal(false);
  };

  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <LayoutMain>
      <h1>PAGINA UNO</h1>
      <p><Link to="/">Pagina uno</Link></p>
      <p><Link to={routes.secondPage.to}>Pagina due</Link></p>
      <p>Auth : <a href="auth0/login">Login</a> - <a href="auth0/logout">Logout</a></p>
      <p>
        <button
          type="button"
          className="button btn button-primary btn-primary"
          onClick={apriModale}
        >
          Apri modale
        </button>
      </p>
      <p>
        <button
          type="button"
          className="button btn button-primary btn-primary"
          onClick={reloadPage}
        >
          Ricarica
        </button>
      </p>
      <p>{message}</p>
      <Modale
        show={openModal}
        onConfirm={confermaModale}
        onCancel={annullaModale}
        title="Titolo modale"
        confirmTitle="Conferma"
        cancelTitle="Annulla"
      >
        Qui corpo modale
      </Modale>
    </LayoutMain>
  );
};

export default PaginaUno;
