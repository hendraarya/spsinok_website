import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import { css } from "@emotion/css";
// import { _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

const DataTable = () => {
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
    columns: [
      "NIK",
      {
        name: "Employee",
        columns: [
          {
            name: "Picture",
          },
          {
            name: "Name",
          },
        ],
      },
      "Departement",
      "Section",
      "Gender",
      { name: "Join Date", formatter: "" },
      "Group",
      "Position",
      "Shift",
    ],

    sort: true,
    search: true,
    pagination: {
      enabled: true,
      limit: 20,
      summary: false,
    },
    server: {
      url: "http://localhost:3000/api/employees",
      then: (data) =>
        data.data.map((card) => [
          card.employee_nik,
          html(`<img
        src='${card.profile_picture}' 
        width="50" height="50" style="border-radius: 10%;"
        alt="..."
      />`),
          card.employee_name,
          card.departement,
          card.section,
          card.gender,
          card.join_date,
          card.group_code,
          card.employee_position,
          card.shift,
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
export default DataTable;
