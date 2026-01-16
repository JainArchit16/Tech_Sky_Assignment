import * as orgA from "@/data/organizationA";
import * as orgB from "@/data/organizationB";

export const getLeads = (tenant) =>
  tenant === "A" ? orgA.leads : orgB.leads;
