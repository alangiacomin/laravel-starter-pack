import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import NavbarItem from './NavbarItem';

const NavbarItems = (props) => {
  const { className, links } = props;
  const navbarItemsClassName = classNames(
    'navbar-nav',
    className,
  );

  return (
    <ul className={navbarItemsClassName}>
      {links && links.map((link) => <NavbarItem key={link.id} link={link} />)}
    </ul>
  );
};

NavbarItems.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ }),
  ]),
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    to: PropTypes.string,
    exact: PropTypes.bool,
    isActive: PropTypes.func,
    title: PropTypes.string,
  })).isRequired,
};

NavbarItems.defaultProps = {
  className: null,
};

export default NavbarItems;
