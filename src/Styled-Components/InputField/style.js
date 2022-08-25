import styled from "styled-components";

const InputFieldContainer = styled.div`
  gap: 10px;
  p {
    :hover {
      cursor: pointer;
    }
  }
  &.InputError {
    > div:last-child {
      > div {
        input {
          background: ${({ theme }) => theme.colourStateErrorTintExtraLight};
          border: 1px solid ${({ theme }) => theme.colourStateErrorTintLight};
          :hover {
            background: ${({ theme }) => theme.colourStateErrorTintExtraLight};
          }
          :focus {
            background: ${({ theme }) => theme.colourStateErrorTintExtraLight};
          }
        }
        > div {
          position: absolute;
          right: 24px;
        }
      }
    }
  }

  &.InputSuccess {
    > div:last-child {
      > div {
        input {
          background: ${({ theme }) => theme.colourStateSuccessTintExtraLight};
          border: 1px solid ${({ theme }) => theme.colourStateSuccessTintLight};
          :hover {
            background: ${({ theme }) =>
              theme.colourStateSuccessTintExtraLight};
          }
          :focus {
            background: ${({ theme }) =>
              theme.colourStateSuccessTintExtraLight};
          }
        }
        > div {
          position: absolute;
          right: 24px;
        }
      }
    }
  }

  width: 100%;
  display: inline-grid;

  > div:first-child {
    width: auto;
  }
  > div:last-child {
    > div {
      font-family: ${({ theme }) => theme.fontWorkSansRegular} !important;
      font-size: ${({ theme }) => theme.fontSize14} !important;

      color: ${({ theme }) => theme.colourTextPrimary} !important;
      padding: 0px;

      input {
        width: 100%;

        background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
        padding: 14px 24px;

        border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
        border-radius: 4px;
        :hover {
          background: ${({ theme }) => theme.colourMaterialPrimaryHover};
        }
        :focus {
          background: ${({ theme }) => theme.colourMaterialPrimary};
        }
      }
      fieldset {
        display: none;
      }
    }
  }
`;

const InputFieldErrorContainer = styled(InputFieldContainer)``;

const InputFieldSuccessContainer = styled(InputFieldContainer)``;

const InputFieldHiddenContainer = styled(InputFieldContainer)`
  > div:last-child {
    > div {
      input {
        background: ${({ theme }) => theme.colourMaterialPrimary};
        border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
        :hover {
          background: ${({ theme }) => theme.colourMaterialPrimary};
        }
        :focus {
          background: ${({ theme }) => theme.colourMaterialPrimary};
        }
      }
      > div {
        position: absolute;
        right: 24px;
        cursor: pointer;
      }
    }
  }
`;
export {
  InputFieldContainer,
  InputFieldErrorContainer,
  InputFieldSuccessContainer,
  InputFieldHiddenContainer,
};
