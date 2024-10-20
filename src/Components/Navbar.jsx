import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../Style/Navbar.css';

const Navbar = () => {
  const handleDownloadPDF = () => {
    // Capture the entire page
    html2canvas(document.body, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // Create a PDF document

      // Calculate image width and height to fit into A4 size PDF
      const imgWidth = 210; // A4 page width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('entire-page.pdf'); // Save the PDF
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>⛅ Weather Bot</h2>
        </div>
        <div className="nav-links">
          <button onClick={handleDownloadPDF} className="download-btn">
            Download PDF
          </button>
        </div>
        <div className="burger-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

    
      
    </>
  );
};

export default Navbar;
