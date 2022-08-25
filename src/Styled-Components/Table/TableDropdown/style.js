import styled from "styled-components";

const TableDropdownWrapper = styled.div`
.btn-primary{
    color : ${({ theme }) => theme.colourTextPrimary};
    background: ${({ theme }) => theme.colourMaterialPrimary};
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder}
}

.btn-primary:hover{
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder}
}

.dropdown, .dropend, .dropstart, .dropup {
    position: inherit;
}

.btn {
    width : 52px;
    height : 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 3px;
    border-radius: 4px;
}

.dropdown-toggle::after{
    display: none;
}

.btn-check:active+.btn-primary, .btn-check:checked+.btn-primary, .btn-primary.active, .btn-primary:active, .show>.btn-primary.dropdown-toggle{
    background: ${({ theme }) => theme.colourBrandPrimary};
    border: none;

    svg{
        path{
            fill: ${({ theme }) => theme.colourTextReversePrimary};

        }
    }
    border : none
    box-shadow: none;
}
.btn-check:focus+.btn-primary, .btn-primary:focus{
    box-shadow: none;

}
.dropdown-menu {
    min-width : 52px;
    padding: 0px;
}

.dropdown-item {
    color : ${({ theme }) => theme.colourTextPrimary}
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize_14}
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dropdown-item:focus, .dropdown-item:hover{
    color: #474747
    background: #fff
}
`;

export { TableDropdownWrapper };
