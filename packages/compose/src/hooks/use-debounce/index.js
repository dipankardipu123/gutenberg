/**
 * External dependencies
 */
import { debounce } from 'lodash';
import { useMemoOne } from 'use-memo-one';

/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';

export default function useDebounce( ...args ) {
	const debounced = useMemoOne( () => debounce( ...args ), args );
	useEffect( () => () => debounced.cancel(), [ debounced ] );
	return debounced;
}
