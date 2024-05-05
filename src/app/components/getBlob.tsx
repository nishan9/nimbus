import React, { useEffect, useState } from "react";

function GetBlob() {
  const [response, setResponse] = useState("");

  const fetchData = async () => {
    const response = await fetch("/api/retrieve", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setResponse(data.message);
  };

  return (
    <div>
      <button onClick={() => fetchData()}>Get Blob Button</button>
      {response}
    </div>
  );
}

export default GetBlob;
