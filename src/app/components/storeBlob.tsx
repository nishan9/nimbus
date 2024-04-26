import React, { useEffect, useState } from "react";

function StoreBlob() {
  const fetchData = async () => {
    fetch("/api/store", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ keyword: "menaiala" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={() => fetchData()}>Hi</button>
    </div>
  );
}

export default StoreBlob;
