"use client";

import GetBlob from "./components/getBlob";
import HelloWorld from "./components/helloWorld";
import StoreBlob from "./components/storeBlob";

export default function Home() {
  return (
    <div>
      <HelloWorld />
      <h1>Get Blob</h1>
      <GetBlob />
      <h1>Store Blob</h1>
      <StoreBlob />
    </div>
  );
}
