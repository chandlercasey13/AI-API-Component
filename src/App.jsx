import { useState } from "react";
import Messages from "./components/aichatbox";
import KUTE from 'kute.js'
import "./App.css";

function App() {
  return (
    <>
    

      <div className=" h-svh flex justify-center " >
        
        
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
          
           <div className=" flex justify-center items-center absolute min-w-96 w-4/5  h-full p-9 sm:w-3/4 xl:w-1/2 ">
            <Messages />
          
        </div> 
        
      </div>
     

    </>
  );
}

export default App;
