import type { Document } from "@contentful/rich-text-types";
import type { EntryFieldTypes } from "contentful";

export interface BlogFieldsSkeleton {
  contentTypeId: "dmgBlog";
  fields: {
    title: EntryFieldTypes.Text;
    type: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    writers: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    description: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  writers: string[];
  description: string;
  body: Document;
  createdAt: string;
  updatedAt: string;
}
