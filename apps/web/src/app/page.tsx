import { Button, Header } from "ui";
import { createClient } from "@sanity/client";

export default async function Page() {
  const client2 = createClient({
    projectId: "0ihtgybt",
    dataset: "production",
    useCdn: true,
    apiVersion: "v2021-10-21",
    token:
      "skGKcEmNbd24JY7Ff0MekzaR1ZhcwRDqXCmdWAVMwrMDc7fGIIUjRpCmgpuXH67ogxuv7jEPhQtJKtahQc39TmzbyR5rDSGDClT2tJ5uWYp7QrwOeHZNuxR6PWa8EfkLEhlkAnGR4Ags0gMUYYacagiz2OrCyyBtUNvqvW7GFGQ9CvUx66ed",
  });

  const posts = await client2.fetch("*[_type == 'post']");

  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
}
