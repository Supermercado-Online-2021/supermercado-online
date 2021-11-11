
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import BuyProductButton from "../../components/BuyButton";

import Product from "../../types/objects/Product";

import connector, { Props } from "./connector";

import { 
    ProductContainerColumn, ProductContainer, 
    ProductImage, ProductName, Remove,
}from './styles';



function FavoriteProduct( { favorites, index, cart, removeProduct, removeProductInCart, addProductInCart }: Props ) {
    const [ product, setProduct ] = useState(favorites.data[index].Product);

    useEffect( () => {
        setProduct(favorites.data[index].Product)
    }, [favorites]);

    useEffect( () => {
        console.log(product.Carts)
    }, [product] );


    const onClickBuyButton = () => {
        const { id, Carts } = product;

        cart && Carts
            ? removeProductInCart(Carts.id)
            : addProductInCart(id)
    }

    return(<ProductContainer>
        <ProductContainerColumn>
            <ProductImage src={product.image_src} />
            <ProductName>
                {product.name}
            </ProductName>
        </ProductContainerColumn>

        <ProductContainerColumn>
            <Remove onClick={() => removeProduct(product.id, index ) }>
                <FaTrash size={22} />
            </Remove>

            {!cart && <BuyProductButton
                onClick={ onClickBuyButton }
                cart={cart} 
                product={product}  
            />}
        </ProductContainerColumn>
    </ProductContainer>);
}

export default connector(FavoriteProduct);
