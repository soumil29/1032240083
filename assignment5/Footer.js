function Footer() {
  return (
    <footer style={{
      background: "#1a1a1a",
      color: "white",
      textAlign: "center",
      padding: "25px",
      marginTop: "40px"
    }}>
      <p>© 2026 Soumil Jha</p>
      <p style={{marginTop: "10px"}}>
        <a href="#" style={{color: "#667eea", margin: "0 10px", textDecoration: "none"}}>
          GitHub
        </a>
        <a href="#" style={{color: "#667eea", margin: "0 10px", textDecoration: "none"}}>
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;