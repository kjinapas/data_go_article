"use client"

import React, { Suspense } from "react";

import Footer from "./Components/Footer";
import "../app/globals.css";

import Loading from "./Loading";

export default function RootLayout({ children}) {
  

  return (
    <html lang="en">
      <body >

    <Suspense fallback={<Loading/>}>
        {children}
        </Suspense>
    <Footer/>
        </body>
    </html>
  );
}
