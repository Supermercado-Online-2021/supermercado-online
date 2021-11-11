
import styled from "styled-components";



export const ListProductContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 28px;
`;

export const IncrementFavorites = styled.button`
    border-radius: 50%;
    background: #067BF9;
    color: white;

    cursor: pointer;

    width: 40px;
    height: 40px;
    margin: 20px auto 0 auto;

    &:disabled {
        background: #ccc;
    }
`;

export const WishlistEmpty = styled.h3`
    margin: 20px;
    text-align: center;
    color: #bbb;
`;
