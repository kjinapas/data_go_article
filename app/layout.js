"use client"

import React from "react";

import Footer from "./Components/Footer";
import "../app/globals.css";


export default function RootLayout({ children}) {
  

  return (
    <html lang="en">
      <body >

    
        {children}

    <Footer/>
        </body>
    </html>
  );
}
