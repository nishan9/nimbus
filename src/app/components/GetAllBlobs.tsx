import React, { useState, useEffect } from "react";

interface DataItem {
  etag: string;
  key: string;
}

function GetAllBlobs() {
  const [data, setData] = useState<DataItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

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

  const fetchDataSingle = async (id: string) => {
    const response = await fetch(`/api/retrieve/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setSelectedItem(data);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchData}>
        Get All
      </button>
      {data.length > 0 && (
        <>
          {data.map((e) => (
            <div key={e.key}>
              Key: {e.key}
              <button
                className="btn btn-primary"
                onClick={() => fetchDataSingle(e.key)}
              >
                Fetch Details
              </button>
            </div>
          ))}
        </>
      )}
      {selectedItem && (
        <div>
          <h3>Selected Item Details</h3>
          <div>{JSON.stringify(selectedItem)}</div>
        </div>
      )}
    </div>
  );
}

export default GetAllBlobs;
