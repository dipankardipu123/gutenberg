/**
 * WordPress dependencies
 */
import { speak } from '@wordpress/a11y';

/**
 * Internal dependencies
 */
import { useDebounce } from '../use-debounce';

const WAIT = 500;

export function useDebouncedSpeak() {
	return useDebounce( speak, WAIT );
}
