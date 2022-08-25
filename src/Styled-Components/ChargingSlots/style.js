import styled from "styled-components";

export const Chargingslotbox = styled.div`
width: 27px;
height : 16px;
display: flex;
align-items: center
justify-content: center;
background: ${({ theme }) => theme.colourMaterialPrimary};
border-radius: 4px;
box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
`;
export const ChargingMapslotbox = styled(Chargingslotbox)`
margin-left: -30px
margin-top : 10px;

`;
export const ChargingslotMapbox = styled.div`
  display: flex;
`;
