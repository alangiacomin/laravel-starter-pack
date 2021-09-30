import { TestRender } from '@utils/testsUtils';
import Col from './Col';

describe('Col', () => {
  it('render', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Col>test</Col>,
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
          <Col>test</Col>,
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
          <Col>test</Col>,
        );
      },
      assert: () => {
        expectSelector('div').toHaveClass('col');
      },
    });
  });

  it('additional string class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Col className="myClass">test</Col>,
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
          <Col className={{ myClass: true }}>test</Col>,
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
          <Col className={{ myClass: false }}>test</Col>,
        );
      },
      assert: () => {
        expectSelector('div').not.toHaveClass('myClass');
      },
    });
  });
});
