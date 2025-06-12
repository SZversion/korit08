/** @jsxImportSource @emotion/react */
import IndexHeader from "../IndexHeader/IndexHeader";
import * as s from "./styles";
import React from "react";

function IndexLayout({ filter, setFilter, children, setSearchText }) {
  return (
    <div css={s.layout}>
      <IndexHeader filter={filter} setFilter={setFilter} setSearchText={setSearchText}></IndexHeader>
      {children}
    </div>
  );
}

export default IndexLayout;
