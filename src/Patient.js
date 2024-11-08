// Patient.js
import React, { useEffect, useState } from 'react';
import { fetchPatientData, fetchDiagnosticReports } from './api';

import { PATIENT_ID } from './config';
function Patient({ patientId }) {
  const [patientData, setPatientData] = useState(null);
  const [reports, setReports] = useState([]);

  useEffect(() => {

    const getData = async () => {
      try {
        const data = await fetchPatientData(PATIENT_ID);
        setPatientData(data);

        const reportData = await fetchDiagnosticReports(PATIENT_ID);
        setReports(reportData.entry || []); // FHIR responses often use `entry` for array results
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [patientId]);

  return (
    <div>
      {patientData ? (
        <div>
          <h2>Patient Details</h2>
          <p>Name: {patientData.name[0].text}</p>
          <p>Gender: {patientData.gender}</p>
          <p>Birth Date: {patientData.birthDate}</p>
        </div>
      ) : (
        <p>Loading patient data...</p>
      )}

      <div>
        <h2>Diagnostic Reports</h2>
        {reports.length > 0 ? (
          <ul>
            {reports.map((report, index) => (
              <li key={index}>
                <h3>{report.resource?.code?.text || 'Report'}</h3>
                <p>Status: {report.resource?.status}</p>
                <p>Effective Date: {report.resource?.effectiveDateTime}</p>
                {report.resource?.conclusion && (
                  <p>Conclusion: {report.resource.conclusion}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No diagnostic reports available for this patient.</p>
        )}
      </div>
    </div>
  );
}

export default Patient;
