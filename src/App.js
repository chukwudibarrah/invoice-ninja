import React, { useState } from "react";
import Home from './components/homepage/homepage'
import Input from './components/inputpage/inputpage'
import Navbar from "./components/navbar/navbar";
import './index.css';

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
      </div>
    );
}

export default App;
