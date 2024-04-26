import React from "react";
import { useEffect, useState } from "react";

function HelloWorld() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/hell");

      if (response.ok) {
        const data = await response.json();
        setData(data.message);
      }
    };
    fetchData();
  }, []);
  return <div>{data}</div>;
}

export default HelloWorld;
