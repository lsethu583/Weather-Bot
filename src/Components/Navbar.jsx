import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../Style/Navbar.css';

const Navbar = () => {
  const handleDownloadPDF = () => {
   
    html2canvas(document.body, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); 

     
      const imgWidth = 210; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width; 

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('entire-page.pdf'); 
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
