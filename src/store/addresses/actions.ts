
import Address from "../../types/objects/Address"

import * as AddressTypes from './types';



export const setAddresses = (addresses: Address[] ) => ({
    type: AddressTypes.LOAD_ADDRESSES,
    addresses
});

export const resetAddresses = () => ({
    type: AddressTypes.RESET_ADDRESSES
});
