import "./report.css";
import { useNavigate } from "react-router-dom";

export default function MissionReport() {
  const navigate = useNavigate();
  function handleButton() {
    navigate("/dating");
  }
  return (
    <main className="main-page">
      <div className="page-header">
        <p>Cosmic Recovery Initiative</p>
        <p>Report #0016783</p>
      </div>

      <div className="center-page">
        <h1>CLASSIFIED</h1>
        <h3 className="top-secret">Top Secret</h3>
        <h3>Planetary Habitability Intelligence Report</h3>
      </div>

      <div className="middle-page">
        <p>MISSION: Operation New Horizon</p>
        <p>OBJECTIVE: Identify a viable replacement for Earth</p>
        <p>AUTHORIZED PERSONNEL ONLY</p>
        <hr />
        <h1>PRELIMINARY FINDINGS—UNVERIFIED</h1>
        <p>
          Following Earth's environmental collapse, the Cosmic Recovery
          Initiative has identified Mars and Venus as potential relocation sites
          for humanity. Current intelligence suggests both planets may support
          human settlement with minimal environmental adaptation.
        </p>
        <h1>TARGET 01: MARS</h1>
        <p>
          Preliminary reports indicate that Mars possesses a breathable
          atmosphere with oxygen levels comparable to Earth's. Surface
          temperatures are believed to remain relatively mild throughout the
          year, and liquid water is reportedly abundant. Radiation exposure is
          classified as negligible.
        </p>
        <h1>TARGET 02: VENUS</h1>
        <p>
          Venus is believed to offer a warm, tropical environment suitable for
          permanent human habitation. Atmospheric pressure is reportedly similar
          to Earth's, and surface conditions are considered stable. Protective
          equipment is not expected to be necessary.
        </p>
        <h1>MISSION DIRECTIVE</h1>
        <p>
          These findings have not been independently verified. Operatives must
          establish contact with native inhabitants through the Tinderstellar
          network, obtain firsthand environmental intelligence, and determine
          whether either planet is truly suitable for human survival.
        </p>
      </div>
      <footer className="footer">
        <p>WARNING: Intelligence discrepancies must be reported immediately.</p>
        <p>AUTHORIZED BY: Directorate of Planetary Exploration</p>
      </footer>

      <button className="report-button" type="button" onClick={handleButton}>
        ACCEPT MISSION
      </button>
    </main>
  );
}
