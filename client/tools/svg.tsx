import React from "react";
import QRCode, { QRCodeToStringOptions } from "qrcode";

const useSVGComponent = () => {
  const SVGComponent = <T extends HTMLDivElement>({
    text,
    options,
  }: {
    text: string;
    options: QRCodeToStringOptions;
  }) => {
    const inputRef = React.useRef<T>(null);

    React.useEffect(() => {
      QRCode.toString(text, options, (error: any, svg: string) => {
        if (error) {
          throw error;
        }

        if (inputRef.current instanceof HTMLDivElement) {
          inputRef.current.innerHTML = svg;
        }
      });
    }, [text, options]);

    return <div ref={inputRef} />;
  };

  return SVGComponent;
};

export function useQRCode() {
  const SVG = useSVGComponent();

  return {
    SVG,
  };
}
