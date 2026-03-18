import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type {
  Document,
  Block,
  Inline,
  Text,
  TopLevelBlock,
} from "@contentful/rich-text-types";

type TiptapMark = { type: string; attrs?: Record<string, unknown> };

type TiptapNode = {
  type: string;
  content?: TiptapNode[];
  text?: string;
  marks?: TiptapMark[];
  attrs?: Record<string, unknown>;
};

type TiptapDoc = {
  type: "doc";
  content: TiptapNode[];
};

// ── Contentful → Tiptap ──

function contentfulMarksToTiptap(marks: { type: string }[]): TiptapMark[] {
  const result: TiptapMark[] = [];
  for (const mark of marks) {
    if (mark.type === MARKS.BOLD) result.push({ type: "bold" });
    else if (mark.type === MARKS.ITALIC) result.push({ type: "italic" });
    else if (mark.type === MARKS.UNDERLINE) result.push({ type: "underline" });
  }
  return result;
}

// Returns an array because HYPERLINK (inline) expands into multiple text nodes
function contentfulNodeToTiptap(
  node: Block | Inline | Text,
): TiptapNode[] {
  // Text node
  if ("value" in node && node.nodeType === "text") {
    if (!node.value) return [];
    return [
      {
        type: "text",
        text: node.value,
        marks: contentfulMarksToTiptap(node.marks || []),
      },
    ];
  }

  // Inline hyperlink → flatten children with link mark added
  if (node.nodeType === INLINES.HYPERLINK) {
    const uri = (node as Inline).data?.uri || "";
    const children = (node as Inline).content.flatMap(contentfulNodeToTiptap);
    return children.map((child) => ({
      ...child,
      marks: [
        ...(child.marks || []),
        { type: "link", attrs: { href: uri, target: "_blank" } },
      ],
    }));
  }

  // Block nodes — recurse and flatten child arrays
  const children = "content" in node
    ? node.content.flatMap(contentfulNodeToTiptap)
    : [];

  switch (node.nodeType) {
    case BLOCKS.PARAGRAPH:
      return [{ type: "paragraph", content: children }];
    case BLOCKS.HEADING_1:
      return [{ type: "heading", attrs: { level: 1 }, content: children }];
    case BLOCKS.HEADING_2:
      return [{ type: "heading", attrs: { level: 2 }, content: children }];
    case BLOCKS.HEADING_3:
      return [{ type: "heading", attrs: { level: 3 }, content: children }];
    case BLOCKS.UL_LIST:
      return [{ type: "bulletList", content: children }];
    case BLOCKS.OL_LIST:
      return [{ type: "orderedList", content: children }];
    case BLOCKS.LIST_ITEM:
      return [{ type: "listItem", content: children }];
    case BLOCKS.QUOTE:
      return [{ type: "blockquote", content: children }];
    default:
      return children.length
        ? [{ type: "paragraph", content: children }]
        : [];
  }
}

export function contentfulToTiptap(doc: Document): TiptapDoc {
  const content = doc.content.flatMap(contentfulNodeToTiptap);
  return {
    type: "doc",
    content: content.length ? content : [{ type: "paragraph" }],
  };
}

// ── Tiptap → Contentful ──

function tiptapMarksToContentful(
  marks?: TiptapMark[],
): { type: string }[] {
  if (!marks) return [];
  return marks
    .filter((m) => m.type !== "link")
    .map((m) => {
      if (m.type === "bold") return { type: MARKS.BOLD };
      if (m.type === "italic") return { type: MARKS.ITALIC };
      if (m.type === "underline") return { type: MARKS.UNDERLINE };
      return { type: m.type };
    });
}

function findLinkMark(marks?: TiptapMark[]): string | null {
  const link = marks?.find((m) => m.type === "link");
  return link?.attrs?.href as string | null;
}

function tiptapNodeToContentful(
  node: TiptapNode,
): (Block | Inline | Text)[] {
  if (node.type === "text") {
    const linkHref = findLinkMark(node.marks);
    const text: Text = {
      nodeType: "text",
      value: node.text || "",
      marks: tiptapMarksToContentful(node.marks),
      data: {},
    };
    if (linkHref) {
      return [
        {
          nodeType: INLINES.HYPERLINK,
          data: { uri: linkHref },
          content: [text],
        } as Inline,
      ];
    }
    return [text];
  }

  const children = (node.content || []).flatMap(tiptapNodeToContentful);

  const makeBlock = (nodeType: string): Block =>
    ({
      nodeType,
      data: {},
      content: children.length
        ? children
        : [{ nodeType: "text", value: "", marks: [], data: {} }],
    }) as unknown as Block;

  switch (node.type) {
    case "paragraph":
      return [makeBlock(BLOCKS.PARAGRAPH)];
    case "heading": {
      const level = (node.attrs?.level as number) || 1;
      const map: Record<number, string> = {
        1: BLOCKS.HEADING_1,
        2: BLOCKS.HEADING_2,
        3: BLOCKS.HEADING_3,
      };
      return [makeBlock(map[level] || BLOCKS.HEADING_1)];
    }
    case "bulletList":
      return [makeBlock(BLOCKS.UL_LIST)];
    case "orderedList":
      return [makeBlock(BLOCKS.OL_LIST)];
    case "listItem":
      return [makeBlock(BLOCKS.LIST_ITEM)];
    case "blockquote":
      return [makeBlock(BLOCKS.QUOTE)];
    default:
      return children.length ? [makeBlock(BLOCKS.PARAGRAPH)] : [];
  }
}

export function tiptapToContentful(json: TiptapDoc): Document {
  const content = (json.content || []).flatMap(
    tiptapNodeToContentful,
  ) as TopLevelBlock[];
  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: content.length
      ? content
      : [
          {
            nodeType: BLOCKS.PARAGRAPH,
            data: {},
            content: [{ nodeType: "text", value: "", marks: [], data: {} }],
          } as unknown as TopLevelBlock,
        ],
  };
}
