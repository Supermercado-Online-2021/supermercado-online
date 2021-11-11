
import axios from '../../config/axios.config';

import { AxiosResponse, AxiosError } from 'axios';

import User from '../../types/objects/User';

import { getGlobalState, ThunkGlobalDispatch } from "../ThunkTypes";



interface UserRegister {
    name: string, 
    last_name: string, 
    email: string, 
    password: string, 
    cpf: string, 
    birthday: Date, 
    phone: string
}

export const registerUser = (user: UserRegister) => 
    async ( dispatch: ThunkGlobalDispatch, getState: getGlobalState ) => {
        const { name, last_name, email, password, cpf, birthday, phone  } = user;

        axios.post<any, AxiosResponse<User>>( '/user/register', {
            name, 
            last_name,
            email,
            password,
            cpf,
            birthday,
            phone
        })
        .then( (response) => {
            if(response.status === 201) {
                alert('Usuário cadastrado com sucesso.');
            }
        })
        .catch( (err: AxiosError<any>) => {
            const responseError = err.response;
            alert( responseError?.data.message );
        });
    }

export const updateUser = ( user: User ) => 
    async( dispatch: ThunkGlobalDispatch, getState: getGlobalState ) => {
        axios.put<any, AxiosResponse<User>>( '/user/update', {
            ...user
        })
        .then( (response) => {
            if(response.status === 201) {
                alert('Usuário atualizado com sucesso.');
            }
        })
        .catch( (err: AxiosError<any>) => {
            const responseError = err.response;
            alert( responseError?.data.message );
        });
    }
