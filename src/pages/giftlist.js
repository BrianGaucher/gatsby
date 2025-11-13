import React from "react";
import { Link } from "gatsby";

const GiftListPage = () => {
  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", fontFamily: "sans-serif" }}>
      {/* Breadcrumb navigation */}
      <nav style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#0070f3" }}>Home</Link>
        <span style={{ margin: "0 0.5rem" }}>→</span>
        <span style={{ color: "#555" }}>Gift List</span>
      </nav>

{/* Embedded Etherpad */}
<div
  style={{
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    height: "80vh", // <- add this so container has height
  }} // <-- make sure this closes here with }
> 
  <iframe
    src="https://glowdocs.com/p/vdppsdu3r5yltecpi937?showControls=false&showChat=true&showLineNumbers=true&useMonospaceFont=false"
    width="100%"
    height="100%" // fill container
    style={{ border: "none" }}
    title="Gift List"
  ></iframe>
</div>

    </div>
  );
};

export default GiftListPage;
