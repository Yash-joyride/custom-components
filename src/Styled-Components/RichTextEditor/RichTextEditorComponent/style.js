import styled from "styled-components";

export const RichTextEditorWrapper = styled.div`
  > div {
    > div:nth-child(2) {
      display: none;
    }
  }

  .tox .tox-tbtn {
    padding: 14px 24px;
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    width: auto;
    height: auto;
    margin: 0px;
    border-radius: 4px;

    :hover {
      border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
      background: ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;
    }
    :active {
      background: none;
      box-shadow: none;
    }
    :focus {
      background: none;
      box-shadow: none;
    }
  }

  .tox .tox-tbtn--enabled {
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    background: ${({ theme }) => theme.colourMaterialBorder};
  }

  .tox .tox-toolbar__primary {
    background-image: none;
    justify-content: space-between;

    > div:last-child {
      span {
        width: 10px;
        height: 12px;
        display: inline-flex;
        align-items: center;
      }
    }
  }

  .tox .tox-toolbar__group {
    gap: 10px;
    padding: 0px;
  }

  .tox:not(.tox-tinymce-inline) .tox-editor-header {
    box-shadow: none;
    background: none;
    padding: 0px;
  }

  .tox .tox-split-button {
    margin: 0px;
    border-radius: 4px;
    padding: 14px 24px;
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 4px;
    gap: 5px;
    cursor: pointer;

    > span {
      :hover {
        border: none;
      }
    }

    :hover {
      background: ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;
    }
    :active {
      background: ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;
    }
    :focus {
      background: ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;
    }
    :visited {
      background: ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;
    }

    > span {
      padding: 0px;
      border: none;
      border-radius: 0px;
      background: none;
    }
  }

  .tox .tox-sidebar-wrap {
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 4px;
  }

  .tox .tox-editor-container {
    gap: 10px;
  }

  .tox-tinymce {
    border: none;
    border-radius: 0;
  }

  .tox .tox-edit-area {
    padding: 5px;
    background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    border-radius: 4px;
  }

  .tox .tox-edit-area__iframe {
    background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
    position: unset;
  }

  .tox .tox-tbtn--select {
    gap: 5px;
  }

  .tox.tox-tinymce-aux .tox-toolbar__overflow {
    top: 261.5px !important;
  }
`;
