"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadButton() {
  const handleDownload = () => {
    // Example download functionality
    // You can replace this with your actual download logic
    const link = document.createElement("a");
    link.href = "/placeholder.svg?height=100&width=100"; // Replace with your file URL
    link.download = "downloaded-file.svg"; // Replace with your desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Outline Variant */}
      <Button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-sky-600 text-white cursor-pointer hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-md font-bold"
      >
        <Download className="h-4 w-4" />
        Resume Download now
      </Button>
    </div>
  );
}
