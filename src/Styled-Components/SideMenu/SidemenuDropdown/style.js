import styled from "styled-components";

const SidemenuDropdownWrapper = styled.div`
width : 38px;
height : 37px;
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 0px 3px;
border-radius: 8px;
> div{
    display: inline-flex;
}
.btn-primary{
    background: ${({ theme }) => theme.colourMaterialSecondary};
    border: none;
}

.btn-primary:hover{
    background: ${({ theme }) => theme.colourMaterialSecondaryHover};
    border: none;
}

.dropdown, .dropend, .dropstart, .dropup {
    position: inherit;
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
    min-width : 38px;
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

const SidemenuDropdownContainer = styled.div`
  position: relative;
`;

const SidemenuModalWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-radius: 8px;
  padding: 6px 8px;
  gap: 8px;
  display: inline-grid;
`;

export {
  SidemenuDropdownWrapper,
  SidemenuDropdownContainer,
  SidemenuModalWrapper,
};
