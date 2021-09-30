/*

// import { PropTypes } from 'prop-types';
import { useCallback } from 'react';

const ErrorBoundaryComponent = (props) => {
  // const { homepageRoute } = props;
  const reload = useCallback((event) => { event.preventDefault(); window.location.reload(); }, []);
  return (
    <section className="errorboundary">
      <h1>Ops! Si è rotto qualcosa</h1>
      <h2>Errore imprevisto</h2>
      <a href="/" onClick={reload}>Ricarica pagina</a>
    </section>
  );
};

// ErrorBoundaryComponent.propTypes = {
//   homepageRoute: PropTypes.string.isRequired,
// };

export default ErrorBoundaryComponent;

*/

// In tests that you expect errors

import { useEffect } from 'react';
import { TestRender } from '@utils/testsUtils';
import ErrorBoundary from './ErrorBoundary';

jest.spyOn(console, 'error');
console.error.mockImplementation(() => null); // eslint-disable-line no-console

describe('ErrorBoundary', () => {
  it('render children', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <ErrorBoundary>
            <div>my content</div>
          </ErrorBoundary>,
        );
      },
      assert: () => {
        expectSelector('div').toContainHTML('my content');
      },
    });
  });

  it('render error', () => {
    const { render, expectSelector, execute } = TestRender();
    // eslint-disable-next-line react/prop-types
    const ComponentWithError = ({ myvar }) => {
      // eslint-disable-next-line react/prop-types
      useEffect(() => myvar.first.second, [myvar]);
      return (<div>my content</div>);
    };
    execute({
      act: () => {
        render(
          <ErrorBoundary>
            <ComponentWithError />
          </ErrorBoundary>,
        );
      },
      assert: () => {
        expectSelector('section').toContainHTML('Errore imprevisto');
      },
    });
  });

  xit('reload page', () => {
    jest.mockReportError.mockResolvedValueOnce({ success: true });
    const {
      render, getLocation, execute,
    } = TestRender();
    // eslint-disable-next-line react/prop-types
    const ComponentWithError = ({ myvar }) => {
      // eslint-disable-next-line react/prop-types
      useEffect(() => myvar.first.second, [myvar]);
      return (<div>my content</div>);
    };
    execute({
      act: () => {
        render(
          <ErrorBoundary>
            <ComponentWithError />
          </ErrorBoundary>,
        );
        // console.log('CONTAINER >> ', getContainer());
        // const cont = getSelector('div');
        // console.log('CONT >> ', cont);
        // const sec = getSelector('section');
        // console.log('SEC >> ', sec);
        // const link = getSelector('section > p > a.reloadLink');
        // console.log('LINK >> ', link);
        // const a = getSelector('a');
        // console.log('A >> ', a);
        // fireEvent.click(link);
      },
      assert: () => {
        // const error = expect.any(Error);
        // const errorInfo = { componentStack: expect.stringContaining('Bomb') };
        // expect(mockReportError).toHaveBeenCalledWith(error, errorInfo);
        // expect(mockReportError).toHaveBeenCalledTimes(1);

        expect(getLocation().pathname).toEqual('/login');
      },
    });
  });
});
