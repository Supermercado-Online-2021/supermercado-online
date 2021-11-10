
import styled from "styled-components";



export const BuyProduct = styled.button<{ remove?: boolean, size?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ remove }) => remove ? "red" : "#067BF9"};
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: ${({ size }) => size ? size: 16 }px;

    &:disabled {
        background: #ccc;
    }
`;
