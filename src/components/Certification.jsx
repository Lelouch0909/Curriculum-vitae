import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// Configurez le worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs";

function Certification({ name, issuer, file, description }) {
  const [showDescription, setShowDescription] = useState(false);


  return (
    <div className="max-w-[300px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="flex flex-col items-center">
        <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
          <Document
            file={file}
            onLoadSuccess={() => {
              console.log("PDF chargé avec succès");
            }}
            className="cursor-pointer"
          >
            <Page 
              pageNumber={1} 
              width={230}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        <h3 className="font-montserrat font-bold text-black text-center mb-1">
          {name}
        </h3>
        <div className="text-sm text-gray-500 mb-3">
          {issuer}
        </div>

        {/* Boutons */}
        <div className="flex  gap-2">
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-custom-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Show
          </a>
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="px-4 py-2 bg-custom-pink text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            {showDescription ? 'Less' : 'More'}
          </button>
        </div>

        {/* Description */}
        {showDescription && (
          <p className="text-sm text-gray-500 mt-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Certification;