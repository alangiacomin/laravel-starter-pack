import { TestRender } from '@utils/testsUtils';
import Row from './Row';

describe('Row', () => {
  it('render', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Row>test</Row>,
        );
      },
      assert: () => {
        expectSelector('div').toBeDefined();
      },
    });
  });

  it('children', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Row>test</Row>,
        );
      },
      assert: () => {
        expectSelector('div').toHaveTextContent('test');
      },
    });
  });

  it('main class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Row>test</Row>,
        );
      },
      assert: () => {
        expectSelector('div').toHaveClass('row');
      },
    });
  });

  it('additional string class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Row className="myClass">test</Row>,
        );
      },
      assert: () => {
        expectSelector('div').toHaveClass('myClass');
      },
    });
  });

  it('additional true class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Row className={{ myClass: true }}>test</Row>,
        );
      },
      assert: () => {
        expectSelector('div').toHaveClass('myClass');
      },
    });
  });

  it('additional false class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Row className={{ myClass: false }}>test</Row>,
        );
      },
      assert: () => {
        expectSelector('div').not.toHaveClass('myClass');
      },
    });
  });
});
