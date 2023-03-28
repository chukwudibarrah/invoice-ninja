import React from "react";
import Input from '../inputpage/inputpage'
import './homepage.css';



function Home(){

  const renderPage = () => {
  return <Input />;
  };

  return(
    <div className='home-background'>
    <div className='home-div'>
    <h1 className='h1'>Invoice Ninja</h1>
    <p>
      Hi Freelancer welcome to the PDF creator that will make all your invoices in a jiffy
    </p>
    <button type='button' onClick={renderPage()}>Click through to build your Invoice</button>
    </div>
  </div>
  )
}

export default Home;