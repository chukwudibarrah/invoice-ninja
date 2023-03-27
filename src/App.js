import React, { useState } from "react";
import Home from './components/homepage/homepage'
import Input from './components/inputpage/inputpage'
import Navbar from "./components/navbar/rnavbar";
import './index.css';
import TestApi from './components/testapi/Testapi'
import ApiTest from './components/testapi/Apitest'

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
        <TestApi/>
        <ApiTest/>
      </div>
    );
}

export default App;
