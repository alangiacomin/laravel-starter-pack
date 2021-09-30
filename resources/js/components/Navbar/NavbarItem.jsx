import 'bootstrap/js/dist/dropdown';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { hasPermission } from '../../utils/userHelper';

const NavbarItem = ({ link }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const cn = classNames(
    'nav-item',
    link.dropdown && 'dropdown',
  );

  const onClick = useCallback((event) => {
    if (link.onClick) {
      link.onClick(dispatch);
      event.preventDefault();
    }
  }, [dispatch, link]);

  const onDropdownClick = useCallback((d) => (event) => {
    if (d.onClick) {
      d.onClick(dispatch);
      event.preventDefault();
    }
  },
  [dispatch]);

  if (!hasPermission(user, link.perm)) {
    return null;
  }

  if (link.dropdown) {
    return (
      <li className={cn}>
        <NavLink
          className="nav-link dropdown-toggle"
          to="#"
          // id="navbarDropdown"
          // role="button"
          data-toggle="dropdown"
          // aria-haspopup="true"
          // aria-expanded="false"
        >
          {link.title}
        </NavLink>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

          {link.dropdown.map((d) => (
            <NavLink
              key={d.id}
              className="dropdown-item"
              to={{ pathname: d.to }}
              target={d.target}
              exact={d.exact}
              onClick={onDropdownClick(d)}
            >
              {d.title}
            </NavLink>

          ))}
        </div>

      </li>
    );
  }

  return (
    <li key={link.id} className={cn}>
      <NavLink
        className="nav-link"
        to={{ pathname: link.to }}
        exact={link.exact}
        isActive={link.isActive}
        onClick={onClick}
      >{link.title}
      </NavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string,
    to: PropTypes.string,
    perm: PropTypes.string,
    exact: PropTypes.bool,
    isActive: PropTypes.func,
    title: PropTypes.string,
    onClick: PropTypes.func,
    dropdown: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      to: PropTypes.string,
      exact: PropTypes.bool,
      isActive: PropTypes.func,
      title: PropTypes.string,
    })),
  }).isRequired,
};

NavbarItem.defaultProps = {
};

export default NavbarItem;
