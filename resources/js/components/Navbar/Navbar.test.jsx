import { TestRender } from '@utils/testsUtils';
import useTranslation from '../../hooks/useTranslation';
import Navbar from './Navbar';

jest.mock('../../hooks/useTranslation');
useTranslation.mockImplementation(() => ({ t: () => { } }));

describe('Navbar', () => {
  const defaultProps = {
    brand: {
      to: '',
    },
  };

  it('render', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps}>test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').toBeDefined();
      },
    });
  });

  it('expand not valid', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} expand="invalid">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').not.toHaveClass('navbar-expand-invalid');
      },
    });
  });

  it('expand xs', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} expand="xs">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').toHaveClass('navbar-expand-xs');
        expectSelector('nav').not.toHaveClass('navbar-expand-sm');
        expectSelector('nav').not.toHaveClass('navbar-expand-md');
        expectSelector('nav').not.toHaveClass('navbar-expand-lg');
        expectSelector('nav').not.toHaveClass('navbar-expand-xl');
      },
    });
  });

  it('expand sm', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} expand="sm">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').not.toHaveClass('navbar-expand-xs');
        expectSelector('nav').toHaveClass('navbar-expand-sm');
        expectSelector('nav').not.toHaveClass('navbar-expand-md');
        expectSelector('nav').not.toHaveClass('navbar-expand-lg');
        expectSelector('nav').not.toHaveClass('navbar-expand-xl');
      },
    });
  });

  it('expand md', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} expand="md">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').not.toHaveClass('navbar-expand-xs');
        expectSelector('nav').not.toHaveClass('navbar-expand-sm');
        expectSelector('nav').toHaveClass('navbar-expand-md');
        expectSelector('nav').not.toHaveClass('navbar-expand-lg');
        expectSelector('nav').not.toHaveClass('navbar-expand-xl');
      },
    });
  });

  it('expand lg', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} expand="lg">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').not.toHaveClass('navbar-expand-xs');
        expectSelector('nav').not.toHaveClass('navbar-expand-sm');
        expectSelector('nav').not.toHaveClass('navbar-expand-md');
        expectSelector('nav').toHaveClass('navbar-expand-lg');
        expectSelector('nav').not.toHaveClass('navbar-expand-xl');
      },
    });
  });

  it('expand xl', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} expand="xl">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').not.toHaveClass('navbar-expand-xs');
        expectSelector('nav').not.toHaveClass('navbar-expand-sm');
        expectSelector('nav').not.toHaveClass('navbar-expand-md');
        expectSelector('nav').not.toHaveClass('navbar-expand-lg');
        expectSelector('nav').toHaveClass('navbar-expand-xl');
      },
    });
  });

  it('color schema not valid', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} colorSchema="invalid">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').not.toHaveClass('navbar-invalid');
        expectSelector('nav').not.toHaveClass('bg-invalid');
      },
    });
  });

  it('color schema light', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} colorSchema="light">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').toHaveClass('navbar-light');
        expectSelector('nav').toHaveClass('bg-light');
      },
    });
  });

  it('color schema dark', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps} colorSchema="dark">test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('nav').toHaveClass('navbar-dark');
        expectSelector('nav').toHaveClass('bg-dark');
      },
    });
  });
});
