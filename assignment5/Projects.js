function Projects() {
  const projects = [
    {
      name: "Student Portfolio UI",
      desc: "A responsive portfolio built using React and reusable components."
    },
    {
      name: "Library Management System",
      desc: "Database-driven system using SQL for efficient record handling."
    },
    {
      name: "Chess Tournament Manager",
      desc: "Manages players, pairings, and tournament results."
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div style={{
        display: "grid",
        gap: "20px"
      }}>
        {projects.map((p, index) => (
          <div key={index} className="card" style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;