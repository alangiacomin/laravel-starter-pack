import { fireEvent } from '@testing-library/react';
import { TestRender } from '@utils/testsUtils';
import Button from './Button';

describe('Button', () => {
  it('render', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button />,
        );
      },
      assert: () => {
        expectSelector('button').toBeDefined();
      },
    });
  });

  it('main class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button />,
        );
      },
      assert: () => {
        expectSelector('button').toHaveClass('btn');
      },
    });
  });

  it('variety class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button variety="primary" />,
        );
      },
      assert: () => {
        expectSelector('button').toHaveClass('btn-primary');
      },
    });
  });

  it('variety class with outline', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button variety="primary" outline />,
        );
      },
      assert: () => {
        expectSelector('button').toHaveClass('btn-outline-primary');
      },
    });
  });

  it('custom class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button className="myCustomClass" />,
        );
      },
      assert: () => {
        expectSelector('button').toHaveClass('myCustomClass');
      },
    });
  });

  it('type button', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button />,
        );
      },
      assert: () => {
        expectSelector('button').toHaveAttribute('type', 'button');
      },
    });
  });

  it('type submit', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button submit />,
        );
      },
      assert: () => {
        expectSelector('button').toHaveAttribute('type', 'submit');
      },
    });
  });

  it('disabled', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button disabled />,
        );
      },
      assert: () => {
        expectSelector('button').toBeDisabled();
      },
    });
  });

  it('not disabled', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button />,
        );
      },
      assert: () => {
        expectSelector('button').not.toBeDisabled();
      },
    });
  });

  it('autoFocus not set', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button />,
        );
      },
      assert: () => {
        expectSelector('button').not.toHaveFocus();
      },
    });
  });

  it('autoFocus set', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Button autoFocus />,
        );
      },
      assert: () => {
        expectSelector('button').toHaveFocus();
      },
    });
  });

  it('click', () => {
    const {
      render, getSelector, execute,
    } = TestRender();
    const myClickFunc = jest.fn();
    execute({
      act: () => {
        render(
          <Button onClick={myClickFunc} />,
        );
        const button = getSelector('button');
        fireEvent.click(button);
      },
      assert: () => {
        expect(myClickFunc).toHaveBeenCalledTimes(1);
      },
    });
  });
});
