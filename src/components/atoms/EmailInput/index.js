import React from 'react';
import PropTypes from 'prop-types';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';

/**
 * ATOM: The `<EmailInput>` atom creates an email form to sign up for a Mailchimp newsletter.
 * FIXME: Should be a molecule or organism, also renamed to something more
 * clearly coupled with Mailchimp.
 */
const EmailInput = ({ mailchimpUrl }) => (
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
        <div className="envelope-icon">
          <FaEnvelopeO />
        </div>
        <input
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

EmailInput.propTypes = {
  /** The Mailchimp signup URL. */
  mailchimpUrl: PropTypes.string.isRequired,
};

export default EmailInput;
