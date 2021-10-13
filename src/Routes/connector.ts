
import { connect, ConnectedProps } from 'react-redux';

import { userTokenAuthentication } from '../store/authentication/thunks';

import GlobalState from '../types/GlobalState';



const mapStateToProps = ( state: GlobalState ) => ({
    auth: state.authentication.auth,
    token: state.authentication.token
});

const mapDispatchProps = (dispatch: any) => ({
    tokenAuthentication: () => dispatch( userTokenAuthentication() )
});

const connector = connect( mapStateToProps, mapDispatchProps );



export type Props = ConnectedProps<typeof connector>;

export default connector;