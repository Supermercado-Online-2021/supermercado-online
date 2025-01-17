
import styled from "styled-components";

import { Link } from 'react-router-dom';



export const MenuContainer = styled.nav<{ visible: boolean }>`
    position: absolute;
    right: 0;
    top: 60px;

    transform: translateX( ${ ({visible}) => visible ? 0: 100 }% );
    opacity: ${ ({visible}) => visible ? 1: 0 };

    display: flex;
    flex-direction: column;
    
    background: white;

    max-width: 500px;
    width: 100%;
    height: calc( 100vh - 60px );

    border-left: 1px solid ${ ({ theme }) => theme.colors.third.main };
    box-shadow: -2px 0 8px ${ ({ theme }) => theme.colors.third.main };

    transition: all 200ms ease-in-out;
`;

export const DropDown = styled.section`
    color: black;

    &:first-child {
        margin-top: 18px;
    }

    &:last-child {
        margin-bottom: 18px;
    }
`;

export const DropDownTitle = styled.h4`
    background: ${ ({ theme }) => theme.colors.primary.main };
    color: ${ ({ theme }) => theme.colors.primary.highlight };
    padding: 8px 16px;
    font-size: 18px;
`

export const DropDownItem = styled.article`
    border: 1px solid ${ ({ theme }) => theme.colors.third.main };
    padding: 8px 16px;
    margin: 0 12px;
`;

export const DropDownMenuLink = styled(Link)`
    width: 100%;
    font-size: 16px;
`;
