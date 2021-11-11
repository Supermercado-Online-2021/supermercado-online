
import styled from 'styled-components';



export const AccountMenuContainer = styled.section`
    position: relative;

    width: 400px;
    background: white;

    margin-right: auto;
`;

export const AccountMenuItem = styled.div<{ selected: boolean}>`
    padding: 16px 24px;
    font-size: 18px;
    cursor: pointer;

    color: ${ ({selected}) => selected ? 'white': '#444' };

    background: ${ ({ selected, theme }) => selected 
        ? theme.colors.primary.main
        : 'white' 
    };

    border: 3px solid ${ ({selected, theme}) => selected ? 
       theme.colors.primary.main : '#eee' 
    };


    & + & {
        border-top: 0;
    }

    &:hover {
        background: ${ ({ theme }) => theme.colors.primary.main };
        border-color: ${ ({ theme }) => theme.colors.primary.main };
        color: ${ ({ theme }) => theme.colors.primary.highlight };
    }
`
