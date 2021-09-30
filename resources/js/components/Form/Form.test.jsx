import { fireEvent } from '@testing-library/react';
import { Fragment } from 'react';
import { TestRender } from '@utils/testsUtils';
import Input from '../Input/Input';
import Form from './Form';

const defaultProps = {
  data: {},
  setData: jest.fn(),
  onSubmit: jest.fn(),
  children: <Fragment />,
};

describe('Form', () => {
  it('render', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Form {...defaultProps} />,
        );
      },
      assert: () => {
        expectSelector('form').toBeDefined();
      },
    });
  });

  it('set data', () => {
    const {
      render, getSelector, execute,
    } = TestRender();
    const setData = jest.fn();
    execute({
      act: () => {
        render(
          <Form {...defaultProps} setData={setData}>
            <Input name="myInput" />
          </Form>,
        );
        const input = getSelector('input');
        fireEvent.change(input, { target: { value: 'testValue' } });
      },
      assert: () => {
        expect(setData).toHaveBeenCalledTimes(1);
      },
    });
  });

  it('submit', () => {
    const {
      render, getSelector, execute,
    } = TestRender();
    const submitFunc = jest.fn();
    execute({
      act: () => {
        render(
          <Form {...defaultProps} onSubmit={submitFunc} />,
        );
        const form = getSelector('form');
        fireEvent.submit(form);
      },
      assert: () => {
        expect(submitFunc).toHaveBeenCalledTimes(1);
      },
    });
  });

  /*

  it('main class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveClass('form-control');
      },
    });
  });

  it('type text (default)', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('type', 'text');
      },
    });
  });

  it('type text', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} type="text" />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('type', 'text');
      },
    });
  });

  it('type submit', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} type="submit" />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('type', 'submit');
      },
    });
  });

  it('type password', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} type="password" />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('type', 'password');
      },
    });
  });

  it('default value', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('value', '');
      },
    });
  });

  it('set value', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} value="testValue" />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('value', 'testValue');
      },
    });
  });

  it('autoFocus not set', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} />,
        );
      },
      assert: () => {
        expectSelector('input').not.toHaveFocus();
      },
    });
  });

  it('autoFocus set', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={jest.fn()} autoFocus />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveFocus();
      },
    });
  });

  it('change value', () => {
    const {
      render, getSelector, execute,
    } = TestRender();
    const setFormData = jest.fn();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={setFormData} autoFocus />,
        );
        const input = getSelector('input');
        fireEvent.change(input, { target: { value: 'testValue' } });
      },
      assert: () => {
        expect(setFormData).toHaveBeenCalledTimes(1);
      },
    });
  });

  */
});
