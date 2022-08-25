import React from "react";

// import { Button } from './Button';
import { TagIncrementalAnalyticStatus, TagDecrementalAnalyticStatus } from "../tag";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Tags/Analytics Status Tags",
  component: TagIncrementalAnalyticStatus,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const IncrementalAnalyticsStatusTag = () => <TagIncrementalAnalyticStatus>2.0%</TagIncrementalAnalyticStatus>;

export const DecrementalAnalyticStatusTag = () => <TagDecrementalAnalyticStatus>3.0%</TagDecrementalAnalyticStatus>;
