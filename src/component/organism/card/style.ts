import styled from "styled-components";

export const ListProductWrapp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;
  padding: 20px;
`;

export const CardStyleWrapp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
margin: 20px;
:hover{
  cursor: pointer;
  box-shadow: 0px 0px 10px 2.5px #354287aa;

}
`;
