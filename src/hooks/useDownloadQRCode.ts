import { useState, useEffect } from 'react';

export const useDownloadQRCode = () => {
  const [svgData, setSvgData] = useState<string | null>(null);
  const [pngFile, setPngFile] = useState<string | null>(null);

  const handleDownload = () => {
    const svg: HTMLElement | null = document.getElementById("QRCode");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      setSvgData(svgData);
    } else {
      alert('Não foi possível gerar o QRCode')
    }
  };

  useEffect(() => {
    if (svgData) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx!.drawImage(img, 25, 25);
        const pngFile = canvas.toDataURL("image/png");
        setPngFile(pngFile);
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
  }, [svgData]);

  useEffect(() => {
    if (pngFile) {
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    }
  }, [pngFile]);

  return { handleDownload };
};
