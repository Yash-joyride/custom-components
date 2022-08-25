import React from "react";

import { StatisticComponentWrapper, StatisticComponentHeadingWrapper, StatisticComponentDetailsWrapper, StatisticComponentCaptionWrapper } from "./style";

import { StatisticComponentHeadingTextWrapper, StatisticComponentDetailsTextWrapper, StatisticComponentCaptionTextWrapper } from "../../Typography/Paragraph";

import { TagIncrementalAnalyticStatus } from "../../../stories/TagStory/tag";

import { Label } from "../../labels";

export const StatisticComponent = ({ heading, stats, label, percentage, icon }) => {
  return (
    <StatisticComponentWrapper>
      <StatisticComponentHeadingWrapper>
        <StatisticComponentHeadingTextWrapper>{heading}</StatisticComponentHeadingTextWrapper>
        <TagIncrementalAnalyticStatus>{percentage}</TagIncrementalAnalyticStatus>
      </StatisticComponentHeadingWrapper>
      <StatisticComponentDetailsWrapper>
        <StatisticComponentDetailsTextWrapper>{stats}</StatisticComponentDetailsTextWrapper>
        {icon}
      </StatisticComponentDetailsWrapper>
      <StatisticComponentCaptionWrapper>
        <Label label={label} />
      </StatisticComponentCaptionWrapper>
    </StatisticComponentWrapper>
  );
};
