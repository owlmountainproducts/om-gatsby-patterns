import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

/**
 * ATOM: The `<Disqus>` atom uses `react-disqus-comments` to quickly drop in
 * a Disqus comment widget to any page.
 */
class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = { toasts: [] };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: 'New comment available!!' });
    this.setState({ toasts });
  }
  render() {
    const {
      shortname, postTitle, postUrl, categoryId,
    } = this.props;
    if (!shortname) {
      return null;
    }

    return (
      <ReactDisqusComments
        shortname={shortname}
        identifier={postTitle}
        title={postTitle}
        url={postUrl}
        category_id={categoryId}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

Disqus.propTypes = {
  /** The Disqus site name. */
  shortname: PropTypes.string.isRequired,
  /** The metadata about the site. */
  postTitle: PropTypes.string.isRequired,
  /** The post URL for Disqus to associate comments. */
  postUrl: PropTypes.string.isRequired,
  /** The category ID for internal Disqus mapping. */
  categoryId: PropTypes.number.isRequired,
};

export default Disqus;
