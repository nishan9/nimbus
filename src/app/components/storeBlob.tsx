import React, { useEffect, useState } from "react";

function StoreBlob() {
  const [response, setResponse] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fetchData = async () => {
    const response = await fetch("/api/store", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        body: { firstName: firstName, lastName: lastName },
      }),
    });

    const data = await response.json();
    setResponse(data.id);
  };

  return (
    <div className="text-center space-y-6">
      <h1 className="text-2xl font-semibold">Store Blob</h1>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input input-bordered w-full max-w-xl"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input input-bordered w-full max-w-xl"
        />
      </div>
      <button
        onClick={() => fetchData()}
        className="btn btn-primary w-full max-w-xs"
      >
        Store Blob
      </button>
      <br></br>
      <div className="mt-4">Your Submission ID = {response}</div>
    </div>
  );
}

export default StoreBlob;
