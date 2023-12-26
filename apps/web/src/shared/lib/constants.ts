export const GET_UNPUBLISHED_ENTRIES =
  process.env.GET_UNPUBLISHED_ENTRIES === "true";

export const ENTRY_STATUS = GET_UNPUBLISHED_ENTRIES ? null : "published";
