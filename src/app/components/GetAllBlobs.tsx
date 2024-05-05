import React, { useState } from "react";

function GetAllBlobs() {
  const [data, setData] = useState<DataItem[]>([]);
  const fetchData = async () => {
    const response = await fetch(`/api/retrieveAll`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  interface DataItem {
    etag: string;
    key: string;
  }

  return (
    <div>
      <button onClick={() => fetchData()}>Get All</button>
      {data.length > 0 && (
        <>
          {data.map((e: DataItem) => (
            <div key={e.key}>Key: {e.key}</div>
          ))}
        </>
      )}
    </div>
  );
}

export default GetAllBlobs;
