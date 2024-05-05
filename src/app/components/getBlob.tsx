import React, { useEffect, useState } from "react";

function GetBlob() {
  const [response, setResponse] = useState("");
  const [id, setId] = useState("");

  const fetchData = async () => {
    const response = await fetch(`/api/retrieve/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setResponse(data.firstName);
  };

  return (
    <div className="text-center space-y-6">
      <h1 className="text-2xl font-semibold">Get Blob</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="Submission ID"
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={() => fetchData()} className="btn btn-primary">
        Retrieve Data
      </button>
      Response = {response}
    </div>
  );
}

export default GetBlob;
