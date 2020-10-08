/**
 * WordPress dependencies
 */

import { Fragment } from '@wordpress/element';

import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { ToggleControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [ 'core/social-link' ];

export function SocialLinksEdit( props ) {
	const {
		attributes: { openInNewTab },
		setAttributes,
	} = props;

	const SocialPlaceholder = (
		<div className="wp-block-social-links__social-placeholder">
			Use [+] to add icons.
		</div>
	);

	const blockProps = useBlockProps();
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Link settings' ) }>
					<ToggleControl
						label={ __( 'Open links in new tab' ) }
						checked={ openInNewTab }
						onChange={ () =>
							setAttributes( { openInNewTab: ! openInNewTab } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				templateLock={ false }
				orientation="horizontal"
				placeholder={ SocialPlaceholder }
				__experimentalTagName="ul"
				__experimentalPassedProps={ blockProps }
				__experimentalAppenderTagName="li"
			/>
		</Fragment>
	);
}

export default SocialLinksEdit;
