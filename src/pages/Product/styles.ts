
import styled from "styled-components";



export const Component = styled.p``;

export const Container = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Figure = styled.figure`
  width: 350px;
  & > img {
    width: 100%;
  }
`;

export const Span = styled.span`
  font-size: 22px;
  margin: 25px 0;
`;

export const Column = styled.article<{ column?: boolean }>`
  display: flex;
  padding: 15px 30px;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: flex-start;
`;
