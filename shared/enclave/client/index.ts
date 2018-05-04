import { makeRequest } from './requests';
import {
  EnclaveMethods,
  GetAddressesParams,
  GetAddressesResponse,
  GetChainCodeParams,
  GetChainCodeResponse,
  SignTransactionParams,
  SignTransactionResponse,
  SignMessageParams,
  SignMessageResponse
} from 'shared/enclave/types';

const api = {
  getAddresses(params: GetAddressesParams) {
    return makeRequest<GetAddressesResponse>(EnclaveMethods.GET_ADDRESSES, params);
  },

  getChainCode(params: GetChainCodeParams) {
    return makeRequest<GetChainCodeResponse>(EnclaveMethods.GET_CHAIN_CODE, params);
  },

  signTransaction(params: SignTransactionParams) {
    return makeRequest<SignTransactionResponse>(EnclaveMethods.SIGN_TRANSACTION, params);
  },

  signMessage(params: SignMessageParams) {
    return makeRequest<SignMessageResponse>(EnclaveMethods.SIGN_MESSAGE, params);
  }
};

export default api;
export * from 'shared/enclave/types';
