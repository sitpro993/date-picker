const ValidateStatuses = [
  "success",
  "warning",
  "error",
  "validating",
  "",
] as const;
export type ValidateStatus = (typeof ValidateStatuses)[number];
