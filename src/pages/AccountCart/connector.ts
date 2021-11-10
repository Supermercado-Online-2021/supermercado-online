
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';

import * as thunksCart from '../../store/cart/thunks';
import * as ActionsProducts from '../../store/products/actions';



const mapStateToProps = (state: GlobalState) => ({
    cart: state.account.cart,
});

const mapDispatchToProps = (dispatch: any) => ({
    loadCart: () => dispatch( thunksCart.findCartProducts() ),
    
    removeProductInCart: (id: number, index: number) => 
        dispatch( thunksCart
            .removeProductInCart(id, index, ActionsProducts.updateProductByIndex ) )
});

const connector = connect(mapStateToProps, mapDispatchToProps);



type PropsFromRedux = ConnectedProps<typeof connector>;
export type Props = PropsFromRedux;

export default connector;
