
import Product from '../../types/Product';

import * as HEADER_TYPES from './types';



export const setSuggestions = ( suggestions: Product[] ) => ({
    type: HEADER_TYPES.SET_SUGGESTIONS,
    suggestions: suggestions
})

export const clearSuggestions = () => ({
    type: HEADER_TYPES.CLEAR_SUGGESTIONS
});