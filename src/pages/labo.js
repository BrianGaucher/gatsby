import React from "react";
import { Link } from "gatsby";

const GiftListPage = () => {
  return (
    <div style={{ maxWidth: 100%, margin: 0, fontFamily: "sans-serif" }}>
      {/* Breadcrumb navigation */}
      <nav style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#0070f3" }}>Home</Link>
        <span style={{ margin: "0 0.5rem" }}>→</span>
        <span style={{ color: "#555" }}>Labo</span>
      </nav>

      {/* Embedded Etherpad */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          height: "90vh",
        }}
      >
        <iframe
          name="embed_readwrite"
          src="https://glowdocs.com/p/tgzisclkrs8f8ohnpg4y?showControls=false&showChat=true&showLineNumbers=true&useMonospaceFont=true"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default GiftListPage;
