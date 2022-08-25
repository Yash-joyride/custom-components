import styled from "styled-components";

const FileUploadWrapper = styled.div`

    &.FileUploadError {
      background: ${({ theme }) => theme.colourStateErrorTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateErrorTint};
  :hover {
    background: ${({ theme }) => theme.colourStateErrorTintLight};
    label {
      background: ${({ theme }) => theme.colourMaterialPrimary};
    }
  }
    }

    height : 47px;
    background : ${({ theme }) => theme.colourMaterialPrimary};
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize14}
    color: ${({ theme }) => theme.colourTextPrimary};
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px;
    :hover {
        background: ${({ theme }) => theme.colourMaterialPrimaryHover};

        label{
            transition: none;
                background: ${({ theme }) => theme.colourMaterialPrimaryHover};
                box-shadow: none;
        }
    }
    .css-8je8zh-MuiTouchRipple-root{
        display: none;
    }

    >div{
        padding-left : 20px;
    }

    label{
        width: 100px;
        height : 37px;
        background : ${({ theme }) => theme.colourMaterialPrimary};
        font-family : ${({ theme }) => theme.fontWorkSansRegular}
        font-size : ${({ theme }) => theme.fontSize14}
        color: ${({ theme }) => theme.colourTextPrimary};
        border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
        border-radius: 4px;
        box-shadow: none;
        padding: 0px;
        justify-content: space-evenly;
        text-transform: none;
        margin-left: 25px;
        transition: none;


    }
`;

const FileUploadContainer = styled.div`
  display: inline-grid;
  > div:first-child {
    width: auto;
    margin-bottom: 10px;
  }
`;

const FileUploadErrorWrapper = styled(FileUploadWrapper)``;

const FileUploadDisabledWrapper = styled(FileUploadWrapper)`
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  color: ${({ theme }) => theme.colourTextDisabled};
  cursor: not-allowed;

  label {
    background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
    color: ${({ theme }) => theme.colourTextDisabled};
    cursor: not-allowed;

    svg {
      path {
        fill: ${({ theme }) => theme.colourTextDisabled};
      }
    }
  }
  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
    label {
      background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
    }
  }
`;

export {
  FileUploadWrapper,
  FileUploadContainer,
  FileUploadErrorWrapper,
  FileUploadDisabledWrapper,
};
