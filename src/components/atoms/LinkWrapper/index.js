import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

/**
 * ATOM: The `<LinkWrapper>` atom creates a link wrapper that acts either like an internal or external link.
 *
 */
const LinkWrapper = ({internalUrl, destinationUrl, id, className, children, text, disabled }) => (
	<div className="link-wrapper"> 
	{internalUrl &&
			<Link to={destinationUrl} id={id} className={className}>{ children || text }</Link>
    }
    {!internalUrl &&
		  <a href={destinationUrl} id={id} className={className}>{ children || text }</a>
    }
	</div>
)


LinkWrapper.propTypes = {
	/** The */
    internalUrl: PropTypes.bool.isRequired,
    /** The */
    destinationUrl: PropTypes.string.isRequired,
    /** The */
    id: PropTypes.string,
    /** The classname on the link. Use '.button' to get button styling */
    className: PropTypes.string,
    /** The */
    disabled: PropTypes.bool
};

export default LinkWrapper;
