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
    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Submission ID"
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={() => fetchData()}>Get Blob Button</button>
      {response}
    </div>
  );
}

export default GetBlob;
