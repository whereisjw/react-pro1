import React, { useState } from "react";
import "../App.css";

const Filter = ({ filters, filter, setFilter }) => {
  return (
    <header>
      <ul>
        {filters.map((v, i) => (
          <li key={i}>
            <button
              value={v}
              className={filter == v ? "filter selected" : "filter"}
              onClick={() => {
                setFilter(v);
              }}>
              {v}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Filter;
