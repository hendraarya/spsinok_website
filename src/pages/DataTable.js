import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const DataTable = () => {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: [
      "Name Employee",
      "Departement",
      "Section",
      "Gender",
      {
        name: "Actions",
        formatter: (_, row) =>
          html(`<img
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
        width="50" height="50"
        alt="..."
      />`),
      },
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
          card.employee_name,
          card.departement,
          card.section,
          card.gender,
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
