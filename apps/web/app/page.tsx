import { Button, Header } from "ui";
import { createClient } from "@sanity/client";

export default async function Page() {
  const client2 = createClient({
    projectId: "0ihtgybt",
    dataset: "production",
    useCdn: true,
    apiVersion: "v2021-10-21",
    token: "",
  });

  const posts = await client2.fetch("*[]");

  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
}
