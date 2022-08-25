import styled from "styled-components";

const ChargedCircularProgressWrapper = styled.div`
  span {
    position: absolute;
    top: -1px;
    left: -5.5px;
    width: 49px !important;
    height: 44px !important;
    z-index: 9;

    svg {
      circle {
        stroke-width: 2px;
        color: ${({ theme }) => theme.colourStateSuccess};
        stroke-linecap: round;
      }
    }
  }
`;

const ChargedCircularProgressContainerWrapper = styled.div`
  span {
    position: absolute;
    top: -1px;
    left: -5.5px;
    width: 49px !important;
    height: 44px !important;

    svg {
      circle {
        stroke-width: 2px;
        color: ${({ theme }) => theme.colourStategreyLight};
        stroke-linecap: round;
      }
    }
  }
`;

const NeedsChargeCircularProgressWrapper = styled.div`
  span {
    position: absolute;
    top: -1px;
    left: -5.5px;
    width: 49px !important;
    height: 44px !important;
    z-index: 9;

    svg {
      circle {
        stroke-width: 2px;
        color: ${({ theme }) => theme.colourStateWarning};
        stroke-linecap: round;
      }
    }
  }
`;

const NeedsChargeCircularProgressContainerWrapper = styled.div`
  span {
    position: absolute;
    top: -1px;
    left: -5.5px;
    width: 49px !important;
    height: 44px !important;

    svg {
      circle {
        stroke-width: 2px;
        color: ${({ theme }) => theme.colourStateWarningTint};
        stroke-linecap: round;
      }
    }
  }
`;

const BatterLowCircularProgressWrapper = styled.div`
  span {
    position: absolute;
    top: -1px;
    left: -5.5px;
    width: 49px !important;
    height: 44px !important;
    z-index: 9;

    svg {
      circle {
        stroke-width: 2px;
        color: ${({ theme }) => theme.colourStateError};
        stroke-linecap: round;
      }
    }
  }
`;

const BatteryLowCircularProgressContainerWrapper = styled.div`
  span {
    position: absolute;
    top: -1px;
    left: -5.5px;
    width: 49px !important;
    height: 44px !important;

    svg {
      circle {
        stroke-width: 2px;
        color: ${({ theme }) => theme.colourStateErrorTintLight};
        stroke-linecap: round;
      }
    }
  }
`;

export {
  ChargedCircularProgressWrapper,
  ChargedCircularProgressContainerWrapper,
  NeedsChargeCircularProgressWrapper,
  NeedsChargeCircularProgressContainerWrapper,
  BatterLowCircularProgressWrapper,
  BatteryLowCircularProgressContainerWrapper,
};
