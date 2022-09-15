import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import { css } from "@emotion/css";
import { _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

const Document = () => {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    resizable: true,

    className: {
      table: css`
        tr:hover td {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `,
      th: css`
        text-align: center;
        &:hover {
          background-color: #999;
          color: #fff;
        }
      `,
      td: css`
        color: #999;
        &:hover {
          color: #000;
        }
      `,
    },
    style: {
      table: {
        "font-size": "12px",
        "text-align": "center",
      },
    },
    columns: ["Document Name", "Document Type", "Download Document"],

    sort: true,
    search: true,
    pagination: {
      enabled: true,
      limit: 5,
      summary: false,
    },
    server: {
      url: "http://localhost:3000/api/document",
      then: (data) =>
        data.data.map((card) => [
          card.name_doc,
          card.type_doc,
          html(
            `<a href='${card.file_doc}' style="border: 1px solid #ccc;padding: 5px;border-radius: 5px;text-align: center; background-color:#32a4ba;color:white">Download</a>`
          ),
        ]),
      handle: (res) => {
        // no matching records found
        if (res.status === 404) return { data: [] };
        if (res.ok) return res.json();

        throw Error("oh no :(");
      },
    },
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });

  return <div ref={wrapperRef} />;
};
export default Document;
