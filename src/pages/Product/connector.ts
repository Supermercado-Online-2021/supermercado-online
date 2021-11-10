
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import GlobalState from '../../types/reduxState/GlobalState';



const mapStateToProps = ( state: GlobalState ) => ({
    token: state.authentication.token
});

const mapDispatchToProps = (dispatch: any ) => ({
    addProductInCart: (id: number) => dispatch(),
    removeProductInCart: (id: number) => dispatch()
});

const connector = connect(mapStateToProps, mapDispatchToProps);



interface Match {
    id: string
}

export type Props = ConnectedProps<typeof connector> & RouteComponentProps<Match>;

export default connector;
