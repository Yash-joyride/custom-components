import styled from "styled-components";

export const ColorPickerWrapper = styled.div`
width: 218px;
background: ${({ theme }) => theme.colourMaterialPrimary};
border-radius:  8px;
box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
>div:nth-child(2) {
    width: auto !important;
    padding: 14px 24px;
    >div:first-child {
        height: 170px !important;
        border-radius : 4px;
        >div{
            width: 15px;
            height : 15px;

        }
    }
    >div:last-child {
        padding: 0px;
        >div:first-child {
            height: 5px;
            margin-top: 14px 
            border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
            >div{
                width: 15px;
                height : 15px;

            }
        }
        >div:last-child {
            display: none;
        }
    }
}
>div:last-child {
    padding: 0px 24px 14px 24px;
}

.rcp-hue-cursor{
    transform: translate(-10px,-6px);
    background: ${({ theme }) => theme.colourMaterialPrimary} !important;
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
}

`;
