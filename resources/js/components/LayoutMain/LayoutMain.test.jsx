import { TestRender } from '@utils/testsUtils';
import useTranslation from '../../hooks/useTranslation';
import LayoutMain from './LayoutMain';

jest.mock('../../hooks/useTranslation');
useTranslation.mockImplementation(() => ({ t: () => { } }));

describe('LayoutMain', () => {
  it('render', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <LayoutMain>test</LayoutMain>,
        );
      },
      assert: () => {
        expectSelector('.nav').toBeDefined();
        expectSelector('.container').toBeDefined();
      },
    });
  });

  it('children', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <LayoutMain>test</LayoutMain>,
        );
      },
      assert: () => {
        expectSelector('.container').toHaveTextContent('test');
      },
    });
  });
});
