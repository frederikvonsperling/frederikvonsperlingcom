import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "0ihtgybt",
  dataset: "production",
  useCdn: false,
  apiVersion: "v2021-10-21",
  token: process.env.SANITY_API_TOKEN,
});

export { sanityClient };
