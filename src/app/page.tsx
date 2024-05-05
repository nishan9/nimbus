"use client";

import GetBlob from "./components/getBlob";
import HelloWorld from "./components/helloWorld";
import StoreBlob from "./components/storeBlob";

export default function Home() {
  return (
    <div>
      <HelloWorld />
      <div className="my-10">
        <h1>Get Blob Component</h1>
        <GetBlob />
      </div>
      <div className="my-10">
        <h1>Store Blob Component</h1>
        <StoreBlob />
      </div>
    </div>
  );
}
