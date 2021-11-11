
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';

import * as FavoritesThunks from '../../store/favorites/thunks';
import * as FavoritesActions from '../../store/favorites/actions';

import * as ThunksCart from '../../store/cart/thunks';
import Product from '../../types/objects/Product';



const mapStateToProps = (state: GlobalState ) => ({
    favorites: state.account.favorites
});

const mapDispatchToProps = (dispatch: any) => ({
    removeProduct: (id: number, index: number) => 
        dispatch(FavoritesThunks.removeFavoriteFromList(id, index)),

    addProductInCart: (product_id: number) => 
        dispatch( ThunksCart.addProductInCart(product_id, FavoritesActions.updateProductById) ),

    removeProductInCart: (cart_id: number) =>
        dispatch( ThunksCart.removeProductInCart(cart_id, FavoritesActions.updateProductById)) 
});

const connector = connect(mapStateToProps,mapDispatchToProps);



type PropsFromRedux = ConnectedProps<typeof connector>;

export interface Props extends PropsFromRedux {
    index: number,
    cart: boolean
}

export default connector;
