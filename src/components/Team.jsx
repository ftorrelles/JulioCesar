import { Container } from "react-bootstrap";
import "../styles/team.css";

const Team = () => {
  const stats = [
    { number: "2000+", label: "Pacientes recuperados" },
    { number: "100+", label: "Clientes Activos" },
    { number: "99%", label: "Comentarios Positivos" },
    { number: "15", label: "Años de Experiencia" },
  ];
  return (
    <>
      <Container fluid>
        <section className="section_team">
          <div>
            <h2
              style={{
                paddingBottom: "2rem",
                textAlign: "center",
              }}
            >
              Nuestro equipo
            </h2>
          </div>
          <div className="team">
            <div className="team_member">
              <h3 className="member_name">Julio Cesar</h3>
              <div className="member_image">
                <img src="/team1.png" className="active" alt="Julio" />
              </div>
              <div className="member_description">
                <p>
                  Director
                  <br />
                  <br />
                  Terapeuta en adicciones <br />
                  <br />
                  15 años de experiencia
                </p>
              </div>
            </div>
            <div className="team_member">
              <h3 className="member_name">Maria Jimenez</h3>
              <div className="member_image">
                <img src="/team2.png" className="active" alt="Maria" />
              </div>
              <div className="member_description">
                <p>
                  Psicologa
                  <br />
                  <br />
                  Licenciada en Psicologia <br />
                  <br />
                  25 años de experiencia
                </p>
              </div>
            </div>
            <div className="team_member">
              <h3 className="member_name">Martha Gonzalez</h3>
              <div className="member_image">
                <img src="team3.png" className="active" alt="Martha" />
              </div>
              <div className="member_description">
                <p>
                  Terapeuta
                  <br />
                  <br />
                  Licenciada en administración <br />
                  <br />
                  10 años de experiencia
                </p>
              </div>
            </div>
            <div className="team_member">
              <h3 className="member_name">Sara Mendez</h3>
              <div className="member_image">
                <img src="team4.png" className="active" alt="Sara" />
              </div>
              <div className="member_description">
                <p>
                  Tutor
                  <br />
                  <br />
                  Licenciada en educación
                  <br />
                  <br />
                  17 años de experiencia
                </p>
              </div>
            </div>
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
    </>
  );
};

export default Team;
