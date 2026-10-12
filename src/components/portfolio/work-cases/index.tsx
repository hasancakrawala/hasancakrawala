import type { ComponentType } from "react";
import { MetaAdsPerformanceCase } from "./meta-ads-performance";
import { TrackingAnalyticsCase } from "./tracking-analytics";
import { RawdeeGlampingCase } from "./rawdee-glamping";
import { CustomerLoopStrategyCase } from "./customer-loop-strategy";
import { MultiBrandRepositioningCase } from "./multi-brand-repositioning";

export const WORK_CASE_COMPONENTS: Record<string, ComponentType> = {
  "meta-ads-performance": MetaAdsPerformanceCase,
  "tracking-analytics": TrackingAnalyticsCase,
  "rawdee-glamping": RawdeeGlampingCase,
  "customer-loop-strategy": CustomerLoopStrategyCase,
  "multi-brand-repositioning": MultiBrandRepositioningCase,
};
