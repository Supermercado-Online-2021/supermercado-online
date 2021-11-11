
import axios from '../../config/axios.config';
import { AxiosError } from 'axios';

import * as ActionsAuthentication from './actions';
import * as ActionsUser from '../user/actions';
import * as ActionsFavorites from '../favorites/actions';
import * as ActionsCart from '../cart/actions';
import * as ActionsAddresses from '../addresses/actions';
import * as ActionsProducts from '../products/actions';

import createLoading from '../loading/createLoading';

import AxiosResponseAuthentication from '../../types/axiosResponse/AxiosResponseAuthentication';

import { ThunkGlobalDispatch, getGlobalState } from '../ThunkTypes';



export const userAuthentication = (email: string, password: string) =>
    async (D: ThunkGlobalDispatch, G: getGlobalState) => {
        let message;

        await createLoading(async (dispatch) => {
            try {
                const { data } = await axios
                    .post<any, AxiosResponseAuthentication>(`/user/signin/`,
                        { email, password }
                    );

                dispatch(ActionsAuthentication.userAuthentication(data.auth, data.token));
                if (data.auth)
                    dispatch(ActionsUser.setUser(data.user));
            } catch (e) {
                const { request, response } = e as AxiosError<{ message: string }>;
                message = request?.data?.message || response?.data?.message;
            }
        }, D, G);

        if(message)
            alert(message);
    }

export const userTokenAuthentication = () =>
    async (dispatch: ThunkGlobalDispatch, getState: getGlobalState) => {
        await createLoading(async () => {
            try {
                const { token } = getState().authentication;

                const { data } = await axios
                    .post<any, AxiosResponseAuthentication>(`/user/logged/`, {}, { headers: { token } });

                dispatch(ActionsAuthentication.tokenAuthentication(data.auth));
                if (data.auth)
                    dispatch(ActionsUser.setUser(data.user));
            } catch (e) {
            }
        }, dispatch, getState);
    }

export const userSignOutAuthentication = () =>
    async (D: ThunkGlobalDispatch, G: getGlobalState) => {
        await createLoading(async (dispatch, getState) => {
            try {
                const state = getState();

                const { token } = state.authentication;
                const { data } = state.products;

                const { status } = await axios.post('/user/signout', {}, { headers: { token } });
                
                if (status === 200) {
                    dispatch(ActionsAuthentication.signOutAuthentication());

                    dispatch(ActionsUser.resetUser());
                    dispatch(ActionsFavorites.resetFavorites());
                    dispatch(ActionsAddresses.resetAddresses());
                    dispatch(ActionsCart.resetCart());

                    dispatch(ActionsProducts.setProducts({
                        ...state.products,
                        data: data.map( product => {
                            product.Carts = undefined;
                            product.Favorites = undefined;
                            product.cart = false;
                            product.favorite = false;

                            return product;
                        })
                    }));
                }
            } catch (e) {
            }
        }, D, G);
    }
