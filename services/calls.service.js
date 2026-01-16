import * as orgA from "@/data/organizationA";
import * as orgB from "@/data/organizationB";

export const getCalls = (tenant) =>
  tenant === "A" ? orgA.calls : orgB.calls;
