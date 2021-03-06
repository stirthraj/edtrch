import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// using ES6 modules
// import { Document } from 'react-pdf/dist/esm/entry.parcel';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import './style.css'

// import "./Sample.less";
// src\components\Pdf\ReactJSNotesForProfessionals.pdf
import pdfFile from "./ReactJSNotesForProfessionals.pdf";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function Pdf() {
  const [file, setFile] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="container-fluid">
      <header>
        <h1>react-pdf sample page</h1>
      </header>
      <div className="Example__container text-center">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
