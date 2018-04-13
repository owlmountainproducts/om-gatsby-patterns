import React from 'react';
import PropTypes from 'prop-types';

/**
 * MOLECULE: The `<PrimaryNav>` molecule creates ___.
 *
 */
const PrimaryNav = ({ navItems }) => (
  <div className="primar-nav">
    <nav className="primary-nav-inner">
      {navItems.items.map(item => (
        <li key={item.order} className="top-menu-item">
          <Link to={`/category/${slugify(item.title, { lower: true })}/`}>
            {item.title}
          </Link>
        </li>
      ))}
    </nav>
  </div>
);

PrimaryNav.propTypes = {
  /** The */
  navItems: PropTypes.object.isRequired,
};

export default PrimaryNav;
