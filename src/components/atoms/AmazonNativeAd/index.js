import React, { Component } from 'react';
import PropTypes from 'prop-types';
import postscribe from 'postscribe';

/**
 * ATOM: The `<AmazonNativeAd>` atom drops in any Amazon Native ad code safely into a React app.
 */
class AmazonNativeAd extends Component {
  componentDidMount() {
    const { id } = this.props;
    const divId = `amzn-asso-ad-${id}`;

    // Initialize the Amazon script after a second for smoother performance
    setTimeout(
      () =>
        postscribe(
          `#${divId}`,
          `<script src=//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${id}></script>`,
        ),
      1000,
    );
  }

  render() {
    const { id } = this.props;

    return <div id={`amzn-asso-ad-${id}`} />;
  }
}

AmazonNativeAd.propTypes = {
  /** The Amazon code ID from the Affiliate dashboard. */
  id: PropTypes.string.isRequired,
};

export default AmazonNativeAd;
