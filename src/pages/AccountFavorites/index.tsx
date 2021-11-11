
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";

import TemplateAccount from "../../templates/TemplateAccount";

import connector, { Props } from "./connector";

import FavoriteProduct from "../../components/FavoriteProduct";

import { 
    ListProductContainer,
    IncrementFavorites, 
    WishlistEmpty
}from './styles';



function AccountFavorites( { auth, favorites, loadFavorites, incrementFavorites, resetFavorites }: Props ) {
    
    useEffect( () => {
        if(auth) {
            resetFavorites();
            loadFavorites();
        }
    }, [auth]);



    return(
        <TemplateAccount subtitle="Lista de Desejos">
            {favorites.count > 0 && <span>{favorites.count} produtos encontrados.</span>}
            {favorites.count === 0 && <WishlistEmpty>Nenhum produto favoritado.</WishlistEmpty>}

            <ListProductContainer>
                { favorites && favorites.data?.map( (favorite, index) => 
                    (<FavoriteProduct
                        index={index} 
                        cart={(favorite.Product.Carts !== undefined && favorite.Product.Carts?.id !== null) || false}
                    />)
                )}

                { favorites.count !== favorites.data.length && <IncrementFavorites 
                    onClick={() => incrementFavorites()}
                    disabled={favorites.count === favorites.data.length}
                >
                    <FaPlus size={22} />
                </IncrementFavorites>}
            </ListProductContainer>
        </TemplateAccount>
    );
}

export default connector(AccountFavorites);
