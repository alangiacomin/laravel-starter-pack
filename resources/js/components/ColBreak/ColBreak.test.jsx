import { TestRender } from '@utils/testsUtils';
import ColBreak from './ColBreak';

describe('ColBreak', () => {
  it('render', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <ColBreak />,
        );
      },
      assert: () => {
        expectSelector('div').toBeDefined();
      },
    });
  });

  it('main class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <ColBreak />,
        );
      },
      assert: () => {
        expectSelector('div').toHaveClass('w-100');
      },
    });
  });

  it('no children rendered', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <ColBreak>test</ColBreak>,
        );
      },
      assert: () => {
        expectSelector('div').toHaveTextContent('');
      },
    });
  });
});
