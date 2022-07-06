import styled from "styled-components";

export const SelectCardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  max-height: 1000px;
  height: 100%;
  @media (max-width: 800px) {
    padding-top: 30px;
    flex-direction: column;
  }
`;
export const DirectionWrapp = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  max-height: 300px;
  height: 100%;
`;

export const ImageWrapp = styled.div`
  max-width: 200px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
