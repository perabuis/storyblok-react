import React from "react";
import Head from "./Head";
import Footer from "./Footer";


const Layout = ({ children }) => (
  <div>
    <Head/>
      <div className="bg-slate-100">
        {children}
      </div>
    <Footer />
  </div>
 
);

export default Layout;
