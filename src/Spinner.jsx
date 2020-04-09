import React from "react";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";

function Spinner({ loading }) {
  const override = css`
    display: block;
    margin: 50px auto 0 auto;
    border-color: red;
    width: 200px;
  `;

  const divStyle = {
    marginTop: "20px",
    fontSize: "20px"
  };
  return (
    <>
      <BarLoader
        height={8}
        css={override}
        loading={loading}
        color={"#006400"}
      />
      <div style={divStyle}>Loading. . .</div>
    </>
  );
}

export default Spinner;
