import styled from "styled-components";

const SectionHeaderWrapper = styled.div`
    width: 100%
    background: ${({ theme }) => theme.colourMaterialPrimary};
    padding: 30px 40px;

    .css-ahj2mt-MuiTypography-root{
        font-family : ${({ theme }) => theme.fontWorkSansRegular}
        font-size : ${({ theme }) => theme.fontSize_10} 
        color: ${({ theme }) => theme.colourBrandPrimaryDark} ;

    }

    .css-9bryhr-MuiTypography-root-MuiLink-root{
        color: ${({ theme }) => theme.colourTextSecondary} ;

    }
    
    .MuiBreadcrumbs-li{
        font-family : ${({ theme }) => theme.fontWorkSansRegular}
        font-size : ${({ theme }) => theme.fontSize_10} 
    }
`;

const SectionHeaderPathway = styled.div``;

export { SectionHeaderWrapper };
