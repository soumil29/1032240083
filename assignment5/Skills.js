function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "C++", "DSA"];

  return (
    <section>
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <span key={index} style={{
            display: "inline-block",
            background: "#667eea",
            color: "white",
            padding: "10px 16px",
            margin: "8px",
            borderRadius: "30px",
            fontWeight: "500",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            cursor: "pointer"
          }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;