import { createClient } from "contentful";
import { createClient as createManagementClient } from "contentful-management";

export function getDeliveryClient() {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
  });
}

export async function getManagementEnvironment() {
  const client = createManagementClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
  });

  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!);
  return space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT || "master");
}
