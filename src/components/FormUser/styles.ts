
import styled from 'styled-components';



export const ValidationStep = styled.span<{ validate: boolean }>`
    margin-left: 20px;
    
    color: ${ ({ validate, theme }) => validate 
        ? theme.colors.success
        : theme.colors.error };
`
