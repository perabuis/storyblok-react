import React from "react";
import Head from "./Head";
import Footer from "./Footer";


const Layout = ({ children }) => (
  <div className="bg-slate-100">
  <Head/>
    {children}
  <Footer />
  </div>
);

export default Layout;
