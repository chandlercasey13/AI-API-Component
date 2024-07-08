import { useState } from "react";
import Messages from "./components/aichatbox";
import KUTE from 'kute.js'
import "./App.css";

function App() {
  return (
    <>
    

      <div className="w-screen h-screen flex justify-center " >
        
        
          <svg
            id="visual"
            width='100%'
            viewBox="0 0 900 450 "
            preserveAspectRatio="none"
            
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
           <defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="149" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="900" height="450" fill="#7209b7"></rect><g filter="url(#blur1)"><circle cx="34" cy="11" fill="#f72585" r="332"></circle><circle cx="789" cy="64" fill="#7209b7" r="332"></circle><circle cx="288" cy="227" fill="#f72585" r="332"></circle><circle cx="113" cy="309" fill="#f72585" r="332"></circle><circle cx="568" cy="358" fill="#7209b7" r="332"></circle><circle cx="200" cy="75" fill="#f72585" r="332"></circle></g></svg>
          
           <div className=" flex justify-center items-center absolute min-w-96 w-2/6 h-screen">
            <Messages />
          
        </div> 
        
      </div>
     

    </>
  );
}

export default App;
