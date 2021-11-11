
import { Action } from 'redux';

import Favorite from '../../types/objects/Favorite';
import Product from '../../types/objects/Product';
import Favorites from '../../types/reduxState/Favorites';

import { INITIAL_ACCOUNT_FAVORITES } from '../initialState';
import * as FavoritesTypes from './types';



export interface ActionFavorite extends Action {
    payload?: Favorites,
    index?: number,
    product?: Product
}



function favoriteReducer( state: Favorites = INITIAL_ACCOUNT_FAVORITES, action: ActionFavorite) {
    switch(action.type) {
        case FavoritesTypes.RESET_FAVORITES:
            return {
                ...state,
                ...INITIAL_ACCOUNT_FAVORITES
            }
        case FavoritesTypes.SET_FAVORITES: 
            return {
                ...state,
                ...action?.payload
            }
        case FavoritesTypes.REMOVE_FAVORITE:
            return {
                ...state,
                offset: state.offset-1,
                count: state.count-1,
                data: state.data?.filter( (_, i) => i !== action.index )
            }
        case FavoritesTypes.INCREMENT_FAVORITE:
            const { payload } = action;
            const increment: Favorite[] = payload?.data || [];

            return {
                ...state,
                ...payload,
                data: [ ...state.data, ...increment ]
            }
        case FavoritesTypes.UPDATE_FAVORITE_PRODUCT:
            const { index, product } = action;
            const copy = [ ...state.data ];

            console.log( index, product );

            if( index !== undefined && product && copy[index] ) {
                copy[index].Product = {
                    ...copy[index].Product,
                    ...product
                };
            }

            return {
                ...state,
                data: [ ...copy ]
            }
        default: 
            return state;
    }
}

export default favoriteReducer;
