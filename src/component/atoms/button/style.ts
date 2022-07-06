import styled from "styled-components";

export const ButtonSearch = styled.button`
  max-width: 150px;
  width: 100%;
  max-height: 50px;
  height: 100%;
  border-radius: 0px 20px 20px 0px;
  border: none;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 2.5px #354287aa;
  }
`;

export const MoreProducts = styled.button`
  max-width: 200px;
  max-height: 20px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: none;
  position: absolute;
  right: 45%;
  bottom: 20px;
  :hover {
    cursor: pointer;
    background-color: #102ec7aa;
    box-shadow: 0px 0px 10px 2.5px #354287aa;
  }
`;
