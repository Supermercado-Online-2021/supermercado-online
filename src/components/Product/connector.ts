
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';

import Product from '../../types/objects/Product';

import * as ThunksCart from '../../store/cart/thunks';
import * as ThunksFavorite from '../../store/favorites/thunks';
import * as ActionsProducts from '../../store/products/actions';



const mapStateToProps = (state: GlobalState) => ({
    auth: state.authentication.auth
});

const mapDispatchToProps = (dispatch: any) => ({
    toggleFavorite: (id: number, index: number ) => 
        dispatch( ThunksFavorite.toggleFavoriteProduct(id) ),
        
    addProductInCart: (product_id: number, index: number) => 
        dispatch( ThunksCart.addProductInCart(product_id, ActionsProducts.updateProductById ) ),

    removeProductInCart: (id: number, index: number) =>
        dispatch( ThunksCart.removeProductInCart(id, ActionsProducts.updateProductById )) 
});

const connector = connect(mapStateToProps, mapDispatchToProps);



type PropsFromRedux = ConnectedProps<typeof connector>;

export interface Props extends PropsFromRedux {
    index: number,
    product: Product,
    favorite: boolean,
    cart: boolean
}

export default connector;
