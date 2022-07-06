import styled from "styled-components";

export const ListProductWrapp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  position: relative;
  @media(max-width: 840px){
  grid-template-columns: 1fr 1fr 1fr;
  }
  @media(max-width: 630px){
  grid-template-columns: 1fr 1fr ;
  }
  @media(max-width: 380px){
  grid-template-columns: 1fr ;
  }
`;

export const CardStyleWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 2.5px #354287aa;
  }
`;
