import { TestRender } from '@utils/testsUtils';
import Container from './Container';

describe('Container', () => {
  it('render', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Container>test</Container>,
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
          <Container>test</Container>,
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
          <Container>test</Container>,
        );
      },
      assert: () => {
        expectSelector('div').toHaveClass('container');
      },
    });
  });

  it('additional string class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Container className="myClass">test</Container>,
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
          <Container className={{ myClass: true }}>test</Container>,
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
          <Container className={{ myClass: false }}>test</Container>,
        );
      },
      assert: () => {
        expectSelector('div').not.toHaveClass('myClass');
      },
    });
  });
});
