import styled from "styled-components";

const QRCodeCardWrapper = styled.div`
    padding: 14px 24px;
    background: ${({ theme }) => theme.colourMaterialPrimary};
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 4px;
    display: inline-flex;
    align-items: center;

    button{
        width: 108px;
        background: ${({ theme }) => theme.colourMaterialPrimary};
        border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
        border-radius: 4px;
        font-family : ${({ theme }) => theme.fontWorkSansMedium}
        font-size : ${({ theme }) => theme.fontSize_18}
        color : ${({ theme }) => theme.colourTextPrimary};
        display: inline-flex;
        align-items: center;
        justify-content: space-evenly;
        text-transform: none;

        :hover{
            background: none;
        }
    }

    :hover {
        background: ${({ theme }) => theme.colourMaterialPrimaryHover};

    }
`;

const QRCodeCardTextWrapper = styled.div`
    width: 441px;
    height : 24px;
    font-family : ${({ theme }) => theme.fontWorkSansMedium}
    font-size : ${({ theme }) => theme.fontSize_18}
    color : ${({ theme }) => theme.colourTextPrimary};
    padding-left :24px;
`;

export { QRCodeCardWrapper, QRCodeCardTextWrapper };
