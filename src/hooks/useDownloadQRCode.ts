import { useState, useEffect } from 'react';

export const useDownloadQRCode = () => {
  const [svgData, setSvgData] = useState<string | null>(null);
  const [pngFile, setPngFile] = useState<string | null>(null);

  const handleDownloadQRCode = () => {
    const svg = document.getElementById("QRCode");
    const svgData = svg?.outerHTML ?? null;
    
    setSvgData(svgData);
  };

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