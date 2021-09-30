// import { NavLink } from 'react-router-dom';
import { TestRender } from '@utils/testsUtils';
import NavbarItems from './NavbarItems';

const t = jest.fn();

describe('NavbarItems', () => {
  it('render', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <NavbarItems links={[]} t={t}>test</NavbarItems>,
        );
      },
      assert: () => {
        expectSelector('ul').toBeDefined();
      },
    });
  });
});
