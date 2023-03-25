import React, { useState } from "react";
import CreatePdf from "./components/createpdf";
import Home from './components/homepage/homepage'
import Input from './components/inputpage/inputpage'
import Navbar from "./components/navbar/rnavbar";
import './index.css';
import Pdf from "./components/pdf/pdf";

function App() {
    const [currentPage, setCurrentPage] = useState("Home");

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const renderPage = () => {
      if (currentPage === "Home") {
        return <Home />;
      }  else {
        return <Input />;
      }
    };
  
    return (
      <div>
        <Navbar
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
        <CreatePdf/>
      </div>
    );
}

export default App;
