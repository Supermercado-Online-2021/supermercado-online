
import { connect, ConnectedProps } from 'react-redux';

import GlobalState from '../../types/reduxState/GlobalState';



const mapStateToProps = (state: GlobalState) => ({
    user: state.account.user
});

const mapDispathToProps = (dispatch: any) => ({
});

const connector = connect( mapStateToProps, mapDispathToProps );



export type Props = ConnectedProps<typeof connector>;

export default connector;
