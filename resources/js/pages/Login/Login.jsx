/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLogin } from '../../apis/apiUser';
import Button from '../../components/Button';
import Col from '../../components/Col';
import Form from '../../components/Form';
import Input from '../../components/Input';
import LayoutMain from '../../components/LayoutMain';
import Row from '../../components/Row';
import { USER_ACTIONS } from '../../reducers/userReducer';

const Login = () => {
  const [loginData, setLoginData] = useState({
    // email: 'admin@admin.com',
    // password: 'password',
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const login = useCallback(() => {
    const { email, password } = loginData;
    setSubmitting(true);
    setErrorMessage('');
    postLogin(email, password)
      .then((response) => {
        if (response.success) {
          dispatch({ type: USER_ACTIONS.LOGGED_IN, payload: response.data });
        }
      })
      .catch((error) => {
        setSubmitting(false);
        if (error.response?.status !== 200) {
          setErrorMessage('Login fallito');
        }
      });
  }, [dispatch, loginData]);

  return (
    <LayoutMain>
      <h1>LOGIN</h1>
      <Row>
        <Col>
          <Form data={loginData} setData={setLoginData} onSubmit={login}>
            <Input name="email" autoFocus />
            <Input name="password" type="password" />
            <Button submit variety="primary" disabled={submitting}>Login</Button>
          </Form>
          <p>{errorMessage}</p>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default Login;
