/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * skip-link function
 *
 * Provide skip links to navigation and content.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * One skip-link item
 *
 * @param  {array}    link             - The link object
 * @param  {string}   link.link        - The href for the link
 * @param  {string}   link.text        - The link text
 * @param  {function} link.onClick     - A function called when the link is clicked
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUskipLinkItem = ({ link, ...attributeOptions }) => {

	if( typeof link.onClick === 'function' ) {
		attributeOptions.onClick = link.onClick;
	}

	return (
		<a className="au-skip-link__link" href={ link.link } { ...attributeOptions }>{ link.text }</a>
	);
};

AUskipLinkItem.propTypes = {
	link: PropTypes.shape({
		link: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	}).isRequired,
};


/**
 * DEFAULT
 * The skip-link component
 *
 * @param  {array} links - The links, format: { url: '', text: '', onClick: () }
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUskipLink = ({ links, ...attributeOptions }) => (
	<nav className="au-skip-link" { ...attributeOptions }>
		{ links.map( ( link, i ) => <AUskipLinkItem key={ i } link={ link } /> ) }
	</nav>
);

AUskipLink.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
		).isRequired,
};

export default AUskipLink;
