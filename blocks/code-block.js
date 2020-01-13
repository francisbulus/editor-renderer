import React from "react";
import ReactHtmlParser from "react-html-parser";

const CodeBlock = data => {
  if (!data) return "";

  let content;
  if (typeof data === "object" && data.text && typeof data.code === "string")
    content = data.code;

  return content ? (
    <div className="cdx-block ce-code">
      <textarea className="ce-code__textarea cdx-input">
        {ReactHtmlParser(content)}
      </textarea>
    </div>
  ) : (
    ""
  );
};

export default CodeBlock;
