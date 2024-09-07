"use client";

import React from "react";
import { useQRCode } from "@/tools/svg";

const ProfileURLQR = () => {
  const { SVG } = useQRCode();
  const [currentUrl, setCurrentUrl] = React.useState("qr-code");

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <SVG
      text={currentUrl}
      options={{
        width: 50,
      }}
    />
  );
};

export default ProfileURLQR;
