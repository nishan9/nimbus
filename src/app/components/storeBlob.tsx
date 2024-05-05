import React, { useEffect, useState } from "react";

function StoreBlob() {
  const [response, setResponse] = useState("");
  const fetchData = async () => {
    const response = await fetch("/api/store", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ body: { firstName: "Nishan" } }),
    });

    const data = await response.json();
    setResponse(data.id);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={() => fetchData()} className="btn btn-primary">
        Store Blob !
      </button>
      Your Submission ID = {response}
    </div>
  );
}

export default StoreBlob;
