import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa'

import Icon from '../../atoms/Icon';
import InputField from '../../atoms/InputField';

/**
 * MOLECULE: The `<MailChimpEmailInput>` molecule creates an email form to sign up for a Mailchimp newsletter.
 * NOTE: the submit input is provided by Mailchimp and advised not to change. See Inline comment below.
 * 
 */
const MailChimpEmailInput = ({ mailchimpUrl }) => (
  <form
    action={mailchimpUrl}
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="validate"
    target="_blank"
    noValidate="true"
  >
    <div id="mc_embed_signup_scroll">
      <div className="email-input-line">
        <Icon>
          <FontAwesome.FaEnvelopeO />
        </Icon>
        <InputField
          type="email"
          defaultValue=""
          name="EMAIL"
          className="email-capture-box"
          id="mce-EMAIL"
          placeholder="ENTER YOUR EMAIL"
          required
        />
        {/* real people should not fill this in and expect good things -
          * do not remove this or risk form bot signups
          */}
        <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
          <input
            type="text"
            name="b_10dbfb95b10b0055960e52187_8dab905704"
            tabIndex="-1"
            value=""
          />
        </div>
        <div className="clear">
          <input
            type="submit"
            value="SIGN UP"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="email-submit-button"
          />
        </div>
      </div>
    </div>
  </form>
);

MailChimpEmailInput.propTypes = {
  /** The Mailchimp signup URL. */
  mailchimpUrl: PropTypes.string.isRequired,
};

export default MailChimpEmailInput;
