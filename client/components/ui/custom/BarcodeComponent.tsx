"use client";

import { ReactBarcode } from "react-jsbarcode";

const BarcodeComponent = ({ value }: { value: string }) => {
  return (
    <ReactBarcode
      options={{
        height: 25,
        fontSize: 12,
      }}
      value={value}
    />
  );
};

export default BarcodeComponent;
