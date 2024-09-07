"use client";

import { ReactNode, useEffect, useState } from "react";
import { Button } from "../button";
import { CheckIcon, CopyIcon } from "lucide-react";

const CopyToClipboard = ({
  value,
  icon = <CopyIcon className="size-4" />,
}: {
  value: string;
  icon?: ReactNode;
}) => {
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
      title={`Copy ${value}`}
      size="icon"
      variant="outline"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setClicked(true);
      }}
    >
      {clicked ? <CheckIcon color="green" className="size-4" /> : icon}
    </Button>
  );
};

export default CopyToClipboard;
