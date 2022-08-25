import styled from "styled-components";

const BorderTableHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  width: 142px;
  height: 40px;
  border-right: 2px solid ${({ theme }) => theme.colourBrandPrimaryTintLight};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .fwPioE {
    margin-right: 10px;
  }

  .ebNkIy {
    margin-right: 10px;
  }
`;

const TableHeaderWrapper = styled(BorderTableHeaderWrapper)`
  border: none;
`;

const SmallBorderTableHeaderWrapper = styled(BorderTableHeaderWrapper)`
  width: 125px;
`;

const SmallTableHeaderWrapper = styled(BorderTableHeaderWrapper)`
  width: 125px;
  display: inline-flex;
  padding-left: 0px;
  gap: 20px;
  border: none;
`;

const TableHeaderTextWrapper = styled.div`

display: inline-flex;
align-items: center;

justify-content: space-between
font-family: ${({ theme }) => theme.fontWorkSansMedium}
font-size : ${({ theme }) => theme.fontSize_12}
color: ${({ theme }) => theme.colourTextPrimary};
border: none;
>div{
  display: flex;

    svg{
        margin-left: 5px;
    }
  }
`;

// Table Cell

const TableCellVehicleNameWrapper = styled(BorderTableHeaderWrapper)`
width: auto;
height: auto;
background: transparent
border-right: none;
gap: 20px;
:hover{
  background: ${({ theme }) => theme.colourMaterialPrimaryHover};
}
.bUBVTv table tr td > div{
  :hover{
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};

  }
}
`;

const TableCellContainer = styled(TableCellVehicleNameWrapper)`
  padding: 18px 40px;
`;

const SmallTableCellVehicleNameWrapper = styled(TableCellVehicleNameWrapper)`
  padding: 18px 40px;
`;

const TableCellButtonWrapper = styled(TableCellVehicleNameWrapper)`
  padding: 9px 40px;
`;
const TableCellActiveButtonWrapper = styled(TableCellVehicleNameWrapper)`
  padding: 14px 40px;
`;

const TableCellBatteryWrapper = styled(TableCellVehicleNameWrapper)`
  padding: 20px 40px;
`;

const TableCellColourWrapper = styled.div`
  background: ${({ theme }) => theme.colourStateInfoTintLight};
  color: ${({ theme }) => theme.colourTextPrimary};
  width: 112px;
  height: 27px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};

  input {
    width: 14px;
    height: 19px;
  }
  svg {
    width: 14px;
    height: 19px;
  }
  .css-j204z7-MuiFormControlLabel-root {
    margin-left: 0px;
    margin-right: 0px;
    gap: 10px;
  }
  .css-8je8zh-MuiTouchRipple-root {
    display: none;
  }

  .css-146k4iu-MuiButtonBase-root-MuiRadio-root {
    padding: 0px;
    :hover {
      background: none;
    }
  }
`;

const TableCellGeozoneWrapper = styled.div`
  background: ${({ theme }) => theme.colourStateInfoTintLight};
  color: ${({ theme }) => theme.colourTextPrimary};
  width: 112px;
  height: 27px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};

  svg {
    width: 12px;
    height: 12px;
  }
`;

const TableCellTextWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};

  font-size: ${({ theme }) => theme.fontSize14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

const SmallTableCellTextWrapper = styled.div`
font-family: ${({ theme }) => theme.fontWorkSansRegular}

    font-size: ${({ theme }) => theme.fontSize14}
    color: ${({ theme }) => theme.colourTextPrimary};

`;

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TableHeadingWrapper = styled.div`
width: 100%;
background: ${({ theme }) => theme.colourMaterialPrimary};
padding: 30px 30px 14px 30px;
display: inline-flex;
align-items: center
justify-content: space-between;
border-bottom: 2px solid ${({ theme }) => theme.colourMaterialBorder};

.gvkkPt {
    margin: 10px;
}

>div:last-child{
  display: inline-flex;
  gap: 14px;
}
`;

const FilterContainer = styled(TableHeadingWrapper)`
  padding: 14px 30px;
  color: ${({ theme }) => theme.colourTextSecondary};
font-family : ${({ theme }) => theme.fontWorkSansRegular}
font-size : ${({ theme }) => theme.fontSize_10}
border-bottom: none;

.dropdown{
    display: inline-flex;
    margin: 0px 10px;
}

.gtIyWc{
    margin: 0px 10px;

}
`;

const FilterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0px !important;
`;

const TableBodyWrapper = styled.div`
width: 100%

  height: 55vh;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colourMaterialPrimary}
`;

const TableBodyContentIconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 14px;
`;

const TableTableWrapper = styled.div`
overflow:auto;
-ms-overflow-style: none; 
scrollbar-width: none; 

::-webkit-scrollbar{
    display: none;
}
  table {
    width: 100%;
    background: ${({ theme }) => theme.colourMaterialPrimary};



    tr {
        border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
        

      th{
        padding: 0px;
        > div {
          width: 100% !important;
          background: ${({ theme }) =>
            theme.colourMaterialSecondary} !important;
          justify-content: start;
          padding-left: 40px;
        }
        :first-child {
            border-right: 2px solid ${({ theme }) =>
              theme.colourBrandPrimaryTintLight};
          }
          :last-child {
            border-left: 2px solid ${({ theme }) =>
              theme.colourBrandPrimaryTintLight};
          }
        }

        td {
          cursor:pointer;
            padding: 18px 40px;
            > div {
              background:transparent
              width: max-content !important;
            }
            :first-child {
                border-right: 2px solid ${({ theme }) =>
                  theme.colourBrandPrimaryTintLight};
              }
              :last-child {
                border-left: 2px solid ${({ theme }) =>
                  theme.colourBrandPrimaryTintLight};
              }
              
    :hover {
        background: ${({ theme }) => theme.colourMaterialPrimaryHover};
        .bPPWzw{
            background: ${({ theme }) => theme.colourMaterialPrimaryHover};

        }
    }
            }

        


      }
    }
  }
`;

const TablePaginationWrapper = styled(TableBodyContentIconWrapper)`
  width: 100%;
  margin-top: 30px; 
  .css-12izofq-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background: ${({ theme }) => theme.colourBrandPrimaryTintLight};
    color: ${({ theme }) => theme.colourBrandPrimaryDark} !important;
}

.css-8je8zh-MuiTouchRipple-root{
  display: none;
}

.css-12izofq-MuiButtonBase-root-MuiPaginationItem-root:hover{

}

  .MuiPagination-root {
    .MuiPagination-ul {
      flex-wrap: nowrap;
      li {

        button{
            width: 45px;
            height : 47px;
            font-size: ${({ theme }) => theme.fontSize14}
            font-family : ${({ theme }) => theme.fontWorkSansRegular}
            margin: 0px;
            border-radius : 0px;
    color: ${({ theme }) => theme.colourTextSecondary};
    background: ${({ theme }) => theme.colourMaterialPrimary};

            border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

            :hover{
                background: ${({ theme }) => theme.colourMaterialPrimaryHover};
                color: ${({ theme }) => theme.colourTextPrimary};
            }
        }

        :nth-child(2){
            button{
                border-bottom-left-radius: 4px;
                border-top-left-radius: 4px;
            }
        }

        :nth-last-child(2){
            button{
                border-bottom-right-radius: 4px;
                border-top-right-radius: 4px;
            }
        }

        &:first-child {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          button{
            width: 108px;
            height : 47px;
            border-radius : 4px;
            margin-right : 14px;
            color: ${({ theme }) => theme.colourTextPrimary};
            background: ${({ theme }) => theme.colourMaterialPrimary};
            border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

            :hover{
                background: ${({ theme }) => theme.colourBrandPrimaryTint};
            }

          }
          > button::after {
            content: "previous";
          }
          .css-nweyq8-MuiSvgIcon-root-MuiPaginationItem-icon {
            display: none;
          }
        }
        &:last-child {

          display: flex;
          justify-content: flex-end;
          align-items: center;
          button{
            width: 80px;
            height : 47px;
            border-radius : 4px;
            margin-left : 14px;
            color: ${({ theme }) => theme.colourTextPrimary};
            background: ${({ theme }) => theme.colourMaterialPrimary};
            border: 1px solid ${({ theme }) => theme.colourMaterialBorder};


            
            :hover{
                background: ${({ theme }) => theme.colourBrandPrimaryTint}
            }
          }
          > button::before {
            content: "next";
          }
          .css-nweyq8-MuiSvgIcon-root-MuiPaginationItem-icon {
            display: none;
          }
        }
      }
    }
  }
`;

export {
  TableWrapper,
  BorderTableHeaderWrapper,
  TableHeaderWrapper,
  SmallBorderTableHeaderWrapper,
  SmallTableHeaderWrapper,
  TableHeaderTextWrapper,
  TableCellVehicleNameWrapper,
  SmallTableCellVehicleNameWrapper,
  TableCellButtonWrapper,
  TableCellTextWrapper,
  TableHeadingWrapper,
  FilterWrapper,
  FilterContainer,
  TableTableWrapper,
  TableBodyWrapper,
  TableBodyContentIconWrapper,
  TablePaginationWrapper,
  TableCellColourWrapper,
  TableCellGeozoneWrapper,
  SmallTableCellTextWrapper,
  TableCellActiveButtonWrapper,
  TableCellContainer,
  TableCellBatteryWrapper,
};
