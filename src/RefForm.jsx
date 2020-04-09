import React, { useRef } from "react";

function RefForm() {
  const refText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refText.current.value);
    refText.current.value = "";
  };

  const btnStyle = {
    padding: "6px 16px",
    marginLeft: "5px",
    borderRadius: "5px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ref Form</h2>
      <input ref={refText} />
      <button style={btnStyle} type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default RefForm;
