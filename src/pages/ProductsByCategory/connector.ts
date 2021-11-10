
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { findProducts } from '../../store/products/thunks';
import GlobalState from '../../types/reduxState/GlobalState';




const mapStateToProps = (state: GlobalState) => ({
    page: state.products.page,
    limit: state.products.limit
});

const mapDispatchProps = (dispatch:any) => ({ 
    loadProducts: (id:number) => dispatch( findProducts(`/products/category/${id}`) )
 });

const connector = connect( mapStateToProps, mapDispatchProps );



interface MatchParams {
    id: string,
    name: string
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromRouter = RouteComponentProps<MatchParams>;

export type Props = PropsFromRedux & PropsFromRouter;

export default connector;
