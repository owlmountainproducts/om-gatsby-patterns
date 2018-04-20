import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';

import IconWrapper from '../../atoms/IconWrapper';

/**
 * MOLECULE: The `<IconBar>` creates __.
 *
 */
const IconBar = ({ siteMeta }) => (
  <div className="icon-bar">
    <a className="fb-icon-link" href={siteMeta.fbUrl}>
      <IconWrapper className="icon-bar-icon">
        <FontAwesome.FaFacebook />
      </IconWrapper>
    </a>
    <a className="pinterest-icon-link" href={siteMeta.pinterestUrl}>
      <IconWrapper className="icon-bar-icon">
        <FontAwesome.FaPinterestP />
      </IconWrapper>
    </a>
    <a className="youtube-icon-link" href={siteMeta.youtubeUrl}>
      <IconWrapper className="icon-bar-icon">
        <FontAwesome.FaYoutubePlay />
      </IconWrapper>
    </a>
    <a className="search-icon-link" href="/search/">
      <IconWrapper className="icon-bar-icon">
        <FontAwesome.FaSearch />
      </IconWrapper>
    </a>
  </div>
);

IconBar.propTypes = {
  /** The  */
  siteMeta: PropTypes.arrayOf.isRequired,
};

export default IconBar;
