
import Products from "../../types/reduxState/Products";
import Product from '../../types/objects/Product';

import * as ProductsTypes from "./types";

import { ActionProducts } from './index';



export const setProducts = (products: Products): ActionProducts => ({
    type: ProductsTypes.SET_ALL_PRODUCTS,
    payload: { ...products }
});

export const setPage = (page: number): ActionProducts => ({
    type: ProductsTypes.SET_PAGE,
    pagination: {
        page
    }
});

export const updateProductById = ( product: Product ): ActionProducts => ({
    type: ProductsTypes.UPDATE_PRODUCT,
    update: {
        product
    }
});

export const resetPage = () => ({ type: ProductsTypes.RESET_PAGE });

export const incrementPage = () => ({ type: ProductsTypes.INCREMENT_PAGE });

export const decrementPage = () => ({ type: ProductsTypes.DECREMENT_PAGE });
