
import { Action } from 'redux';
import { compileFunction } from 'vm';
import Product from '../../types/objects/Product';

import Products from '../../types/reduxState/Products';
import { INITIAL_PRODUCTS_STATE } from '../initialState';

import * as PRODUCTS_TYPE from './types';



export interface ActionProducts extends Action {
    payload?: Products
    pagination?: {
        page: number
    },
    update?: {
        product: Product
    }
};


function productsReducer( state: Products = INITIAL_PRODUCTS_STATE, action: ActionProducts ) {
    switch(action.type) {
        case PRODUCTS_TYPE.SET_ALL_PRODUCTS:
            const { payload } = action;

            return {
                ...state,
                ...payload
            };
        case PRODUCTS_TYPE.SET_PAGE:
            const { pagination } = action;
            return { ...state,
                page: pagination?.page
            }
        case PRODUCTS_TYPE.RESET_PAGE:
            return { ...state,
                page: 1
            }
        case PRODUCTS_TYPE.INCREMENT_PAGE:
            return { ...state,
                page: state.page + 1
            }
        case PRODUCTS_TYPE.DECREMENT_PAGE:
            return { ...state,
                page: state.page > 1 
                    ? state.page-1
                    : state.page
            }
        case PRODUCTS_TYPE.UPDATE_PRODUCT:   
            const { update } = action;

            if( update ) {
                const { product } = update;
             
                return {
                    ...state,
                    data: state.data.map( item => item.id === product.id 
                        ? { ...item, ...product } 
                        : item
                    )
                };
            }

            return {...state};
        default: 
            return state; 
    }
}

export default productsReducer;
