import { PropTypes } from 'prop-types';
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;

    const reloadPage = (event) => {
      event.preventDefault();
      window.location.reload();
    };

    return !hasError
      ? children
      : (
        <section className="errorboundary">
          <h1>Ops!</h1>
          <h2>Errore imprevisto</h2>
          <p><a className="reloadLink" href="/" onClick={reloadPage}>Ricarica pagina</a></p>
          <p className="details">
            {error && error.toString()}
            <br />
            {errorInfo && errorInfo.componentStack}
          </p>
        </section>
      );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorBoundary;
