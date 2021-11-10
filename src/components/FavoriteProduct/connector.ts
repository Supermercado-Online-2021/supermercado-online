
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';

import * as FavoritesThunks from '../../store/favorites/thunks';
import * as FavoritesActions from '../../store/favorites/actions';

import * as ThunksCart from '../../store/cart/thunks';
import Product from '../../types/objects/Product';



const mapStateToProps = (state: GlobalState ) => ({});

const mapDispatchToProps = (dispatch: any) => ({
    removeProduct: (id: number, index: number) => 
        dispatch(FavoritesThunks.removeFavoriteFromList(id, index)),

    addProductInCart: (product_id: number, index: number) => 
        dispatch( ThunksCart.addProductInCart(product_id, index, FavoritesActions.updateProductByIndex ) ),

    removeProductInCart: (id: number, index: number) =>
        dispatch( ThunksCart.removeProductInCart(id, index, FavoritesActions.updateProductByIndex )) 
});

const connector = connect(mapStateToProps,mapDispatchToProps);



type PropsFromRedux = ConnectedProps<typeof connector>;

export interface Props extends PropsFromRedux {
    product: Product,
    index: number,
    cart: boolean
}

export default connector;
