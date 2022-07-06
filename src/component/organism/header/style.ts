import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  background: url(https://mipt.ru/upload/medialibrary/907/111.jpg);
  background-size: cover;
`;

export const SelectWrapp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  width: 100%;
  height: 50px;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;
