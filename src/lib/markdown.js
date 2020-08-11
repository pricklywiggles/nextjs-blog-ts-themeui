import html from "remark-html";
import unified from "unified";
import markdown from "remark-parse";

export const getHtmlFromMarkdown = async (content) =>
  unified().use(markdown).use(html).process(content);
