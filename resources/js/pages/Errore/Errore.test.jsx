import { TestRender } from '@utils/testsUtils';
import useTranslation from '../../hooks/useTranslation';
import Errore from './Errore';

jest.mock('../../hooks/useTranslation');
useTranslation.mockImplementation(() => ({ t: () => { } }));

xdescribe('Errore', () => {
  it('render default', () => {
    const { renderWrapped, execute, getContainer } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Errore />,
        );
      },
      assert: () => {
        const container = getContainer();
        expect(container).toContainHTML('Undefined_error');
      },
    });
  });

  it('render unauthorized', () => {
    const { renderWrapped, execute, getContainer } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Errore errorCode={403} />,
        );
      },
      assert: () => {
        const container = getContainer();
        expect(container).toContainHTML('Unauthorized');
      },
    });
  });

  it('render page not found', () => {
    const { renderWrapped, execute, getContainer } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Errore errorCode={404} />,
        );
      },
      assert: () => {
        const container = getContainer();
        expect(container).toContainHTML('Page_not_found');
      },
    });
  });
});
