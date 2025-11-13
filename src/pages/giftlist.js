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

      {/* Page header */}
      <h1 style={{ marginBottom: "1rem" }}>Gift List</h1>

      {/* Embedded Etherpad */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
        <iframe
          src="https://glowdocs.com/p/vdppsdu3r5yltecpi937?showControls=false&showChat=true&showLineNumbers=true&useMonospaceFont=false"
          width="100%"
          height="80vh"
          style={{ border: "none" }}
          title="Gift List"
        ></iframe>
      </div>
    </div>
  );
};

export default GiftListPage;

/*
import React from "react";

const GiftListPage = () => {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "2rem auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <iframe
        src="https://u.cave.su/p/u98j75-SuaWDg5QwBZp1?showControls=false&showChat=true&showLineNumbers=true&useMonospaceFont=false"
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="Gift List"
      ></iframe>
    </div>
  );
};

export default GiftListPage;
*/
