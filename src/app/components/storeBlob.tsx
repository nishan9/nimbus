import React, { useEffect, useState } from "react";

function StoreBlob() {
  const fetchData = async () => {
    fetch("/api/store", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ keyword: "menaiala" }),
    }).then((response) => console.log(response.json()));
  };

  return (
    <div>
      <button onClick={() => fetchData()}>Store Blob Button</button>
    </div>
  );
}

export default StoreBlob;
