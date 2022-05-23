import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// icon
import icon from './icon';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: icon,
		foreground: '#ffffff',
		background: '#000000',
	},
	edit: Edit,
	save: Save,
});
