/* import React, { useEffect, useState } from "react";
import axios from "axios";

function KanjeRest() {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("https://api.kanye.rest");
      setData(data);
    };
    fetchData();
  }, [setData]);
  return (
    <div>
      <h1>Fetch Kanye Quotes!</h1>
      <h2>{data.quote}</h2>
    </div>
  );
}

export default KanjeRest; */
