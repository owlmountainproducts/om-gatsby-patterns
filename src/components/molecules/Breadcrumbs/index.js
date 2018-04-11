import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

/**
 * ATOM: The `<Breadcrumbs>` atom creates breadcrumbs showing category structure.
 * NOTE: Using HTML5: https://coderwall.com/p/p0nvjw/creating-a-semantic-breadcrumb-using-html5-microdata
 */
const Breadcrumbs = ({ categoryName, categorySlug, title }) => (
	<ol className="breadcrumb">
		<li itemScope itemType="http://data-vocabulary.org/Breadcrumb">
        	<Link to="/" itemProp="url">
				<span itemProp="title">Home »</span>
			</Link>
		</li>
		{categoryName &&
			<li itemScope itemType="http://data-vocabulary.org/Breadcrumb">
				<Link to={`/category/${categorySlug}/`} itemProp="url">
					<span itemProp="title">{categoryName} »</span>
				</Link>
			</li>  
		}
		<li itemScope itemType="http://data-vocabulary.org/Breadcrumb">
			<span itemProp="title">{title}</span>
		</li>
	</ol>
);

AffiliateDisclosure.propTypes = {
    /** The  */
    categoryName: PropTypes.string.isRequired, 
    /** The  */
    categorySlug: PropTypes.string.isRequired,
    /** The  */ 
    title: PropTypes.string.isRequired,
  };

export default Breadcrumbs;
