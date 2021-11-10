
import { FaTrash } from "react-icons/fa";
import BuyProductButton from "../../components/BuyButton";

import Product from "../../types/objects/Product";

import connector, { Props } from "./connector";

import { 
    ProductContainerColumn, ProductContainer, 
    ProductImage, ProductName, Remove,
}from './styles';



function FavoriteProduct( { product, index, cart, removeProduct, removeProductInCart, addProductInCart }: Props ) {

    const onClickBuyButton = () => {
        const { id, Carts } = product;

        cart && Carts
            ? removeProductInCart(Carts.id, index)
            : addProductInCart(id, index)
    }

    return(<ProductContainer>
        <ProductContainerColumn>
            <ProductImage src={product.image_src} />
            <ProductName>
                {product.name}
            </ProductName>
        </ProductContainerColumn>

        <ProductContainerColumn>
            <Remove onClick={ () => removeProduct(product.id, index ) }>
                <FaTrash size={22} />
            </Remove>

            <BuyProductButton
                onClick={ onClickBuyButton }
                cart={cart} 
                product={product}  
            />
        </ProductContainerColumn>
    </ProductContainer>);
}

export default connector(FavoriteProduct);
