import { createClient } from "@sanity/client";
import sanityImageUrlBuilder from "@sanity/image-url";

if (!process.env.SANITY_API_TOKEN) {
  throw new Error("Missing env variable: SANITY_API_TOKEN");
}

export const sanityClient = createClient({
  projectId: "0ihtgybt",
  dataset: "production",
  useCdn: false,
  apiVersion: "v2021-10-21",
  token: process.env.SANITY_API_TOKEN,
  perspective: "published",
});

export const imageUrlBuilder = sanityImageUrlBuilder(sanityClient);
