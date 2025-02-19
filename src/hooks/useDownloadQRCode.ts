import { useState, useEffect } from "react";
import { useGenerateQRCodeImage } from "./useGenerateQRCodeImage";

export const useDownloadQRCode = () => {
  const [svgData, setSvgData] = useState<string | null>(null);
  const pngFile = useGenerateQRCodeImage(svgData ?? "").pngFile;
  const handleDownloadQRCode = () => {
    const svg = document.getElementById("QRCode");
    setSvgData(svg?.outerHTML ?? null);

    if (svgData) {
      if (pngFile) {
        const downloadLink = document.createElement("a");
        downloadLink.download = "QRCode";
        downloadLink.href = pngFile;
        downloadLink.click();
      }
    }
  };

  useEffect(() => {
    if (pngFile) {
      const downloadLink = document.createElement("a");

      downloadLink.download = "QRCode";
      downloadLink.href = pngFile;
      downloadLink.click();
    }
  }, [pngFile]);

  return { handleDownloadQRCode };
};
