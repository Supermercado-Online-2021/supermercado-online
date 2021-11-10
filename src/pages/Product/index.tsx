
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import BuyProductButton  from '../../components/BuyButton';

import axios from '../../config/axios.config';
import { AxiosError, AxiosResponse } from 'axios';

import TemplatePage from "../../templates/TemplatePage";
import Product from '../../types/objects/Product';

import connector, { Props } from './connector';

import {Container, Column } from './styles';
import { Figure } from './styles';
import { Span } from './styles';



function ProductById({ token, match }: Props ){
    const [ product, setProduct ] = useState<Product>();

    useEffect( () => {
        (async () => {
            axios.get<any, AxiosResponse<Product>>( `/product/${match.params.id}`, { headers: {token} })
                .then( result => {
                    setProduct({
                        ...result.data,
                        image_src: result.data.image_src?.replace( '274-274', '720-720' )
                    });
                })
                .catch( (e: AxiosError<{ message: string }>) => {
                    alert(e.response?.data.message);
                });
        })();
    }, []);



    return(
        <TemplatePage>
            <Container>
                <Column>
                    <Figure>
                        <img src={ product?.image_src } alt={ product?.name } />
                    </Figure>
                </Column>
                <Column column={true}>
                    <h3>{ product?.name }</h3>
                    
                    <Span>
                        {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product?.price || 0)}
                    </Span>
                    { product && <BuyProductButton 
                        product={product as Product} 
                        cart={false} 
                        onClick={ ()=> {}}
                        size={22}
                    />}
                </Column>
            </Container>
        </TemplatePage>
    );
}

export default connector(withRouter(ProductById));
