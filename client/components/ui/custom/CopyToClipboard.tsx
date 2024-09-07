"use client";

import { useEffect, useState } from "react";
import { Button } from "../button";
import { CheckIcon, CopyIcon } from "lucide-react";

const CopyToClipboard = ({ value }: { value: string }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (clicked) {
        setClicked(false);
      }
    }, 1500);
  }, [clicked]);

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setClicked(true);
      }}
    >
      {clicked ? (
        <CheckIcon color="green" className="size-4" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </Button>
  );
};

export default CopyToClipboard;
