
import axios from "../../config/axios.config";
import { AxiosError } from 'axios';

import * as ActionsProducts from "./actions";
import AxiosResponseProducts from "../../types/axiosResponse/AxiosResponseProducts";

import createLoading from '../loading/createLoading';

import { ThunkGlobalDispatch, getGlobalState } from '../ThunkTypes';



export const findProducts = ( url: string ) =>
    async (D: ThunkGlobalDispatch, G: getGlobalState  ) => {
        await createLoading( async (dispatch, getState) => {
            const state = getState();
        
            const { page, limit } = state.products;
            const { token } = state.authentication;
    
            const { data } = await axios.get<any,AxiosResponseProducts>( url, {
                headers: { token },
                params: { limit, page }
            });
    
            dispatch( ActionsProducts.setProducts({...data}) );
        }, D, G );
    }

export const findProductById = (id: number) =>
    async (dispatch: ThunkGlobalDispatch, getState: getGlobalState  ) => {
        const { token } = getState().authentication;

        const product = await axios.get<any, AxiosResponse<Product>>( `/product/${id}`, { headers: { token } })
        .then( result => {
            setProduct({
                ...result.data,
                image_src: result.data.image_src?.replace( '274-274', '720-720' ),
                cart: (result.data.Carts !== undefined && result.data.Carts?.id !== null) || false
            });
        })
        .catch( (e: AxiosError<{ message: string }>) => {
            alert(e.response?.data.message);
        });
    }