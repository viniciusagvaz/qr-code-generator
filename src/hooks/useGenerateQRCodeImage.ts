import { useState, useEffect } from "react";

export const useGenerateQRCodeImage = (svgData: string) => {
  const [pngFile, setPngFile] = useState<string | null>(null);

  const createCanvas = (svgData: string) => {
    const canvas = document.createElement("canvas");
    const img = new Image();

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d")?.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");

      setPngFile(pngFile);
    };
  };

  useEffect(() => {
    if (svgData) {
      createCanvas(svgData);
    }
  }, [svgData]);

  return { pngFile };
};
