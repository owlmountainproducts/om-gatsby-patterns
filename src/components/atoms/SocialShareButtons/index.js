import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareCount,
  PinterestShareCount,
  FacebookIcon,
  PinterestIcon,
  WhatsappIcon,
  EmailIcon,
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from 'react-share';

/**
 * ATOM: The `<SocialShareButtons>` atom creates ___.
 * TODO: Format Share Counts Using Numeral.Js: http://numeraljs.com/#format
 *
 */
const SocialShareButtons = ({
  id, className, title, url, featuredImage,
}) => (
  <aside id={id} className={`social-share-buttons ${className}`}>
    {featuredImage && (
      <PinterestShareButton
        url={url}
        description={title}
        media={featuredImage}
        className="pinterest-share-button"
      >
        <div className="share-button-inner">
          <PinterestIcon size={30} />
          <PinterestShareCount url={url} className="pinterest-share-count">
            {count => count}
          </PinterestShareCount>
        </div>
      </PinterestShareButton>
    )}
    <FacebookShareButton
      url={url}
      quote={title}
      className="facebook-share-button"
    >
      <div className="share-button-inner">
        <FacebookIcon size={30} />
        <FacebookShareCount url={url} className="facebook-share-count">
          {count => count}
        </FacebookShareCount>
      </div>
    </FacebookShareButton>
    <WhatsappShareButton url={url} className="whatsapp-share-button">
      <div className="share-button-inner">
        <WhatsappIcon size={30} />
      </div>
    </WhatsappShareButton>
    <EmailShareButton url={url} subject={title} className="email-share-button">
      <div className="share-button-inner">
        <EmailIcon size={30} />
      </div>
    </EmailShareButton>
  </aside>
);

SocialShareButtons.propTypes = {
  /** The */
  title: PropTypes.string.isRequired,
  /** The */
  url: PropTypes.string.isRequired,
  /** The */
  featuredImage: PropTypes.string,
  /** The */
  className: PropTypes.string,
  /** The */
  id: PropTypes.string,
};

SocialShareButtons.defaultProps = {
  featuredImage: '',
  className: '',
  id: '',
};

export default SocialShareButtons;
