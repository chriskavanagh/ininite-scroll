import React, { useEffect } from "react";

function useTitle() {
  useEffect(() => {
    document.title = "DOC TITLE HOOK";
  });
}

export default useTitle;
