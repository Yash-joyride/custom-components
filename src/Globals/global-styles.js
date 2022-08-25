import { injectGlobal } from "styled-components";
import WorkSansThin from "../assets/fonts/WorkSans-Thin.ttf";
import WorkSansRegular from "../assets/fonts/WorkSans-Regular.ttf";
import WorkSansLight from "../assets/fonts/WorkSans-Light.ttf";
import WorkSansMedium from "../assets/fonts/WorkSans-Medium.ttf";
import WorkSansBold from "../assets/fonts/WorkSans-Bold.ttf";

injectGlobal`

    @font-face {
        font-family: 'WorkSansThin';
        src: url(${WorkSansThin}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'WorkSansRegular';
        src: url(${WorkSansRegular}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'WorkSansLight';
        src: url(${WorkSansLight}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'WorkSansMedium';
        src: url(${WorkSansMedium}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'WorkSansBold';
        src: url(${WorkSansBold}) format('truetype');
        font-style: normal;
    }
`;
