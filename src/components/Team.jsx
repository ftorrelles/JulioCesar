import React from "react";
import { Container } from "react-bootstrap";
import "../styles/team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Julio Cesar",
      role: "Director",
      expertise: "Terapeuta en adicciones",
      experience: "15 años de experiencia",
      image: "/team1.png",
    },
    {
      name: "Jessica Medina",
      role: "Psicologa",
      expertise: "Licenciada en Psicología",
      experience: "3 años de experiencia",
      image: "/team2.png",
    },
    {
      name: "Patricia Camacho",
      role: "Supervisora alimentos",
      expertise: "Licenciada en administración",
      experience: "6 años de experiencia",
      image: "/team3.png",
    },
    {
      name: "Fawvel Martínez",
      role: "Tutor SENA",
      expertise: "Licenciada en educación",
      experience: "6 años de experiencia",
      image: "/team4.png",
    },
    {
      name: "Guillermo varón",
      role: "Facilitador terapéutico",
      expertise: "Licenciada en educación",
      experience: "4 años de experiencia",
      image: "/team5.png",
    },
    {
      name: "Elizabeth Daut",
      role: "Terapeuta en adicciones",
      expertise: "Licenciada en educación",
      experience: "3 años de experiencia",
      image: "/team6.png",
    },
    {
      name: "Alejandro Rodríguez",
      role: "Operador terapéutico",
      expertise: "Licenciada en educación",
      experience: "5 años de experiencia",
      image: "/team7.png",
    },
    {
      name: "Jhon Garcés",
      role: "Secretario",
      expertise: "Licenciada en educación",
      experience: "2 años de experiencia",
      image: "/team8.png",
    },
  ];
  const stats = [
    { number: "2000+", label: "Pacientes recuperados" },
    { number: "100+", label: "Clientes Activos" },
    { number: "99%", label: "Comentarios Positivos" },
    { number: "15", label: "Años de Experiencia" },
  ];

  return (
    <Container fluid>
      <section className="section_team">
        <h2 style={{ paddingBottom: "2rem", textAlign: "center" }}>
          Nuestro equipo
        </h2>
        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team_member">
              <h3 className="member_name">{member.name}</h3>
              <div className="member_image">
                <img src={member.image} className="active" alt={member.name} />
              </div>
              <div className="member_description">
                <p>
                  {member.role}
                  <br />
                  {/* <br />
                  {member.expertise}
                  <br /> */}
                  <br />
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Team;
